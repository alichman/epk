import React from 'react'
import './mainpage.css'
import '../App.css'

import mainImage from '../assets/RIZ08472.jpg'

export default function MainPage () {
    return <div className='mainPage'>
        <div className='mainRow'>
            <div className = 'textDiv'>
                <h1>Andrew Lichmanov</h1>
                <h2>Electronic Press Kit</h2>
            </div>
            <img src={mainImage} className='mainImage'/>
        </div>
        
    </div>
}