import React from 'react'
import ToolCard from './components/ToolCard'
import { useAuth0 } from '@auth0/auth0-react';
import DevWarning from '../../common/components/DevWarning';

const Home = () => {

  const { isAuthenticated } = useAuth0();

  if(!isAuthenticated){ return <div>Loading...</div>}


  return (
    <div className='w-full flex flex-col justify-center items-center pt-4'>
      <DevWarning></DevWarning>
      <h2 className='text-xl font-bold text-center my-4'>Herramientas</h2>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:max-w-4xl gap-4'>
        <ToolCard title={"Calculadora bruto-neto"} linkUrl={'/bruto-neto'} badge={"Nuevo"} isActive={true}>
                <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Neto mensual a partir de bruto anual</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Calcula cuanto bruto necesitas para cobrar cada mes X</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Mas opciones disponibles</span>
        </li>
        
      </ToolCard>
      <ToolCard title={"Finanzas PDF"}  isActive={false} >
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Rango de fechas personalizado</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Ingresos y gastos cuantificados</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Crea categorias para tus gastos</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Genera un pdf resumen</span>
        </li>
      </ToolCard>
      
      <ToolCard title={"Calculadora interés compuesto"} isActive={false}>
                <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Opciones de aportaciones mensuales o únicas</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Selecciona un interés personalizado</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Obtén rendimientos en X años</span>
        </li>
        
      </ToolCard>
      <ToolCard title={"Qué hipoteca puedes permitirte"} isActive={false}>
                <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Calcula tu cuota aproximada de hipoteca</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Calcula cuanta financiación puedes conseguir</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Distintas opciones de hipotecas</span>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
          <span>Descubre tu cuota saludable según tus ingresos</span>
        </li>
        
      </ToolCard>
      </div>
    </div>
  )
}

export default Home