import React from 'react'
import { getYear } from '../utilities/time'
import { VITE_APP_NAME } from '../../../constants'
import { useAuth0 } from '@auth0/auth0-react';
const Footer = () => {
  const { isAuthenticated } = useAuth0();
  if(!isAuthenticated){return (<></>)}
  return (
    <footer className="mt-4 border-t border-base-200 py-8 w-full">
        <div className="w-full container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3 w-full justify-between">
            <div className='flex items-center gap-3'>

            <div className="w-8 h-8 rounded bg-linear-to-br from-primary to-slate-500 flex items-center justify-center text-white font-bold">JL</div>
          
            <div>
              <div className="font-semibold">{VITE_APP_NAME}</div>
              <div className="text-xs opacity-70">© {new Date().getFullYear()} {VITE_APP_NAME}</div>
            </div>
            </div>
          <div className="text-sm opacity-80"><span className="text-primary hover:text-accent"><a href="https://joselp.com/" className='text-nowrap' target="_blank">José Antonio López Pérez</a></span></div>
          </div>

        </div>
      </footer>
      )
}

export default Footer