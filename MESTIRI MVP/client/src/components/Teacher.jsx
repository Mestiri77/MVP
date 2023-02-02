import React, { useEffect, useState } from 'react'

const Teacher = (props) =>{ 
  const [view,setView] = useState(false)
  const [inputview,setInputview]=useState(false)
  const [name,setName]=useState("")

return (
  
  <div >
   <div onClick={()=>(setView(!view))}> <img src={props.item.imageUrl} />
    <br/>
    <span onClick={()=>(setInputview(!inputview))}>Name : {props.item.name}</span> 
    <br/>
   <span>description : { props.item.description } </span> 
    <br/>
     Cost :{props.item.cost}</div>    
   {  view && (<div className='render'>
   <br/>
    rate :{props.item.rate}
      <br/>
    Messsages : {props.item.messages} 
      <br/>
    Contact Me : {props.item.contact}
      <br/>
      Subjects : {props.item.subjects}
      <br/>
     Comments : {props.item.comments}
     </div>)
     }
     <button onClick={()=>(props.remove(props.item._id))}>REMOVE</button>
     {inputview && ( <div>
    <input type="text"   placeholder='name'  onChange={(e)=>(setName(e.target.value))}/>
   
    <button className=""  onClick={()=>{ return (props.updateName(props.item._id,name),setInputview(!view))}}>change name</button>


</div>)}
  </div>
)}

export default Teacher;