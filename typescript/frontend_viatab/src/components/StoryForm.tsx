import { useState } from 'react';
import type { Story } from '../api';
import { addStory } from '../api';

interface StoryFormProps {
  deptId: number;
  onAdd: (s: Story) => void;
}

export default function StoryForm({ deptId, onAdd }: StoryFormProps) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const newStory = await addStory(deptId, { title, content });
      onAdd(newStory);
      setTitle('');
      setContent('');
    } catch (err) {
      console.error(err);
    }
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
