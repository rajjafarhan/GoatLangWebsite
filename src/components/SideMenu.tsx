// src/components/SideMenu.js
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Placeholder from "./Placeholder";

export const links = [
  {
    id: "1",
    title: "Button 1",
    path: "/content/button1",
  },
  {
    id: "2",
    title: "Button 2",
    path: "/content/button2",
  },
  {
    id: "3",
    title: "Button 3",
    path: "/content/button2",
  },
  {
    id: "4",
    title: "Button 4",
    path: "/content/button2",
  },
  {
    id: "5",
    title: "Button 5",
    path: "/content/button2",
  },
  {
    id: "6",
    title: "Button 6",
    path: "/content/button2",
  },
  {
    id: "6",
    title: "Button 6",
    path: "/content/button2",
  },
  {
    id: "6",
    title: "Button 6",
    path: "/content/button2",
  },
  {
    id: "6",
    title: "Button 6",
    path: "/content/button2",
  },
];

const SideMenu = ({parentHeight}:{parentHeight:number}) => {
  const [isFixed, setIsFixed] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if(offset > 892){
        setIsFixed(false)
      }else if(offset > 66){
        setIsFixed(true)
      }else if(offset < 66){
        setIsFixed(false)
      }
      // setIsFixed(offset > 66);
      console.log(offset)
     
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log(parentHeight)

  return (
    <>
    {isFixed && <Placeholder/>}
      <div
        className={`side-menu w-72 h-auto bg-[#eee] ${
          isFixed ? "fixed top-0 transition-all duration-300" : ""
        }`}
        // style={{height:655}}
      >
        {links.map((link) => {
          return (
            <NavLink
              key={link.id}
              to={link.path}
              className="text-[20px] block p-4 border-b border-solid border-gray-300 hover:bg-e3e8ec"
            >
              {link.title}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default SideMenu;
