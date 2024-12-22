import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <BrowserRouter>
      <h1>app</h1>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>}/>
        <Route path="/read/:id" element={<Read/>}/>
        <Route path="/update/:id" element={<Update/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
