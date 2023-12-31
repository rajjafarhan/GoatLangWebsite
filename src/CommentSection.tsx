import React, { useState,  FormEvent } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

interface CommentSectionProps {
  comments: string[];
  addComment: (comment: string) => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments, addComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      addComment(newComment);
      setNewComment('');
    }
  };

  return (
    <div className="mt-4 ">
      
      <div className=''>
      <ul >
        {comments.map((comment, index) => (
          <li key={index}  className="mb-2 flex gap-2 items-center bg-neutral-50 py-4">
            <IoIosArrowForward/>
            {comment}
          </li>
        ))}
      </ul>
      </div>
      <form onSubmit={handleCommentSubmit} className="mt-4">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full px-3 py-4 border rounded-md"
          placeholder="Add a comment"
        />
      
        <button type="submit" className="mt-2 bg-teal-500 text-white py-2 px-4 rounded-md hover:bg-teal-600">
          Add Comment
        </button>
       
      </form>
     
    </div>
  );
};

export default CommentSection;
