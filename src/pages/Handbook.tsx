import  { useEffect, useState } from "react";
import SideMenu from "../components/SideMenu";
import HandBookContent from "../components/HandBookContent";
import Check from "../components/Check";
import { Route, Routes, useParams } from "react-router-dom";

const Handbook = () => {
    const [parentHeight, setParentHeight] = useState(0);

    const {id}= useParams()
    console.log(id)
    

  useEffect(() => {
    const parentElement = document.getElementById('handbookElementId');
    if (parentElement) {
      setParentHeight(parentElement.offsetHeight);
    }
  }, []);

  return (
    <div id="handbookElementId" className="bg-[#faf9f8] flex relative">
      {/* <Check parentHeight={parentHeight}/> */}
      <SideMenu parentHeight={parentHeight} />
      <Routes>
        <Route path="/handbook-content/:id" element={<HandBookContent />}/>  
      </Routes>
    </div>
  );
};
export default Handbook;
