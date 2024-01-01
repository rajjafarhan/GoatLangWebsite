import React, { useState } from 'react';
import Post from '../components/Post';
import Modal from '../components/Modal';
import PostForm from '../components/PostFormmm';
import { FaPlus } from 'react-icons/fa';


interface PostData {
  title: string;
  content: string;
  image: File | null;
  comments: string[];
}

const HomePage: React.FC = () => {
  const dummyPosts: PostData[] = [
    {
      title: 'Sample Post 1',
      content: 'This is the content of the first post.',
      image: null,
      comments: ['Comment 1', 'Comment 2'],
    },
    {
      title: 'Sample Post 2',
      content: 'This is the content of the second post.',
      image: null,
      comments: ['Comment 3', 'Comment 4'],
    },
   
  ];

  const [posts, setPosts] = useState<PostData[]>(dummyPosts);
  const [isPostFormOpen, setPostFormOpen] = useState(false);

  const handleAddPost = (newPost: { title: string; content: string; image: File | null }) => {
    const updatedPosts = [ { ...newPost, comments: [] } ,...posts];
    setPosts(updatedPosts);
    setPostFormOpen(false);
  };

  const handleAddComment = (postId: number, comment: string) => {
    const updatedPosts = posts.map((post, index) =>
      index === postId ? { ...post, comments: [...post.comments, comment] } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className='flex w-full items-center justify-center'>
    <div className=' w-full h-auto m-6 flex flex-col items-center'>
       <div className=' w-full'>
      <h1 className='text-4xl font-bold font-2 text-teal-700'>GoatLang Troubleshoot: <span className=' text-3xl font-normal text-teal-500' > Share Your Programming Challenges and Solutions!</span></h1>
      </div>
      <div className='w-full mt-2'>
      <button onClick={() => setPostFormOpen(true)} className="mt-4  bg-teal-700 text-white py-[8px] px-4 rounded-md hover:bg-teal-600">
        <div className='flex flex-row justify-center gap-2'>
        <FaPlus className="mt-[3px]" />
        <p className='text-lg'>Add Your Issues</p>
        </div>
      </button>
   
   
    
      </div>
      <div className='w-full mt-6'>

      {posts.map((post, index) => (
        <Post key={index} {...post} addComment={(comment) => handleAddComment(index, comment)} />
      ))}

      <Modal isOpen={isPostFormOpen} onClose={() => setPostFormOpen(false)}>
        <PostForm onSubmit={handleAddPost} />
      </Modal>
    </div>
    </div>
    </div>
  );
};

export default HomePage;
