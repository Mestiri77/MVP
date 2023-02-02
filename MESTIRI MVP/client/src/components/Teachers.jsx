import React, { useEffect, useState } from 'react'
import Teacher from "./Teacher.jsx";

const Teachers = (props) => {
    const [view,setView]= useState(false)
    const [name,setName]=useState("")
    const [description,setDescription]=useState("")
    const [subjects,setSubjects]=useState("")
    const [levels,setLevels]=useState("")
    const [cost,setCost]=useState("")
    const [comments,setComments]=useState("")
    const [messages,setMessages]=useState("")
    const [contact,setContact]=useState("")
    const [imageUrl,setImageUrl]=useState("")
    const [rate,setRate]=useState("")
   
    return (
  <div className="teach">
    <button className="addpost"  onClick={()=>(setView(!view))}>ADD YOUR POST</button> 
    { view && (<div>
    <input type="text"   placeholder='name'  onChange={(e)=>(setName(e.target.value))}/>
    <input type="text"  placeholder='description' onChange={(e)=>(setDescription(e.target.value))}/>
    <input type="text"   placeholder='subjects' onChange={(e)=>(setSubjects(e.target.value))}/>
    <input type="text"   placeholder='levels' onChange={(e)=>(setLevels(e.target.value))}/>
    <input type="text" placeholder='cost'  onChange={(e)=>(setCost(e.target.value))}/>
    <input type="text" placeholder='contact'  onChange={(e)=>(setContact(e.target.value))}/>
    <input type="text" placeholder='comments'   onChange={(e)=>(setComments(e.target.value))}/>
    <input type="text" placeholder='messages'  onChange={(e)=>(setMessages(e.target.value))}/>
    <input type="text"  placeholder='Imageurl' onChange={(e)=>(setImageUrl(e.target.value))}/>
    <input type="number" placeholder='rate' onChange={(e)=>(setRate(e.target.value))}/>
    <button className="addpost"  onClick={()=>{ return (props.add(name,description,subjects,levels,cost,contact,comments,messages,rate,imageUrl),setView(!view))}}>ADD YOUR POST</button>


</div>) }
    <div className='container'>
    {props.data.map((item, index) => (
      <div  className="card" key={index}>
        <Teacher item={item} remove={props.remove}  changeCost={props.changeCost} changeLevels={props.changeLevels} changeSubjects={props.changeSubjects} 
    updateName={props.updateName}  updateDescription={props.updateDescription}  />
      </div>
    ))}
    </div>
  </div>)
};

export default Teachers;