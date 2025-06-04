// CSS imports
import '../styles/styles.css';
// Baris berikut sudah benar untuk dihapus/dikomentari jika Anda memuat Leaflet CSS dari CDN di index.html
// import 'leaflet/dist/leaflet.css';

import App from './pages/app'; // Impor App cukup satu kali

// Listener untuk DOMContentLoaded juga cukup satu kali
document.addEventListener('DOMContentLoaded', async () => {
  const app = new App({
    content: document.querySelector('#main-content'),
    drawerButton: document.querySelector('#drawer-button'),
    navigationDrawer: document.querySelector('#navigation-drawer'),
  });
  await app.renderPage(); // Render halaman awal

  // Listener untuk perubahan hash URL (navigasi SPA)
  window.addEventListener('hashchange', async () => {
    await app.renderPage();
  });

  // Fokus awal untuk aksesibilitas jika konten utama ada
  // (Ini bisa juga diletakkan di dalam app.renderPage() untuk konsistensi setelah setiap render)
  const mainContent = document.querySelector('#main-content');
  if (mainContent) {
    mainContent.focus();
  }
});


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => {
        console.log('Service Worker registered:', reg);

        // Push Notification dengan VAPID
        const vapidKey = 'DEh7QnydTt7JyKS8tzpj';
        return reg.pushManager.getSubscription()
          .then(sub => {
            if (sub === null) {
              return reg.pushManager.subscribe({
                userVisibleOnly: true,
                applicationServerKey: vapidKey
              });
            }
            return sub;
          });
      })
      .then(sub => {
        console.log('Push Subscription:', JSON.stringify(sub));
      })
      .catch(err => console.error('SW registration failed:', err));
  });
}
