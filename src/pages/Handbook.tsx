import React, { useEffect, useState } from "react";
import SideMenu from "../components/SideMenu";
import HandBookContent from "../components/HandBookContent";

export const Handbook = () => {
    const [parentHeight, setParentHeight] = useState(0);

  useEffect(() => {
    const parentElement = document.getElementById('handbookElementId'); // Replace with the actual ID or use another selector
    if (parentElement) {
      setParentHeight(parentElement.offsetHeight);
    }
  }, []);
  return (
    <div id="handbookElementId" className="border border-red-500 bg-[#faf9f8] flex relative">
      <SideMenu parentHeight={parentHeight}/>
      <HandBookContent />
    </div>
  );
};
