import React from 'react'
import { VITE_APP_NAME } from '../../../constants'
import AuthButtons from './AuthButtons'
import { useAuth0 } from '@auth0/auth0-react';
const Header = () => {
  const { isAuthenticated } = useAuth0();
  if(!isAuthenticated){return (<></>)}
  return (
    <header className="navbar bg-base-100 shadow-sm justify-between py-4 mt-4">
      <div className="flex max-w-2xs">
        <a className="btn btn-ghost text-xl">{VITE_APP_NAME}</a>
      </div>
      
      <div className="flex gap-2 max-w-2xs">
        <div className="dropdown dropdown-end">
          {isAuthenticated&&(

            <>
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
            </>)}
            {!isAuthenticated&&(

            <>
              <div tabIndex={0} role="button" className="btn btn-primary">
                Cuenta
              </div>
            </>)}
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <AuthButtons></AuthButtons>
            
            {isAuthenticated&&(

            <><hr  className='my-2 mt-2 border-black/20'/>
            <li>
              <a className="justify-between bg-neutral-100 hover:bg-neutral-200 mb-2">
                Profile
              </a>
            </li>
            <li><a className='bg-neutral-100 hover:bg-neutral-200'>Settings</a></li></>
            )}
            
          </ul>
          
        </div>
      </div>
    </header>
  )
}

export default Header