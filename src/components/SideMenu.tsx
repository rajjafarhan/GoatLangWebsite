// src/components/SideMenu.js
import { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import Placeholder from "./Placeholder";
import { links } from "../utils";



const SideMenu = ({parentHeight}:{parentHeight:number}) => {
  const [isFixed, setIsFixed] = useState(false);
  const [check, setCheck] = useState(false);
  
  

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if(offset > 892){
        setIsFixed(true)
        setCheck(true)
      }else if(offset > 66){
        setIsFixed(true)
        setCheck(false)
      }else if(offset < 66){
        setIsFixed(false)
        setCheck(false)
      }
      // setIsFixed(offset > 66);
      
     
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log(parentHeight)
  const activeLink = ({ isActive }: { isActive: boolean }) =>
  isActive ? {borderRight: "4px solid #115e59" }: {};

  return (
    <>
    {isFixed && <Placeholder/>}
      <div
        className={`w-72 h-${parentHeight} bg-[#eee] ${
          isFixed ? "fixed top-0 transition-all duration-300" : ""
        } ${check ? "absolute bottom-0 transition-all duration-300" : ""} `}
        // style={{height:655}}
      >
        {links.map((link) => {
          return (
            <NavLink
              key={link.id}
              to={link.path}
              className={`text-[20px] block p-4 border-b border-solid border-gray-300 hover:bg-e3e8ec`}
              style={activeLink({
                isActive: location.pathname === link.path,
              })}
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
