import React, { useCallback, useState } from 'react'
import './mainpage.css'
import '../App.css'

import mainImage from '../assets/gallery/RIZ08472.jpg'
import Button, { NavlessButton } from './button'

export default function MainPage () {
    const [fullBio, setFullBio] = useState(false);
    const flipCallback = useCallback(() => setFullBio(prev => {
        return !prev;
    }), [setFullBio])

    return <div className='mainPage'>
        <div className='mainRow'>
            <div className='toggleableRow'>
                <div className = 'textDiv'>
                    <h1>Andrew Lichmanov</h1>
                    <h2>Electronic Press Kit</h2>
                    {!fullBio && <p>
                        A pianist for 14 years, a saxophonist for 11, and a guitarist for 6, Andrew is a musician posessing a wide range
                        of sound. He has performed as in settings varying from military marching bands to university indie bands.
                    </p>}
                    <NavlessButton text={fullBio ? '<- Short Bio':'Full Bio ->'} onPress={flipCallback}/>
                </div>
            </div>
            {fullBio && <div className='longBio'>
                <p>
                    A heart for jazz and an education in classical music are the weapons of choice for Andrew Lichmanov.<br/>
                    A multi-instrumentalist, Andrew puts together groovy, melodic pieces in the form of electro-swing.<br/><br/>
                    Andrew’s path to musical composition began thirteen years ago, in a most common way - His musical parents,
                    and their insistence on their child attending piano lessons. Though not yet in his element, Andrew found his
                    spark in a different direction - Jazz. And while Andrew was fond of playing ragtime on the piano, he set his
                    sights on the saxophone.<br/><br/> Thus began Andrew’s journey toward becoming a one man band. As he performed in school 
                    orchestras, military marching bands, and eventually with a local russian-rock band in Richmond Hill by the name of 
                    KingWest, the collection of instruments under his belt, both string and horn, developed alongside his love of 
                    musical composition. Andrew draws from this diverse experience to mesh various musical styles into a unique 
                    blend of cultures, glued together with swing and vibes. Currently, Andrew is the saxophonist for Guelph-based band Whatever You Say.
                </p>
            </div>}
            <img src={mainImage} className='mainImage'/>
        </div>
        
    </div>
}