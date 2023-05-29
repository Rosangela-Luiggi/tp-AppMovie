import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContainerCategory from "./components/ContainerCategory.jsx";
import ContainerHome from "./components/ContainerHome";
import Search from "./components/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContainerDetails from "./components/ContainerDetails"
import TrailerMovie from "./components/TrailerMovie";

function App() {
  
  
  return (

    <BrowserRouter>
    <Header/>
      <Routes>
        
        <Route path="/"  element= {<ContainerHome/>} />
        <Route path="/category/:optionCategory" element= {<ContainerCategory />} />
        <Route path="/search" element= {<Search/>} />
        <Route path="/detail/:id" element= {<ContainerDetails/>} />
        <Route path="/trailer/:id" element= {<TrailerMovie/>} />
        
      </Routes>
      <Footer/>
   </BrowserRouter>
    
  );
}

export default App;
