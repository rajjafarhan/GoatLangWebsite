import { useEffect, useRef, useState } from 'react';
import Placeholder from './Placeholder';
import { NavLink } from 'react-router-dom';
import { links } from './SideMenu';

function Check({parentHeight}:{parentHeight:number}) {
  const menuRef = useRef(null);
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
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // This will be true when the target is not intersecting with root
        setIsFixed(!entry.isIntersecting);
      },
      {
        root: null, // observing intersections with respect to the viewport
        threshold: 0, // callback will be invoked when the visibility of the target passes this threshold
      }
    );

    if (menuRef.current) {
      observer.observe(menuRef.current);
    }

    return () => {
      if (menuRef.current) {
        observer.unobserve(menuRef.current);
      }
    };
  }, []);

  return (
    <>
      {isFixed && <Placeholder />}
      <div
        ref={menuRef}
        className={`w-72 h-${parentHeight} bg-[#eee] ${
          isFixed ? "fixed top-0 transition-all duration-300" : ""
        } `}
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
}

export default Check