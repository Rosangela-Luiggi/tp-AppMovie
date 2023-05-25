import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContainerCategory from "./components/ContainerCategory.jsx";
import ContainerHome from "./components/ContainerHome";
import Search from "./components/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MovieDetail } from "./components/MovieDetails";


function App() {
  
  
  return (

    <BrowserRouter>
    <Header/>
      <Routes>
        
        <Route path="/page/home" element= {<ContainerHome/>} />
        <Route path="/page/:Optioncategory" element= {<ContainerCategory />} />
        <Route path="/page/search" element= {<Search/>} />
        <Route path="/detail" element= {<MovieDetail/>} />
        
      </Routes>
      <Footer/>
   </BrowserRouter>
    
  );
}

export default App;
