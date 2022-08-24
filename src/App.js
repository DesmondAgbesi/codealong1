// import {Button} from "./components/Button";
// import {Image} from "./components/Image";
// import {Navbar} from "./components/Navbar";
// import { Practice } from "./components/Practice";
// import Form from "./components/Form";
// import {TaskManager} from "./components/TaskManager"




import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ProductList from "./pages/ProductList";
import TaskManager from "./pages/TaskManager";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element ={<Home />} />   
        <Route path="/products" element ={<ProductList />} />   
        <Route path="/products/:productId" element ={<ProductDetail />} />   
        <Route path="/task-manager" element ={<TaskManager />} />   
        <Route path="/about" element ={<About />} />     
        <Route path="/contact" element ={<Contact />} />     
        <Route path="*" element ={<NotFound />} />     
      </Routes>
    </BrowserRouter>
  );
}

export default App;