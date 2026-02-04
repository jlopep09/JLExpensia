import React, { useState } from 'react'

const BrutoNeto = () => {
  const [bruto, setBruto] = useState(22000)
  const [pagas, setPagas] = useState(12)
  const [isLess1Year, setIsLess1Year] = useState(false)

  // estados mínimos añadidos (categoria ahora guarda una key; comunidad guarda el código ISO 3166-2)
  const [categoria, setCategoria] = useState('ingenieros_licenciados')
  const [edad, setEdad] = useState(40)
  const [comunidad, setComunidad] = useState('ES-MD') // ES-MD = Comunidad de Madrid (ISO 3166-2:ES)
  const [minusvalia, setMinusvalia] = useState('Ninguna')
  const [movilidad, setMovilidad] = useState(true)

  // 1) estado del último neto mensual calculado
  const [netoMensual, setNetoMensual] = useState(0)

  // estado para mostrar alerta de DaisyUI (feedback) 4)
  const [showAlert, setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  /**
   * 3) función que recibe todos los parámetros necesarios, calcula el neto mensual y actualiza el estado.
   *    He usado un cálculo simplificado orientativo (placeholder) para que puedas sustituirlo por la lógica real.
   */
  const calcularNetoMensual = ({
    bruto,
    pagas,
    isLess1Year,
    categoria,
    edad,
    comunidad,
    minusvalia,
    movilidad
  }) => {
    // cálculo simplificado (placeholder) — reemplaza por la fórmula real cuando la tengas
    let irpf = 0.15 // tipo base aproximado

    // ajustar por tramo de renta (ejemplo simple)
    if (bruto > 50000) irpf = 0.25
    else if (bruto > 40000) irpf = 0.22
    else if (bruto > 30000) irpf = 0.18
    else irpf = 0.15

    // ajustes por contrato corto
    if (isLess1Year) irpf += 0.02

    // ajustes por minusvalía
    if (minusvalia === 'Entre 33% y 65%') irpf -= 0.03
    if (minusvalia === 'Superior a 65%') irpf -= 0.05

    // ligera bonificación por movilidad (ejemplo)
    if (movilidad) irpf -= 0.01

    // evitar negativos y cap
    if (irpf < 0) irpf = 0
    if (irpf > 0.45) irpf = 0.45

    const netoAnual = bruto * (1 - irpf)
    const netoMensualCalculado = netoAnual / (pagas || 1)

    // actualiza estado con dos decimales
    const netoRounded = Number(netoMensualCalculado.toFixed(2))
    setNetoMensual(netoRounded)

    // 4) mostrar feedback con DaisyUI alert
    const msg = `Cálculo realizado — neto mensual: ${netoRounded} €`
    setAlertMessage(msg)
    setShowAlert(true)

    // auto-hide después de 4s
    setTimeout(() => {
      setShowAlert(false)
    }, 4000)

    return netoRounded
  }

  // handler del botón calcular que pasa los estados actuales a la función de cálculo
  const handleCalcular = () => {
    calcularNetoMensual({
      bruto,
      pagas,
      isLess1Year,
      categoria,
      edad,
      comunidad,
      minusvalia,
      movilidad
    })
  }

  return (
    <div className='card w-full align-middle justify-center items-center flex max-w-2xl' >
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

      {/* 4) DaisyUI alert - visible cada vez que se realiza un cálculo */}
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

      {/* 2) NetoCard solo renderiza si netoMensual > 0 */}
      {netoMensual > 0 && <NetoCard neto={netoMensual} />}

      {/* debug/info (puedes quitarlo) */}
      <div className="mt-4 text-sm opacity-70">
        <p>Bruto mensual: {(bruto / pagas).toFixed(1)} Euros</p>
        <p>Menos de 1 año: {String(isLess1Year)}</p>
        <p>Categoria (key): {categoria}</p>
        <p>Edad: {edad}</p>
        <p>Comunidad (ISO code): {comunidad}</p>
        <p>Minusvalia: {minusvalia}</p>
        <p>Movilidad: {String(movilidad)}</p>
      </div>
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
