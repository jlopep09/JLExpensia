import React from 'react'
import { getYear } from '../utilities/time'
import { VITE_APP_NAME } from '../../../constants'
const Footer = () => {
  return (
    <footer className="mt-16 border-t border-base-200 py-8">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-linear-to-br from-primary to-slate-500 flex items-center justify-center text-white font-bold">JL</div>
          
            <div>
              <div className="font-semibold">{VITE_APP_NAME}</div>
              <div className="text-xs opacity-70">© {new Date().getFullYear()} {VITE_APP_NAME} — All rights reserved</div>
            </div>
          </div>

          <div className="text-sm opacity-80">Made by <span className="text-primary hover:text-accent"><a href="https://joselp.com/" target="_blank">José Antonio López Pérez</a></span></div>
        </div>
      </footer>
      )
}

export default Footer