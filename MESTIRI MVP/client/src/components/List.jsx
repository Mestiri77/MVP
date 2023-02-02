import React from "react";
import ListItem from "./ListItem.jsx";


const List = (props) => (
  <div className="teach">
    <h4 className="find"> Find your perfect teacher <br/> & <br/>
    and upgrade your grades </h4>
    
    <div className='container'>
    {props.items.map((item, index) => (
      <div  className="card" key={index}>
        <ListItem item={item}   postMessages={props.postMessages}  postComments={props.postComments}/>
      </div>
    ))}
    </div>
  </div>
);

export default List;
