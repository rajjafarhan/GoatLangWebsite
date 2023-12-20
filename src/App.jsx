import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from "react-dom/client";
import Sidebar from './components/sidebar/sidebar';

const App = () => {
  return (
    <div><Sidebar/> </div>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);