import React, { useEffect,  } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  useFirestoreConnect } from 'react-redux-firebase'
import { useParams } from 'react-router-dom'
import { markersTokens, getTokens, } from '../../../Store/Actions/realtimeData'
import './markerDetails.css'


const MarkerDetails = (props) => {
    const {id} = useParams()
    const dispatch=useDispatch()
    
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
   // const [lastTokenNo,setLastTokenNo]=useState([0])
    useFirestoreConnect([
        { collection:'clients',
            doc:id
        }
    ])
    const docData = useSelector(({firestore: {data} }) => data.clients && data.clients[id])
    
    const markerTokensData = useSelector(state => state.data.markerTokensData)
   /*  
    console.log("Tokens from redux",markerTokensData)
    console.log("Tokens from redux(sort)",markerTokensData.sort())
    //console.log(docData)  */

    useEffect(() => {
        
       
        dispatch(markersTokens(id))    
    }, [])
    //console.log(lastTokenNo.sort())

  
    const generateTokens=()=>{
      
        const totalTokens=markerTokensData.map(ele=>ele.tokenNo)
    
       /*  console.log("poped",totalTokens.sort()) 
        console.log("length",totalTokens[totalTokens.length-1] ) 
         */
        const isDocPresent = markerTokensData.find((doc)=>
            doc.tokenName===user.firstName          
        )
        isDocPresent ? (alert(`The Token is already generated by You, check status for more detail on your token ` )) 
            : (setToken())

        function setToken(){
            var lastTokenNo=totalTokens[totalTokens.length-1]
            console.log("Global",lastTokenNo)
             if(typeof lastTokenNo != "undefined" && lastTokenNo != null && lastTokenNo != null){
               
               //console.log("inside if",lastTokenNo)
                dispatch(getTokens(id,user,lastTokenNo))
            }else{
                lastTokenNo=0
                //console.log("inside else",lastTokenNo)
                dispatch(getTokens(id,user,lastTokenNo))
            } 
        }
        
    }

    const statusButton=()=>{
        //console.log("status clicked")
        //dispatch(getStatus(id,user)) alert(`Your at ${doc.tokenNo} position` ) alert("Please generate a token ")
        //console.log(markerTokensData)
        const isDocPresent = markerTokensData.find((doc)=>
            doc.tokenName===user.firstName          
        )
        isDocPresent ? (alert(`Your at ${isDocPresent.tokenNo} position` )) 
            : (alert("Please generate a token "))
    }

   /*  const appointmentButton=()=>{
        console.log("appointment clicked")
    }     */

    return (
        <>
    
        <div className="container  "> 
            {/* <div className="row justify-content-md-center"> */}
                {
                    docData && 
                    <div className="card-lg text-center card-center markerCard">
                        <div className="card-header bg-dark markerCardHeader">
                            {docData.name}
                        </div>
                        <div className="card-body markerCardBody">
                            <h5 className="card-title title">{docData.address}</h5>
                            <p className="card-text text">
                                {docData.content}
                            </p>
                            
                            <div className="row customeRow">
                                <div className="col ">
                                    <button className="btn btn-primary"
                                        onClick={generateTokens}    
                                    >Generate Tokens</button>
                                </div>
                                <div className="col ">
                                    <button className="btn btn-primary"
                                        onClick={statusButton}
                                    >Check Status</button>
                                </div>
                                {/* <div className="col ">
                                    <button className="btn btn-primary" 
                                        onClick={appointmentButton}
                                    >Ask for Appointment</button>
                                </div> */}
                            </div>
                        </div>
                       {/*  <div className="card-footer bg-dark text-muted">
                            
                        </div> */}
                    </div>
                }          
            {/* </div> */}
        </div>  
       </>
    )
}

export default MarkerDetails
