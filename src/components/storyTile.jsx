function StoryTile({ story, onClick }) {
  return (
    <div className="story-tile" onClick={onClick}>
      <img src={story.image} alt={story.caption} className="story-thumb" />
      <div className="story-likes">{story.likes} ❤️</div>
    </div>
  );
}

export default StoryTile;
