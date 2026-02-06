import React from 'react'
import { Link } from 'react-router'

const ToolCard = ({children, title, badge, isActive, linkUrl}) => {
  return (
    <div className='flex  w-full justify-center items-center'>
        <div className="card h-80 w-96  bg-base-100 shadow-sm">


    <div className="card-body justify-between">
      <div className='h-1/4 flex flex-col justify-end '>
        {badge&&(

      <span className="badge badge-xs badge-warning">{badge}</span>
      )}
      <div className="flex justify-between">
        <h2 className="text-2xl lg:text-3xl font-bold mt-2">{title}</h2>
      </div>
    </div>


    <ul className="mt-6 flex flex-col gap-2 text-xs">
      {children}
    </ul>


    <div className="mt-6">
      {(isActive && linkUrl)?
      <Link to={linkUrl} className="btn btn-primary btn-block">Empezar</Link>
      :
      <button className="btn btn-disabled btn-block">Próximamente</button>
      }
      
    </div>
  </div>
</div>
    </div>
  )
}

export default ToolCard