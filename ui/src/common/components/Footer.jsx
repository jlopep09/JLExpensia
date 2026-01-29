import React from 'react'
import { getYear } from '../utilities/time'
const Footer = () => {
  return (
    <footer className='flex w-full flex-row justify-center border border-neutral/5 py-4 ' ><p className='text-neutral/60'>José Antonio López Pérez - © {getYear()} </p></footer>
  )
}

export default Footer