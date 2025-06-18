import React, { useState } from 'react';
import type { Story } from './types';

interface StoryFormProps {
  department: string;
  onAdd: (s: Story) => void;
}

export default function StoryForm({ department, onAdd }: StoryFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    fetch(`http://localhost:8080/api/stories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, department }),
    })
      .then((res) => res.json() as Promise<Story>)
      .then(onAdd)
      .then(() => {
        setTitle('');
        setContent('');
      })
      .catch(console.error);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button type="submit">Add Story</button>
    </form>
  );
}