import React from "react";
import Teacher from "./Teacher.jsx";

const Teachers = ({data}) => {
    return (
  <div className="teach">
    <button className="addpost">ADD YOUR POST</button> 
    <div className='container'>
    {data.map((item, index) => (
      <div  className="card" key={index}>
        <Teacher item={item} />
      </div>
    ))}
    </div>
  </div>)
};

export default Teachers;