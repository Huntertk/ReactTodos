import React, { useEffect, useState } from "react";
import './App.css'
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';
import List from "./List";

const App = () => {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [alert, setAlert] = useState(true)


  const handleSubmit = (e) => {
    e.preventDefault()
    if(name){
      const newItem = {
        id: uuidv4(),
        itemName: name
      }
      setList([...list, newItem])
      setName('')
    }

  }
  const removeItem = (id) => {
    const newItemFilter = list.filter((item) => {
      return item.id !== id
    })
    setList(newItemFilter)
    setAlert(false)
  }
useEffect(() => {
const timeout = setTimeout(() => {
  alertHandle(true)
},2000)
  return () => clearTimeout(timeout)
},[list])
  const alertHandle = (show = true) => {
    setAlert(show)
  }

  console.log(list)

  alert === false ?  document.body.style.backgroundColor = '#ED2B2A': document.body.style.backgroundColor =  '#212A3E'
  return (
    <section className={`todos-container` }>
      <h1>TaskList</h1>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          className="input"
          value={name}
          onChange={(e) => {
            return setName(e.target.value)
          }}
          />
          <button type="submit" className="btn-submit">Submit</button>
        </form>
      <List items={list} removeItem = {removeItem} />
      {
        list.length > 0 &&

        <button className="btn-submit" onClick={() => {
            setList([])
            setAlert(false)
          }
        }>Clear All</button>
        }
    </section>
  )
}

export default App