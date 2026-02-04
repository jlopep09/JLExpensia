import React, { useState } from 'react'

const BrutoNeto = () => {
  const [bruto, setBruto] = useState(22000)
  const [pagas, setPagas] = useState(12)
  const [isLess1Year, setIsLess1Year] = useState(false)

  return (
    <div className='card w-full align-middle justify-center items-center flex max-w-2xl' >

    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-lg border p-4 flex flex-col gap-2 justify-center items">
    
    <h2 className='text-2xl font-bold'>Calculadora bruto neto</h2>
    <label className="label">Bruto Anual</label>
    <input  type="number" className="input w-full" placeholder="Sueldo bruto" value={bruto} onChange={(e)=>{setBruto(e.target.value)}}/>
    <div className='grid grid-cols-2 gap-4'>

    <div>
        <label className="label w-full">Número de pagas</label>
        <select value={pagas} onChange={(e)=>{setPagas(e.target.value)}} className="select w-full">
            <option>12</option>
            <option>14</option>
        </select>
    </div>
    <div>
        <label className="label w-full">Contrato inferior a un año</label>
        <select  className="select w-full" value={isLess1Year} onChange={(e)=>{setIsLess1Year(e.target.value)}}>
            <option value={false}>No</option>
            <option value={true}>Si</option>
        </select>
    </div>
    </div>
    <label className="label w-full">Categoría profesional</label>
    <select defaultValue="Pick a color" className="select w-full">

        <option >Ingenieros y licenciados</option>
        <option >Ingenieros técnicos, peritos y ayudantes titulados</option>
        <option >Jefes administrativos y de taller</option>
        <option >Oficiales administrativos</option>
        <option >Subalternos</option>
        <option >Auxiliares administrativos</option>
        <option >Oficiales de primera y segunda</option>
        <option >Oficiales de tercera y especialistas</option>
        <option >Peones</option>
        <option >Trabajadores menores de dieciocho años, cualquiera</option>

    </select>
        <div className='grid grid-cols-2 gap-4'>

    <div>
        <label className="label w-full">Edad</label>
        <input defaultValue={40} type="number" className="input w-full" placeholder="Sueldo bruto" />
    </div>
    <div>
        <label className="label w-full">Ubicacion del domicilio fiscal</label>
        <select defaultValue="Comunidad de Madrid" className="select w-full">
            <option>Comunidad de Madrid</option>
            <option>Andalucía</option>
            <option>Aragón</option>
            <option>Asturias</option>
            <option>Illes Balears</option>
            <option>Canarias</option>
            <option>Cantabria</option>
            <option>Castilla-La Mancha</option>
            <option>Castilla y León</option>
            <option>Cataluña</option>
            <option>Comunidad Valenciana</option>
            <option>Extremadura</option>
            <option>Galicia</option>
            <option>La Rioja</option>
            <option>Región de Murcia</option>
            <option>Navarra</option>
            <option>País Vasco</option>
            <option>Ceuta</option>
            <option>Melilla</option>

        </select>
    </div>
    </div>
        <div className='grid grid-cols-4 gap-4'>

    
    <div className='col-span-3'>
        <label className="label w-full ">Minusvalía del contribuyente</label>
        <select defaultValue="Ninguna" className="select w-full">
            <option>Ninguna</option>
            <option>Entre 33% y 65%</option>
            <option>Superior a 65%</option>

        </select>
    </div>
    <div>
        <label className="label w-full">Movilidad geográfica</label>
        <input type="checkbox" defaultChecked className="checkbox checkbox-neutral mt-2 mx-auto " />
    </div>
    </div>
    

    <button className="btn btn-neutral mt-4">Calcular</button>
    </fieldset>
    <p>Bruto mensual: {(bruto/pagas).toFixed(1)} Euros</p>
    <p>Menos de 1 anyo: {isLess1Year} </p>
    </div>
  )
}

export default BrutoNeto