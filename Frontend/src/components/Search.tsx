import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { links } from "../utils";
import { Link, useNavigate } from "react-router-dom";

interface Link {
    id: string;
    title: string;
    path: string;
}[]


const Search: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [filteredLinks, setFilteredLinks] = useState<Link[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    e.target.value.length === 0 ? setFilteredLinks([]) : 
    setFilteredLinks(
      links.filter((obj) => obj.title.toLowerCase().includes(inputText.toLowerCase()))
    );
  };

  const navigate = useNavigate();

  const handleNavigation = (path:string) => {
    setInputText("")
    setFilteredLinks([])
    navigate(path)
  }

  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full pl-8 pr-4 py-2 text-teal-800 border rounded focus:outline-none focus:border-blue-500"
        value={inputText}
        onChange={(e) => handleChange(e)}
      />
      <div className="absolute top-0 left-0 ml-2 mt-3">
        <FiSearch className="text-gray-500" />
      </div>

      {filteredLinks.length > 0 ? (
        <div className="absolute mt-4 max-h-48 overflow-y-auto w-full bg-white border border-gray-300 rounded shadow-md z-50">
          {filteredLinks.map((link) => (
            <div key={link.id} className="px-4 py-2 border-b cursor-pointer hover:bg-gray-200" onClick={() => handleNavigation(link.path)}>
              <p className="text-teal-800">
                {link.title}
              </p>
            </div>
          ))}
        </div>
      ) : null}
      {inputText.length > 0 && filteredLinks.length === 0 ? <p>No result</p>: null}
    </div>
  );
};

export default Search;