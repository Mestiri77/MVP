import React from "react";

const Home = (props) => (
    <div className="div">
        <h1 className="welcome">Welcome to OWL</h1> <br/>
        <h2 className="for">For objective knowledge, wisdom teachers and lucid pedagogies</h2>
        <div className="buttons"><button className="studentbtn" onClick={()=>(props.changeView("students"))} > Student</button>
        <button className="teacherbtn"  onClick={()=>(props.changeView("teachers"))}> Teacher</button></div>
        
        <h1 className="welcome">First sesion for free</h1>
        <p className="for">If you don't struggle you don't improve</p>
    </div>
);

export default Home;