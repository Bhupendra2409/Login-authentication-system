// import React from 'react'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import React, { useState} from 'react'


export default function Main() {
    const [view, setView] = useState('Home');
    
    
    return (
        <div className='main-cnt container'>
            <Navbar setView={setView}/>
            {view==='Home' && <Home/> }
            {view==='About' && <About/> }
            {view==='Explore' && <Contact/> }
            {view==='Notifications' && <Contact/> }
            {view==='Messages' && <Contact/> }
            {view==='Bookmarks' && <Contact/> }
            {view==='Lists' && <Contact/> }
            {view==='More' && <Contact/> }
            {view==='Profile' && <Contact/> }
            <Navbar setView={setView}/>
        </div>
    )
}
