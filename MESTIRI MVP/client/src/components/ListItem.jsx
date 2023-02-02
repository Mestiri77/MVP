import React, { useEffect, useState } from 'react'

const ListItem = (props) =>{ 
  const [view,setView] = useState(false)
  const [com,setCom]=useState(false)
  const [comm,setComm]=useState("")
  const [mes,setMes]=useState(false)
  const [mess,setMess]=useState("")
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
     <button onClick={()=>(setCom(!com))}>COMMENT</button>
     {com&&(<div>
      <input type="text" placeholder='post a comment' onChange={(e)=>(setComm(e.target.value))} />
      <button onClick={()=>{return (props.postComments(props.item._id,comm),setCom(!com))}}>post</button>
     </div>)}
     <button onClick={()=>(setMes(!mes))}>Send Message</button>
     {mes&&(<div>
      <input type="text" placeholder='send a message' onChange={(e)=>(setMess(e.target.value))} />
      <button onClick={()=>{return (props.postMessages(props.item._id,mess),setMes(!mes))}}>post</button>
     </div>)}
  </div>
)}

export default ListItem;