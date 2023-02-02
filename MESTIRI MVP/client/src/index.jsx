import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import axios from 'axios'
import List from './components/List.jsx'
import Search from './components/Search.jsx'
import Home from './components/Home.jsx'
import Teachers from './components/Teachers.jsx'




const App = () => {
  const [items, setItems] = useState([])
  const [update,setUpdate]= useState(false)
  const [view,setView]=useState("home")

  const changeView = (view) =>{
    setView(view)
  }

  const fetch = () => (
    $.ajax({
      url: '/api/items',
      success: (data) => {
        
        setItems(data)
      },
      error: (err) => {
        console.log('err', err)
      },
    })
  )
useEffect( ()=>(fetch()) , [update])

const add = (name,description,subjects,levels,cost,contact,comments,messages,rate,imageUrl) => {
  axios.post('/api/items',{name:name,description:description,subjects:subjects,levels:levels,cost:cost,contact:contact,comments:comments,messages:messages,rate:rate,imageUrl:imageUrl}).then((response)=>{
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
const changeCost = (id,cost)=>{
  axios.put(`/api/items/${id}`,{cost:cost}).then((response)=>{
    console.log(response.data)
    setUpdate(!update)
  }).catch((err)=>{
    console.log(err)
  })
};

const postMessages = (id,message)=>{
  axios.put(`/api/items/messages/${id}`,{messages:message}).then((response)=>{
    console.log(response.data)
    setUpdate(!update)
  }).catch((err)=>{
    console.log(err)
  })
};
const postComments = (id,comment)=>{
  axios.put(`/api/items/comments/${id}`,{comments:comment}).then((response)=>{
    console.log(response.data)
    setUpdate(!update)
  }).catch((err)=>{
    console.log(err)
  })
};
const updateDescription= (id,description)=>{
  axios.put(`/api/items/${id}`,{description:description}).then((response)=>{
    console.log(response.data)
    setUpdate(!update)
  }).catch((err)=>{
    console.log(err)
  })
}
const updateName= (id,name)=>{
  axios.put(`/api/items/${id}`,{name:name}).then((response)=>{
    console.log(response.data)
    setUpdate(!update)
  }).catch((err)=>{
    console.log(err)
  })
}
const changeLevels= (id,levels)=>{
  axios.put(`/api/items/levels/${id}`,{levels:levels}).then((response)=>{
    console.log(response.data)
    setUpdate(!update)
  }).catch((err)=>{
    console.log(err)
  })
}
const changeSubjects= (id,subjects)=>{
  axios.put(`/api/items/subjects/${id}`,{subjects:subjects}).then((response)=>{
    console.log(response.data)
    setUpdate(!update)
  }).catch((err)=>{
    console.log(err)
  })
}




const renderView =()=> {
  if (view === "home") {
    return <Home  changeView={changeView} />
  } else if (view === "teachers") {
    return <Teachers data={items} remove={remove} add={add} changeCost={changeCost} changeLevels={changeLevels} changeSubjects={changeSubjects} 
    updateName={updateName}  updateDescription={updateDescription}   />;
    
  } else if (view === "students") {
    return <List  items={items}   postMessages={postMessages}  postComments={postComments}  />;
    
  }
}


const search = (query) => {
  let newData = items.filter((e) => {
    return (e.name.toLowerCase().includes(query.toLowerCase()) || e.subjects[0].toLowerCase().includes(query.toLowerCase()) || e.cost.toLowerCase().includes(query.toLowerCase()) );
  })
  setItems(newData)
}


const footer = () => (
  <footer>
  <p>Author: Never Stop FarouKing<br/>
  <a href="mailto:faroukmestiri77@gmail.com">CONTACT ME</a></p>
</footer>
)

  


return (
  <div>
    <nav className=" nav">
      <img className='logo' src="./assests/logo.png" onClick={()=>(setView("home"))} />
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
      <div
        className={
          view !== "teachers"
            ? "nav-unselected"
            : "nav-selected"
        }
        onClick={() => {
          setView("teachers");
        }}
      >
        ADD POST
      </div>
      <div>
        <Search search={search} />
      </div>
    </nav>

    {renderView()}
    {footer()}
  </div>
);
}

ReactDOM.render(<App />, document.getElementById('app'))
