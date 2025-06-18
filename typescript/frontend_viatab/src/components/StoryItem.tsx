import React from 'react';
import type { Story } from './types';

interface StoryItemProps {
  story: Story;
  onDelete: (id: number) => void;
}

export default function StoryItem({ story, onDelete }: StoryItemProps) {
  function handleDelete() {
    fetch(`http://localhost:8080/api/stories/${story.id}`, { method: 'DELETE' })
      .then(() => onDelete(story.id))
      .catch(console.error);
  }

  return (
    <>
      <h3>{story.title}</h3>
      <p>{story.content}</p>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
