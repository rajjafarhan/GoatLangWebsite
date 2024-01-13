import React from 'react'
import { NavLink } from 'react-router-dom';
import { links } from '../utils';


const Placeholder = () => {
  return (
    <div
        className={`side-menu h-1483 w-72 bg-[#eee] `}
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
  )
}

export default Placeholder