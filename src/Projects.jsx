import React from "react";

const Projects = ()=>{
    return(
    <>
        <h1 className="brand-desc text-center ">Welcome to the Projects page</h1>    
        
        <ul className="brand-desc text-center" style={{listStyleType:"none"}}>

        <p className="brand-desc text-center">Projects Worked in:</p>
        
            <li>Shriharsh's Colosseum</li>

        </ul>
        <ul className="brand-desc text-center" style={{listStyleType:"none"}} >
            <p className="brand-desc text-center">Languages/Systems experienced in:</p>
            <br/>
            <li>Python</li>
            <li>Javascript(Vanilla)</li>
            <li>React</li>
            <li>C/C++</li>
            <li>Bash</li>
            <li>Linux Operating System</li>

        </ul>
    </>

        );
};

export default Projects;