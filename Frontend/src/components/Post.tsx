// src/components/Post.tsx
import React from 'react';
import CommentSection from './CommentSection'

interface PostProps {
  title: string;
  content: string;
  image: File | null;
  comments: string[];
  addComment: (comment: string) => void;
}

const Post: React.FC<PostProps> = ({ title, content, image, comments, addComment }) => {
  return (
    <div className="mb-6 p-4 bg-white rounded-md shadow-md  shadow-gray-400">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="mt-2">{content}</p>
      {image && (
        <div className="mt-4 h-[200px] sm:h-80 w-full flex justify-center items-center ">
          <img src={URL.createObjectURL(image)} alt="Post" className="max-w-full h-full rounded-md" />
        </div>
      )}
      <CommentSection comments={comments} addComment={addComment} />
    </div>
  );
};

export default Post;