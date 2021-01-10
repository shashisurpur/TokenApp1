import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

import { Redirect } from 'react-router-dom'
import './styles/clientsDetails.css'


const ClientsDetails = () => {
    //const auth = useSelector(state=>state.auth)
    //const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    const [isOpen,setIsOpen]=useState(false)
    const [clickedClient,setClickedClient]=useState([])
    useFirestoreConnect([{
        collection: 'clients'
      }])
    
      const clients = useSelector(state => state.firestore.ordered.clients )

    if (!user) {
      return <Redirect to={`/signin`} />
    }  
   
    const handleClick=(client)=>{
        setIsOpen(!isOpen)
        setClickedClient(client)
    }
   
    return (
        <>
            <div className="clientDetailContainer ">
            <div className="container " /* style={{textTransform:'uppercase',color:'white'}} */>
                <div className="custHeader text-uppercase">
                    <h2>Clients Details</h2>
                </div>
                <div className="custHeader">
                    <p>The below are our clients, <strong>click for more details </strong> </p>
                </div>
               
                
                {
                    clients&& clients.map((client)=>{
                        return(
                        <div className="mainTab"  key={client.id}>
                            <div className="accordion ">    
                                <div 
                                    className=" accordion-header collapsed  tabHeader " 
                                    onClick={()=>handleClick(client)}
                                >
                                    <h4>{client.name}</h4>
                                </div>
                                

                                { isOpen && clickedClient ===client &&
                                    <div /* className="accordion-collapse collapse" */>   
                                    <div className="accordion-body ">
                                       {/*  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow. */}
                                        <p className="content">{client.content}</p> 
                                        <div className="rowCol">
                                            <div className="row">
                                                <dt className="col-sm-3">Founders</dt>
                                                <dd className="col-sm-9">: {client.founders}</dd>
                                            </div> 

                                            <div className="row">
                                                <dt className="col-sm-3">Founded </dt>
                                                <dd className="col-sm-9">: {client.founded}</dd>
                                            </div> 

                                            <div className="row">
                                                <dt className="col-sm-3">Headquaters </dt>
                                                <dd className="col-sm-9">: {client.headquarters}</dd>
                                            </div> 
                                        </div>     
                                    </div>
                                    </div> 
                                
                                }                
                                
                            </div>
                        </div>
                        )
                        
                    })
                }
                

                 {/*    <div className="row">
                        <div className="accordion-item tabItem">
                            <h2 className="accordion-header" id="headingTwo">
                            <button 
                            className="accordion-button collapsed tabButton bg-dark" 
                            type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Accordion Item #2
                            </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                            </div>
                        </div>
                    </div> */}

                
            </div>
            </div>
        </>
    )
}

export default ClientsDetails
