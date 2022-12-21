import { useState } from 'react';
import './App.css';
import Clients from './components/Clients';
import Main from './components/Main';
import Nav from './components/Nav';
import { data } from './data';

function App() {
  const [client,setClient]=useState(data[0]);
  return (
    <div className="app">
      <Nav/>
      <Clients setClient={setClient}/>
      <Main client={client}/>
    </div>
  );
}

export default App;
