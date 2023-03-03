import './Meme.scss'
import data from '../data/data.js'
import React, { useState } from 'react'

const Meme = () => {
   const dataArrays = data.data.memes
   const [newUrl, setNewUrl] = React.useState('')
   
   const btnClick = () => {
     const randomNumber = Math.ceil(Math.random() * dataArrays.length)
     setNewUrl(dataArrays[randomNumber].url)
   }

   return (
      <div className='meme'>
         <div className='form-control'>
            <input type='text' className='top' />
            <input type='text' className='bottom' />
         </div>
         <button onClick={btnClick}>Get a new meme image 🖼️</button>

         <div className="img-container">
            <img src={newUrl} alt="" />
         </div>
      </div>
   )
}

export default Meme
