import { Button } from "bootstrap";
import React from "react";

const Contact = () => {
    return(
        <>
        <h1 style={{color:"white",fontSize:"60px"}} className="brand-desc text-center " >Contact me!</h1>
        <form className="text-center">
            <textarea type="text" rows="5" cols="30" className="brand-desc  my-3 float-right ms-auto border border-5 text-light bg-black border-white"></textarea>
            <br/>
            <button placeholder="" className="text-light bg-black border border-3 my-3 brand-desc" >Submit</button>
        </form>
        </>
        );
};

export default Contact;