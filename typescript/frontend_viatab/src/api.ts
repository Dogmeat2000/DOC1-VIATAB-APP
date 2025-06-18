const BASE = 'http://localhost:8080/api';

export async function getDepts() {
  return fetch(`${BASE}/departments`).then(r=>r.json());
}

export async function getStories(deptId:number) {
  return fetch(`${BASE}/departments/${deptId}/stories`).then(r=>r.json());
}

export async function addStory(deptId:number, data:{title:string,content:string}) {
  return fetch(`${BASE}/departments/${deptId}/stories`, {
    method:'POST', headers:{'Content-Type':'application/json'},
    body:JSON.stringify(data)
  }).then(r=>r.json());
}

export async function updateStory(id:number, data:{title:string,content:string}) {
  return fetch(`${BASE}/stories/${id}`, {
    method:'PUT', headers:{'Content-Type':'application/json'},
    body:JSON.stringify(data)
  }).then(r=>r.json());
}

export async function deleteStory(id:number) {
  return fetch(`${BASE}/stories/${id}`, { method:'DELETE' });
}
