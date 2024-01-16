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
    <div className='text-lg w-full'>
   
    {content?.content?.desc}
    </div>
    <h1 className='text-black text-3xl mt-4 '>{content?.content?.h1}</h1>
   
    
    {content?.code.map((item , index)=>(
      <div key={index}>
      <div className='text-black mt-8 text-2xl w-full'>{item?.head}</div>
     
       <div className='bg-neutral-200 text-black px-6 text-md w-[70%] py-4 mt-2 shadow-md shadow-neutral-400 whitespace-pre-wrap '><pre>{item?.codeString}</pre></div>
       <div className='w-full '>
      <pre className='mt-8 text-black w-[100%] whitespace-pre-wrap font-serif'>{item?.explanation}</pre>
      </div>
      
       </div>

    ))}
    </div>

  );
}

export default HandBookContent