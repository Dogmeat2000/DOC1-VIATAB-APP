import type { Story } from '../api';

interface StoryItemProps {
  story: Story;
  onDelete: (id: number) => void;
}

export default function StoryItem({ story, onDelete }: StoryItemProps) {
  function handleDelete() {
    onDelete(story.id);
  }

  return (
    <>
      <h3>{story.title}</h3>
      <p>{story.content}</p>
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
