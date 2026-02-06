import React, { useState } from 'react'
import {calcularNetoMensual} from './calculadora.js'
const BrutoNeto_Form = ({setNetoMensual, setShowAlert, setAlertMessage}) => {
      const [bruto, setBruto] = useState(22000)
      const [pagas, setPagas] = useState(12)
      const [isLess1Year, setIsLess1Year] = useState(false)
      const [categoria, setCategoria] = useState('ingenieros_licenciados')
      const [edad, setEdad] = useState(40)
      const [comunidad, setComunidad] = useState('ES-MD') // ES-MD = Comunidad de Madrid (ISO 3166-2:ES)
      const [minusvalia, setMinusvalia] = useState('Ninguna')
      const [movilidad, setMovilidad] = useState(true)

      const handleCalcular = () => {
          const result = calcularNetoMensual({
            bruto,
            pagas,
            isLess1Year,
            categoria,
            edad,
            comunidad,
            minusvalia,
            movilidad
          })
          setNetoMensual(result)
          // 4) mostrar feedback con DaisyUI alert
            const msg = `Cálculo realizado — neto mensual: ${result} €`
            setAlertMessage(msg)
            setShowAlert(true)

            // auto-hide después de 4s
            setTimeout(() => {
            setShowAlert(false)
            }, 4000)
        }
  return (
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs md:w-lg border p-4 flex flex-col gap-2 justify-center items">
        <h2 className='text-2xl font-bold'>Calculadora bruto neto</h2>

        <label className="label">Bruto Anual</label>
        <input
          type="number"
          className="input w-full"
          placeholder="Sueldo bruto"
          value={bruto}
          onChange={(e) => setBruto(Number(e.target.value))}
        />

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className="label w-full">Número de pagas</label>
            <select
              value={pagas}
              onChange={(e) => setPagas(Number(e.target.value))}
              className="select w-full"
            >
              <option>12</option>
              <option>14</option>
            </select>
          </div>

          <div>
            <label className="label w-full">Contrato inferior a un año</label>
            <select
              className="select w-full"
              value={String(isLess1Year)}
              onChange={(e) => setIsLess1Year(e.target.value === 'true')}
            >
              <option value="false">No</option>
              <option value="true">Si</option>
            </select>
          </div>
        </div>

        <label className="label w-full">Categoría profesional</label>
        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          className="select w-full"
        >
          <option value="ingenieros_licenciados">Ingenieros y licenciados</option>
          <option value="ingenieros_tecnicos">Ingenieros técnicos, peritos y ayudantes titulados</option>
          <option value="jefes_administrativos_taller">Jefes administrativos y de taller</option>
          <option value="oficiales_administrativos">Oficiales administrativos</option>
          <option value="subalternos">Subalternos</option>
          <option value="auxiliares_administrativos">Auxiliares administrativos</option>
          <option value="oficiales_1_2">Oficiales de primera y segunda</option>
          <option value="oficiales_3_especialistas">Oficiales de tercera y especialistas</option>
          <option value="peones">Peones</option>
          <option value="menores_18">Trabajadores menores de dieciocho años, cualquiera</option>
        </select>

        <div className='grid grid-cols-2 gap-4'>
          <div>
            <label className="label w-full">Edad</label>
            <input
              type="number"
              className="input w-full"
              value={edad}
              onChange={(e) => setEdad(Number(e.target.value))}
            />
          </div>

          <div>
            <label className="label w-full">Ubicacion del domicilio fiscal</label>
            <select
              value={comunidad}
              onChange={(e) => setComunidad(e.target.value)}
              className="select w-full"
            >
              <option value="ES-MD">Comunidad de Madrid</option>
              <option value="ES-AN">Andalucía</option>
              <option value="ES-AR">Aragón</option>
              <option value="ES-AS">Principado de Asturias</option>
              <option value="ES-IB">Illes Balears</option>
              <option value="ES-CN">Canarias</option>
              <option value="ES-CB">Cantabria</option>
              <option value="ES-CM">Castilla-La Mancha</option>
              <option value="ES-CL">Castilla y León</option>
              <option value="ES-CT">Cataluña</option>
              <option value="ES-VC">Comunidad Valenciana</option>
              <option value="ES-EX">Extremadura</option>
              <option value="ES-GA">Galicia</option>
              <option value="ES-RI">La Rioja</option>
              <option value="ES-MC">Región de Murcia</option>
              <option value="ES-NC">Comunidad Foral de Navarra</option>
              <option value="ES-PV">País Vasco</option>
              <option value="ES-CE">Ceuta</option>
              <option value="ES-ML">Melilla</option>
            </select>
          </div>
        </div>

        <div className='grid grid-cols-4 gap-4'>
          <div className='col-span-3'>
            <label className="label w-full ">Minusvalía del contribuyente</label>
            <select
              value={minusvalia}
              onChange={(e) => setMinusvalia(e.target.value)}
              className="select w-full"
            >
              <option>Ninguna</option>
              <option>Entre 33% y 65%</option>
              <option>Superior a 65%</option>
            </select>
          </div>

          <div>
            <label className="label w-full">Movilidad geográfica</label>
            <input
              type="checkbox"
              checked={movilidad}
              onChange={(e) => setMovilidad(e.target.checked)}
              className="checkbox checkbox-neutral mt-2 mx-auto "
            />
          </div>
        </div>

        <button
          className="btn btn-neutral mt-4"
          onClick={handleCalcular}
        >
          Calcular
        </button>
      
      </fieldset>
  )
}

export default BrutoNeto_Form