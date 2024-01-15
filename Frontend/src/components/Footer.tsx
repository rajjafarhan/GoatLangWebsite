import React from 'react'
import { Link } from 'react-router-dom';
import Cards from './Cards';

const Footer = () => {
    return (
        <footer className="bg-teal-500 text-zinc-50 py-8">
          <div className="container mx-10 ">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Column 1 */}
              <div>
                <h1 className="font-bold mb-2">GoatLang</h1>
                <p>Developed by students of NED</p>
                    <p>&copy; 2024 GoatLang. All rights reserved. </p><p> Contact us: contact@goatlang.com</p>
              </div>
    
              {/* Column 2 */}
              <div>
                <h3 className="font-bold mb-2">Download</h3>
                <ul>
                  <li><Link to="https://www.npmjs.com/package/goat-code" className="underline">NPM</Link></li>
                  <li><Link to="https://github.com/rajjafarhan/GoatLangWebsite" className="underline">Github</Link></li>
                  <li><Link to="https://www.npmjs.com/package/goat-code" className="underline">Installation</Link></li>
                </ul>
              </div>
    
              {/* Column 3 */}
              <div>
                <h3 className="font-bold mb-2">Learn</h3>
                <ul>
                  <li><Link to="/handbook/handbook-content/datatypes" className="underline">Data Types</Link></li>
                  <li><Link to="/handbook/handbook-content/variables" className="underline">Variable</Link></li>
                  <li><Link to="/handbook/handbook-content/function" className="underline">Functions</Link></li>
                  <li><Link to="/handbook/handbook-content/ifelse" className="underline">Conditional Statements</Link>
                  </li>
                </ul>
              </div>
    
              {/* Column 4 */}
              <div>
                <h3 className="font-bold mb-2">Interact</h3>
                <ul>
                  <li><Link to="/playground" className="underline">Playground</Link></li>
                  <li><Link to="/feedback" className="underline">FeedBack</Link></li>
                  <li><Link to="/feedback" className="underline">Community</Link></li>
                  <li><Link to="/feedback" className="underline">Contribute</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      );
}

export default Footer
