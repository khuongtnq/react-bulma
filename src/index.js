import App from "./AppAnimal";
import React from "react";
import ReactDOM  from "react-dom/client";
import searchImages from "./api";

// call api from unsplash
searchImages(); 

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<App />);

