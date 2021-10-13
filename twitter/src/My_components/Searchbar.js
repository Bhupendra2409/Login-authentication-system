import React from 'react'
import sicon from '../images/search.svg'
import '../styles/searchbar.css'
export const Searchbar = () => {
    let searchkar = ()=>{
       
    }
    return (
        <form className="sb-cnt" action='/'>
            <input id="inp" name="search" type="text" />
            <button type="submit" className="sb-btn-cnt" onClick={()=>searchkar()}><img src={sicon} alt="" /></button>
        </form>
    )
}
