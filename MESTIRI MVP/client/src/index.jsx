import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import List from './components/List.jsx'

const App = () => {
  const [items, setItems] = useState([])
  useEffect(() => {
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
  }, [])

  return (
    <div>
      <h1>Item List</h1>
      <List items={items} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
