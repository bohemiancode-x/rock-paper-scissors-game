import { useState } from 'react'
import GameOn from './GameOn'
import GameStart from './GameStart'


export default function Gameface({ toggleModal, game }) {
   

  return (
    <div className='mt-32'>
        {game ? <GameOn /> : <GameStart  />}
        <div className='absolute bottom-8 right-[8rem] md:bottom-5 md:right-5'>
            <button onClick={toggleModal} className='text-white border-2 border-white/50 px-8 md:px-6 py-2 rounded-lg tracking-widest hover:scale-105'>RULES</button>
        </div>
    </div>
  )
}
