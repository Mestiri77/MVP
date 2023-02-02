import React, { useEffect, useState } from 'react'

const ListItem = (props) =>{ 
  const [view,setView] = useState(false)
return (
  
  <div >
   <div onClick={()=>(setView(!view))}> <img src={props.item.imageUrl} />
    <br/>
     Name : {props.item.name}
    <br/>
    Subjects : {props.item.subjects}
    <br/>
     Cost :{props.item.cost}</div>    
   {  view && (<div className='render'>
   <br/>
    rate :{props.item.rate}
      <br/>
    Levels : {props.item.levels} 
      <br/>
    Contact Me : {props.item.contact}
      <br/>
     description : { props.item.description }
      <br/>
     Comments : {props.item.comments}
     </div>)
     }
     <button>COMMENT</button>
     <button>RATE</button>
  </div>
)}

export default ListItem;