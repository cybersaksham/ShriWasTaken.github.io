import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import Projects from "./Projects";
import Contact from "./Contact";
import {Route} from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import {Routes,BrowserRouter as Router} from "react-router-dom";


const App = () => {
    return(
        <>
            <style>{'body { background-color: black; }'}</style>
                <Navbar/>
                
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route exact path="/contact" element = { <Contact/>}/>
                        <Route exact path="/projects" element = { <Projects/>}/>
                    </Routes>
                </Router>
        </>
    );

};
export default App;