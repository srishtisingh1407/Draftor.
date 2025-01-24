import React from 'react'
import { Button } from '../ui/button'

function Header() {
  return (
    <div className='flex justify-between p-4 border  rounded-b-[50px] shadow-md  '>
        <div className='flex justify-between '>
            <h1 className='font-bold text-xl text-sage'>Draftor.</h1>
        </div>
        <div>
            <Button className="bg-button hover:bg-button hover:text-black">Get Started</Button>
        </div>
    </div>
  )
}

export default Header