import React from 'react';

const ListItem = (props) => (
  <div >
    <img src={props.item.imageUrl} />
    <br/>
     Name : {props.item.name}
    <br/>
     description : { props.item.description }
    <br/>
    Subjects : {props.item.subjects}
    <br/>
    Levels : {props.item.levels}
    <br/>
     Cost :{props.item.cost}
    <br/>
    Contact Me : {props.item.contact}
    <br/>
     Comments : {props.item.comments}
    <br/>
    rate :{props.item.rate}

    
    
  </div>
)

export default ListItem;