import React, { useState } from 'react';
import './MainHeader.css';

const MainHeader = ({client}) => {
    // console.log(client)
    const [domain,extendDomain]=useState(false)
  return (
    <div className='main-header'>
        <div className='profile'>
            <p>Hi Abhishek,&nbsp;</p>
            <img src='https://w7.pngwing.com/pngs/481/915/png-transparent-computer-icons-user-avatar-woman-avatar-computer-business-conversation-thumbnail.png' alt='profile'/>
        </div>
        <div className='main-section'>
      <div className="section1">
        <div className='main-heading'>
        <i className="fa-solid fa-file-pdf"></i>
        <h2>{client.name}</h2>
        </div>
        <button>Edit</button>
      </div>
      <div className="section2">
        <div className="company">
        <h3>Company Code</h3>
        <p>{client.code || "CODE"}</p><br/>
        <h3>Company Logo</h3>
        <p>{client.logo || "Unavailable"}</p>
        </div>
        <div className="domains">
            <h3>Domains</h3>
        {
          client.domains &&  client.domains.map((domain,index)=>(
              index<3 &&  <p>{domain}</p>
            ))
        }
        {!domain ? <p className='extend-domain' onClick={()=>extendDomain(!domain)}>+{client.domains.length-3} others</p>:
            client.domains.length>3 &&  client.domains.map((domain,index)=>(
                index>=3 &&  <p>{domain}</p>
              ))
          }
        </div>
        </div>
      </div>
    </div>
  )
}

export default MainHeader
