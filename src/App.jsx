import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContainerCategory from "./components/ContainerCategory.jsx";
import ContainerHome from "./components/ContainerHome";
import Search from "./components/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  
  return (

    <BrowserRouter>
    <Header/>
      <Routes>
        
        <Route path="/" element= {<ContainerHome/>} />
        <Route path="/category/:Optioncategory" element= {<ContainerCategory />} />
        <Route path="/busqueda" element= {<Search/>} />
        
      </Routes>
      <Footer/>
   </BrowserRouter>
    
  );
}

export default App;
