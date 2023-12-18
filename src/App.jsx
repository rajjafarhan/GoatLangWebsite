import React from 'react'
import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div><b>Goatlang website coming</b> </div>
  )
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);