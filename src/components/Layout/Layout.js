import React from 'react'
import Header from '../headerLayout/Header'
import './Style.css'

export const Layout = (props) => {
    return (
        <>
            
            <Header />
        
        <div className="customeContainer">
            {props.children}
        </div>
        </>
    )
}
