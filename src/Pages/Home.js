import React from 'react'
import { useSelector } from 'react-redux';
import {  useFirestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom'
import ClusteringMap from '../components/Map/ClusteringMap';
//import firebase from '../firebase'


const Home = () => {
  //const auth = useSelector(state => state.firebase.auth)
  //const auth = useSelector(state=>state.auth)
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
  
  useFirestoreConnect([{
    collection: 'clients'
  }])

  const clients = useSelector(state => state.firestore.ordered.clients )

//  console.log(clients)
 /*  useEffect({

  },[]) */

  if (!user) {
    return <Redirect to={`/signin`} />
  }  

  return (
      <>
       <h2 className="text-center text-white text-uppercase">welcome {user.firstName} </h2>
       <p className="text-center text-white">Get your tokens from the below map</p>
       
        <ClusteringMap clients={clients} />
       
      </>
  )
}

export default Home
