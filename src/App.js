import React from "react";
import {BrowserRouter,Route,Routes,Switch} from "react-router-dom";
import './App.scss';
import Home from "./component/Home/Home";
import MovieDetail from "./component/moviedetail/moviedetail";
import Footer from "./component/footer/footer";
import Header from "./component/header/header";

function App() {
  return (
    
    <>
    <BrowserRouter>
   
    <Header/>
    <div className="container">
      <Routes>
      <Route path ="/" exact element={<Home/>}></Route>
      <Route path="/movie/:id" element={<MovieDetail/>}></Route>
      </Routes>
      </div>
      <Footer/>
  
    </BrowserRouter>

    </>
  );
}

export default App;
