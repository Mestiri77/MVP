import React from "react";
import ListItem from "./ListItem.jsx";

const List = (props) => (
  <div >
    <h4> List Component </h4>
    There are {props.items.length} items.
    <div className='container'>
    {props.items.map((item, index) => (
      <div  className="card" key={index}>
        <ListItem item={item} />
      </div>
    ))}
    </div>
  </div>
);

export default List;
