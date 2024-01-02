import React from 'react'
import Cards from './Cards';

const Footer = () => {
    return (
        <footer className="bg-teal-700 text-zinc-50 py-8 px-4 w-screen">
          <div className="container mx-auto">
            {/* Custom Component */}
            <div className="mb-4 w-full">
              <Cards bgColor='bg-teal-700'/>
            </div>
            
            {/* Horizontal Line */}
            <hr className="border-b-2 border-zinc-50 mb-4" />
    
            {/* Four Columns */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Column 1 */}
              <div>
                <h3 className="font-bold mb-2">GoatLang</h3>
                <p>Made with love in Karachi, Pakistan</p>
              </div>
    
              {/* Column 2 */}
              <div>
                <h3 className="font-bold mb-2">Dummy Links</h3>
                <ul>
                  <li><a href="#" className="underline">Link 1</a></li>
                  <li><a href="#" className="underline">Link 2</a></li>
                  <li><a href="#" className="underline">Link 3</a></li>
                  <li><a href="#" className="underline">Link 4</a></li>
                </ul>
              </div>
    
              {/* Column 3 */}
              <div>
                <h3 className="font-bold mb-2">Dummy Links</h3>
                <ul>
                  <li><a href="#" className="underline">Link 1</a></li>
                  <li><a href="#" className="underline">Link 2</a></li>
                  <li><a href="#" className="underline">Link 3</a></li>
                  <li><a href="#" className="underline">Link 4</a></li>
                </ul>
              </div>
    
              {/* Column 4 */}
              <div>
                <h3 className="font-bold mb-2">Dummy Links</h3>
                <ul>
                  <li><a href="#" className="underline">Link 1</a></li>
                  <li><a href="#" className="underline">Link 2</a></li>
                  <li><a href="#" className="underline">Link 3</a></li>
                  <li><a href="#" className="underline">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      );
}

export default Footer