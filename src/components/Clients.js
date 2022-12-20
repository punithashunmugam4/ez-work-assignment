import React, { useState } from 'react';
import './Clients.css'

const Clients = () => {
    const [ascending,setAscending]=useState(true);
  return (
    <div className='clients'>
      <div className='header'>
      <header className='clients-heading'>
        <div className='heading'>
        <h1>Clients</h1>
        <i className={`${ascending ?"fa-solid fa-arrow-up-short-wide":"fa-solid fa-arrow-up-wide-short"}`} onClick={()=>setAscending(!ascending)}></i>
        <p>Creation Time</p>
        </div>
        <i className="fa-sharp fa-solid fa-square-plus"></i>
      </header>
      </div>
      <div className='clients-search'>
        <input className='search-input' placeholder='Company, Entity, User, Domain, Service, Location'/>
        <button><i className="fa-solid fa-magnifying-glass"></i></button>
      </div>
    </div>
  )
}

export default Clients
