import React, { useState, ChangeEvent, FormEvent } from 'react';

interface PostFormProps {
  onSubmit: (newPost: { title: string; content: string; image: File | null }) => void;
}

const PostForm: React.FC<PostFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setImage(file || null);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ title, content, image });
    setTitle('');
    setContent('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className='w-full px-2 py-6'>
      <div className="mb-4">
        <label htmlFor="title" className="block text-gray-600 text-lg font-medium mb-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-4 border-2 rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="content" className="block text-gray-600 text-lg font-medium mb-2">
          Content
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full px-3 py-4 border-2 rounded-md"
          rows={6}
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="image" className="block text-gray-600 text-lg font-medium mb-2">
          Image (optional)
        </label>
        <input
          type="file"
          id="image"
          onChange={handleImageChange}
          accept="image/*"
          className="w-full px-3 py-2 border-2 rounded-md"
        />
      </div>
      <div className='flex justify-center mt-4'>
      <button type="submit" className="w-[70%] bg-teal-700 shadow-md text-center shadow-neutral-500 text-white text-lg py-2 rounded-md hover:bg-teal-600">
        Create Post
      </button>
      </div>
    </form>
  );
};

export default PostForm;
