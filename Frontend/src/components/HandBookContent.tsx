import React from 'react'
import { useParams } from 'react-router-dom';
import { hanbookContent } from '../utils';

const HandBookContent = () => {
  const cardStyle = {
    backgroundColor: "#ffffff",
    boxShadow:
      "0 1.6px 3.6px 0 rgba(0, 0, 0, 0.132), 0 0.3px 0.9px 0 rgba(0, 0, 0, 0.108)",
  };
  const { id } = useParams();
  const content = hanbookContent.find((content) => content.path===id)

 

  return (


    <div style={cardStyle} className='w-2/3 ml-10 mt-10 p-10 mb-10'>
    <h5 className='text-4xl mb-5 font-bold'>{content?.title}</h5>
    <p className='text-lg'>
   
    {content?.content.desc}
    </p>
    <h1 className='text-black text-3xl mt-2 '>{content?.content.h1}</h1>
    <h2 className='text-black mt-4 text-2xl '>{content?.content.h1}</h2>
    
    {content?.code.map((item , index)=>(
      <>
      <p className='text-black mt-4 text-xl'>{item.head}</p>
       <div className='bg-neutral-200 text-black px-6 text-lg w-[70%] py-4 mt-2 shadow-md shadow-neutral-400 '><pre>{item.codeString}</pre></div>
       <p className='mt-2 text-black'>{item.explanation}</p>
       </>

    ))}
    
   
 

    </div>
  
  );
}

export default HandBookContent