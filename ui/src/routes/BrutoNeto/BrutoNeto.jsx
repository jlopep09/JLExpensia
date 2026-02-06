import React, { useState } from 'react'

import BrutoNeto_Form from './BrutoNeto_Form.jsx'
const BrutoNeto = () => {

  const [netoMensual, setNetoMensual] = useState(0)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')


  return (
    <div className='card w-full align-middle justify-center items-center flex max-w-2xl' >
      {/* 2) NetoCard solo renderiza si netoMensual > 0 */}
      {netoMensual > 0 && <NetoCard neto={netoMensual} />}
      <BrutoNeto_Form setNetoMensual={setNetoMensual} setAlertMessage={setAlertMessage} setShowAlert={setShowAlert}></BrutoNeto_Form>

      {/* 4) DaisyUI alert - visible cada vez que se realiza un cálculo 
      {showAlert && (
        <div className="alert alert-success shadow-lg mt-4 w-full max-w-2xl">
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4" />
            </svg>
            <span>{alertMessage}</span>
          </div>
          <div className="flex-none">
            <button className="btn btn-sm" onClick={() => setShowAlert(false)}>Cerrar</button>
          </div>
        </div>
      )}
*/}
      

      
    </div>
  )
}

export default BrutoNeto

function NetoCard({ neto }) {
  return (
    <div className="card bg-base-100 shadow mt-4 p-4 w-full max-w-2xl">
      <h3 className="text-lg font-bold">Resultado</h3>
      <p>Sueldo neto mensual: <strong>{neto} €</strong></p>
    </div>
  )
}
