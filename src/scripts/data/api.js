
const BASE_URL = 'https://story-api.dicoding.dev/v1';

export async function login(email, password) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  return response.json();
}

export async function register(name, email, password) {
  const response = await fetch(`${BASE_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password })
  });
  return response.json();
}

export async function addStory(description, photo, lat, lon) {
  const token = localStorage.getItem('token');
  const formData = new FormData();
  formData.append('description', description);
  formData.append('photo', photo);
  if (lat && lon) {
    formData.append('lat', lat);
    formData.append('lon', lon);
  }

  const response = await fetch(`${BASE_URL}/stories`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData
  });

  return response.json();
}

export async function getAllStories() {
  const token = localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}/stories`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.json();
}

export async function getStoryDetail(id) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${BASE_URL}/stories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response.json();
}
