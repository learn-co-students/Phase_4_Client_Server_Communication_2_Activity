import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react'


function App() {
  const [name, setName] = useState('')
  const [show, setShow] = useState('')
  const [price, setPrice] = useState('')
  const [shows, setShows]= useState([])
  useEffect(()=>{
    fetch(`http://localhost:3000/shows`)
    .then(res => res.json())
    .then(json => setShows(json))
  },[])

  function handleSubmit(e){
    e.preventDefault()
    const ticket = {
      ticket_owner:name,
      show_id: show,
      price,
      willcall:false
    }
    fetch(`http://localhost:3000/tickets`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(ticket)
    })
    .then(res => res.json())
    .then(console.log)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label> Name
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Price
     
        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <select value={show} onChange={(e) => setShow(e.target.value)} >
          <option >Select Show</option>
            {shows.map(show => <option key={show.id} value={show.id}>{show.artist}</option>)}
          </select>
          <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App;
