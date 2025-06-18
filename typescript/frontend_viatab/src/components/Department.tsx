import { useEffect, useState } from 'react';
import StoryForm from './StoryForm';
import StoryItem from './StoryItem';
import type { Story } from './types';

export default function Department({ name }: { name: string }) {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/stories?department=${name}`)
      .then((res) => res.json())
      .then(setStories)
      .catch(console.error);
  }, [name]);

  function handleAddStory(newStory: Story) {
    setStories((prev) => [...prev, newStory]);
  }

  function handleDeleteStory(id: number) {
    setStories((prev) => prev.filter((s) => s.id !== id));
  }

  return (
    <div>
      <h2>{name} Department</h2>
      <StoryForm department={name} onAdd={handleAddStory} />
      <ul className="story-list">
        {stories.map((story) => (
          <li key={story.id} className="story-item">
            <StoryItem story={story} onDelete={handleDeleteStory} />
          </li>
        ))}
      </ul>
    </div>
  );
}