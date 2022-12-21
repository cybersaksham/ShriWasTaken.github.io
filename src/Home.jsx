    import React from "react";
    import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

    function Home(){
        return(
            <>
            <div className="brand-desc">            
                <p className="text-left mx-5 my-1" style={{fontSize:"100px",color:"white"}}>Shriharsh Acharya,
                </p><br/>
                <p>
                    <a  style={{fontSize:"50px",textDecoration:"none" ,color:"white"}} className="text-left mx-5 my-1">an ambitious technophile</a>
                </p><p>
                    <a className="text-left my-1 mx-5" style={{fontSize:"30px",color:"white",textDecoration:"none"}}>learn more.</a></p>
            </div>
            </>

        );
    };

    export default Home;