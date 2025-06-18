const BASE = 'http://localhost:8080/api';

export interface Department { id: number; name: string; }
export interface Story { id: number; title: string; content: string; department: Department; }

export async function getDepts(): Promise<Department[]> {
  const res = await fetch(`${BASE}/departments`);
  return res.json();
}

export async function getStories(deptId: number): Promise<Story[]> {
  const res = await fetch(`${BASE}/departments/${deptId}/stories`);
  return res.json();
}

export async function addStory(deptId: number, data: { title: string; content: string }): Promise<Story> {
  const res = await fetch(`${BASE}/departments/${deptId}/stories`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
  });
  return res.json();
}

export async function deleteStory(id: number): Promise<void> {
  await fetch(`${BASE}/stories/${id}`, { method: 'DELETE' });
}
