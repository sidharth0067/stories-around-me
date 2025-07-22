function StoryPopup({ story, onClose }) {
  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <div className="popup-left">
          <img src={story.image} alt={story.caption} className="popup-img"/>
        </div>
        <div className="popup-right">
          <h3>{story.caption}</h3>
          <p><strong>Posted by:</strong> {story.postedBy}</p>
          <div><strong>Likes:</strong> {story.likes}</div>
          <div className="popup-comments">
            <strong>Comments:</strong>
            {story.comments.length === 0
              ? <div>No comments yet.</div>
              : story.comments.map(c => (
                <div key={c.id}><b>{c.user}:</b> {c.text}</div>
              ))}
          </div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default StoryPopup;
