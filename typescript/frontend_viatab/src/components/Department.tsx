import { useEffect, useState } from 'react';
import StoryForm from './StoryForm';
import StoryItem from './StoryItem';
import type { Department, Story } from '../api';
import { getDepts, getStories, deleteStory } from '../api';

export default function Department({ name }: { name: string }) {
  const [deptId, setDeptId] = useState<number | null>(null);
  const [stories, setStories] = useState<Story[]>([]);

  // Load department ID
  useEffect(() => {
    getDepts()
      .then((depts) => {
        const dept = depts.find((d) => d.name === name);
        if (dept) setDeptId(dept.id);
      })
      .catch(console.error);
  }, [name]);

  // Load stories when deptId is known
  useEffect(() => {
    if (deptId !== null) {
      getStories(deptId)
        .then(setStories)
        .catch(console.error);
    }
  }, [deptId]);

  function handleAddStory(newStory: Story) {
    setStories((prev) => [...prev, newStory]);
  }

  function handleDeleteStory(id: number) {
    deleteStory(id).then(() => {
      setStories((prev) => prev.filter((s) => s.id !== id));
    }).catch(console.error);
  }

  return (
    <div>
      <h2>{name} Department</h2>
      {deptId !== null && <StoryForm deptId={deptId} onAdd={handleAddStory} />}
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
