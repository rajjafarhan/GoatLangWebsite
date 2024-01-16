import React, { useState } from 'react';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import { FaPlus } from 'react-icons/fa';
import FormModal from '../components/FormModal';
import error1 from '../../pics/error1.png'


interface PostData {
  title: string;
  content: string;
  image: File | string | null;
  comments: string[];
}

const FeedBack: React.FC = () => {
  const dummyPosts: PostData[] = [
    {
      title: 'Code not Working',
      content: 'I am tryping to run this conditional statement but it is not working',
      image: error1,
      comments: ['To use == update to the latest version of goatLang else you should use ===. Secondly you have not closed your if and else display statement', 'You have not closed the if and else display statements with quotation marks'],
    },
    {
      title: 'How to download goatLang',
      content: 'how to install goatLang',
      image: null,
      comments: ['To get started with GoatLang you should goto download button from there you can install its package', 'Download from this link-->  https://www.npmjs.com/package/goat-code '],
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

      <FormModal isOpen={isPostFormOpen} onClose={() => setPostFormOpen(false)}>
        <PostForm onSubmit={handleAddPost} />
      </FormModal>
    </div>
    </div>
    </div>
  );
};

export default FeedBack;