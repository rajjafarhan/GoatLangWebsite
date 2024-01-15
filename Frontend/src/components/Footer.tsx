import React from 'react'
import Cards from './Cards';

const Footer = () => {
    return (
        <footer className="bg-teal-500 text-zinc-50 py-8">
          <div className="container mx-10 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Column 1 */}
              <div>
                <h3 className="font-bold mb-2">GoatLang</h3>
                <p>Made with love in Karachi, Pakistan</p>
                    <p>&copy; 2024 GoatLang. All rights reserved. </p><p> Contact us: contact@goatlang.com</p>
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
