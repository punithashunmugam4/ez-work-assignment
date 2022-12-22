import { useEffect, useState } from 'react';
import './App.css';
import Clients from './components/Clients';
import Main from './components/Main';
import Nav from './components/Nav';
import { data } from './data';

function App() {
  const [client,setClient]=useState(data[0]);
  const [mobileView,setView]=useState(false);
  const [clientSelected,selectClient]=useState(false);
  const widthManagement=()=>{
    if(window.screen.width<=640){
      setView(true);
    }
    else setView(false);
  }
  window.addEventListener('resize',()=>{
    console.log(window.screen.width);
    widthManagement();
  })
  useEffect(()=>{
    widthManagement();
  },[])
  return (
    <div className="app">
      <div className='profile'>
            <p>Hi Abhishek,&nbsp;</p>
            <img src='https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png' alt='profile'/>
        </div>
      <Nav/>
      {!mobileView && <><Clients setClient={setClient} selectClient={selectClient}/>
      <Main client={client}/></>}
        {mobileView && clientSelected && <Main client={client}/>}
        {mobileView && !clientSelected && <Clients setClient={setClient} selectClient={selectClient}/>}
      
    </div>
  );
}

export default App;
