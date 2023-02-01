import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import axios from 'axios'
import List from './components/List.jsx'
import Search from './components/Search.jsx'
import Home from './components/Home.jsx'


const App = () => {
  const [items, setItems] = useState([])
  const [update,setUpdate]= useState(false)
  const [view,setView]=useState("students")

  const fetch = () => (
    $.ajax({
      url: '/api/items',
      success: (data) => {
        console.log(data)
        setItems(data)
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  )
useEffect( ()=>(fetch()) , [update])

const add = (name,description,subjects,levels,cost,contact,comments,messages,rate) => {
  axios.post('/api/items',{name:name,description:description,subjects:subjects,levels:levels,cost:cost,contact:contact,comments:comments,messages:messages,rate:rate}).then((response)=>{
    console.log(response.data)
    setUpdate(!update)
  }).catch((err)=>{
    console.log(err)
  })
};
const remove = (id)=>{
  axios.delete(`/api/items/${id}`).then((response)=>{
    console.log(response.data)
    setUpdate(!update)
  }).catch((err)=>{
    console.log(err)
  })
};
const change = (id,cost)=>{
  axios.put(`/api/items/${id}`,{cost:cost}).then((response)=>{
    console.log(response.data)
    setUpdate(!update)
  }).catch((err)=>{
    console.log(err)
  })
};


const renderView =()=> {
  if (view === "home") {
    return <Home />
  } else if (view === "teachers") {
    // return <Teachers items={items}    />;
    // comment={comment} message ={message}
  } else if (view === "students") {
    return <List  items={items} add={add} remove={remove} change={change} />;
    // changeLevels={changeLevels} changeSubjects={changeSubjects} 
  }
}


const search = (query) => {
  let newData = items.filter((e) => {
    return (e.name.toLowerCase().includes(query.toLowerCase()) );
  })
  setItems(newData)
}

return (
  <div>
    <nav className=" nav">
      <div
        className={
          view !== "home"
            ? "nav-unselected"
            : "nav-selected"
        }
        onClick={() => {
          setView("home");
        }}
      >
        HOME
      </div>
      <div
        className={
          view === "students" ? "nav-selected" : "nav-unselected"
        }
        onClick={() => {fetch() ,setView("students")}}
      >
        SEE ALL TEACHERS
      </div>
      <div>
        <Search search={search} />
      </div>
    </nav>

    {renderView()}
  </div>
);
}

ReactDOM.render(<App />, document.getElementById('app'))
