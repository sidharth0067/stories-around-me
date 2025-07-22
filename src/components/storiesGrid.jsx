import StoryTile from './storyTile';

function StoriesGrid({ stories, onTileClick }) {
  return (
    <div className="masonry-grid">
      {stories.map(story => (
        <StoryTile key={story.id} story={story} onClick={() => onTileClick(story)} />
      ))}
    </div>
  );
}

export default StoriesGrid;
