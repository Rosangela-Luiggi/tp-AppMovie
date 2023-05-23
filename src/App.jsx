import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContainerHome from "./components/ContainerHome";
import ContainerCategory from "./components/ContainerCategory";
import Search from "./components/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  
  
  return (
    <BrowserRouter>
    <Header/>
    <ContainerHome/>
      <Routes>
        
        {/* <Route path="/" element= {<ContainerHome/>} /> */}
        
        <Route path="/movie/:category" element= {<ContainerCategory />} />
        <Route path="/busqueda" element= {<Search/>} />
        
      </Routes>
      <Footer/>
   </BrowserRouter>
    
  );
}

export default App;
