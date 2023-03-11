import './Meme.scss'
import data from '../data/data.js'
import React, { useState } from 'react'

const Meme = () => {
   const dataArrays = data.data.memes
   const [meme, setMeme] = React.useState({
      topText: '',
      bottomText: '',
      randomImage: '',
   })

   const btnClick = () => {
      const randomNumber = Math.ceil(Math.random() * dataArrays.length)
      setMeme((prev) => {
         return { ...prev, randomImage: dataArrays[randomNumber].url }
      })
   }

   const inputText = (event) => {
      const {name, value} = event.target
      setMeme(prev => {
        return {
         ...prev,
         [name]: value
        }
      })
   }
   

   return (
      <div className='meme'>
         <div className='form-control'>
            <input
               type='text'
               className='top'
               placeholder='Top Text'
               name='topText'
               value={meme.topText}
               onChange={inputText}
            />

            <input
               type='text'
               className='bottom'
               placeholder='Buttom Text'
               name='bottomText'
               value={meme.bottomText}
               onChange={inputText}
            />
         </div>
         <button onClick={btnClick}>Get a new meme image 🖼️</button>

         <div className='img-container'>
            <h1 className='top'>{meme.topText}</h1>
            <img src={meme.randomImage} alt='' />
            <h1 className='bottom'>{meme.bottomText}</h1>
         </div>
      </div>
   )
}

export default Meme
