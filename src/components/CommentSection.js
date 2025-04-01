import React, { useState } from 'react';

function CommentSection({ comments, addComment }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addComment(text.trim());
      setText('');
    }
  };

  return (
    <div className="mt-8">
      <h4 className="text-xl font-bold text-blue-600 mb-3">Comments</h4>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          className="input flex-1"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
        />
        <button type="submit" className="btn-primary">Post</button>
      </form>

      <div className="space-y-2">
        {comments.map((c, idx) => (
          <div key={idx} className="card">
            <p>{c}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentSection;
