import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'

const Dashboard = () => {
    const auth = useSelector(state=>state.auth)

    useEffect(() => {
        
        
    }, [])

    if(!auth.authenticated){
        return <Redirect to={`/home`} />
    }
    return (
        <div>
            Dash Board
        </div>
    )
}

export default Dashboard
