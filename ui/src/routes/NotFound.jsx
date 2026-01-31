import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className='flex flex-col w-full items-center justify-center  mt-20'>
        <p className='font-bold text-5xl'>Oops!</p>
        <p className='font-semibold text-2xl mt-3'>404 Page not found</p>
        <div>
          <p className='font-bold mt-3'>Possible Reasons</p>
          <ul className='list text-xs'>
            <li >The address may have been typed incorrectly</li>
            <li>This page may have been removed</li>
          </ul>
        </div>
        <Link className='btn btn-primary mt-3' to="/">Go Home</Link>
    </div>
  )
}

export default NotFound