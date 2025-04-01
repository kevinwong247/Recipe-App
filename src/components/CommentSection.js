import React, { useState } from 'react';

function CommentSection({ comments = [], addComment }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addComment(text);
      setText('');
    }
  };

  return (
    <div className="mt-10">
      <h4 className="text-lg font-semibold text-indigo-700 mb-4">Comments</h4>
      <ul className="space-y-3 mb-6">
        {comments.map((c, index) => (
          <li key={index} className="bg-gray-100 p-3 rounded-md text-sm text-gray-700">{c}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Leave a comment"
          className="input flex-1"
        />
        <button type="submit" className="btn-primary">Post</button>
      </form>
    </div>
  );
}
export default CommentSection;
