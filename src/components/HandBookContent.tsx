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
    <h5 className='text-4xl mb-5'>{content?.title}</h5>
    <p className='text-lg'>
    {content?.content}
    </p>

    </div>
  )
}

export default HandBookContent