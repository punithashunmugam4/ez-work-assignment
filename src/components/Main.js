import React from 'react';
import Content from './Content';
import './Main.css';
import MainHeader from './MainHeader';

const Main = ({client}) => {
  return (
    <div className='main'>
      <MainHeader client={client}/>
      <Content client={client}/>
    </div>
  )
}

export default Main
