import React, { useState } from "react";
import { VITE_APP_NAME } from '../../../constants'
import Footer from "../../common/components/Footer";
import { Link } from "react-router";

// LandingPage_DaisyUI_v5.jsx
// Requisitos: Tailwind CSS + DaisyUI v5 instalados y configurados en tu proyecto.
// Uso: importar y usar <LandingPage /> en tu App.jsx/Index.jsx

export default function Landing() {
  const [showEmail, setShowEmail] = useState(false)
  return (
    <div className="min-h-screen bg-white text-black antialiased cursor-default">
      {/* Container */}
      <header className="container mx-auto px-6 md:px-12 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-slate-500 flex items-center justify-center text-white font-bold">JL</div>
          <div>
            <a className="text-lg font-semibold hover:opacity-90" href="/">{VITE_APP_NAME}</a>
            <div className="text-xs opacity-60">Finanzas para PYMES y particulares</div>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm opacity-90">
          <a className="hover:text-primary" href="#features">Funcionalidades</a>
          <a className="hover:text-primary" href="#about">Contacto</a>
          <Link className="btn btn-primary btn-sm" to={"/home"}>Empieza gratis</Link>
        </nav>

        <div className="md:hidden">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 md:px-12">
        {/* Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-8 md:py-16">
          <article>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Finanzas claras. Decisiones acertadas.
            </h1>
            <p className="mt-6 text-lg opacity-80 max-w-xl">
              Plataforma minimalista para gestión de finanzas: gestion de ingresos y gastos,
              consejos de salud financiera y generación de reportes PDF.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="btn btn-primary btn-lg" to={"/home"}>Empieza gratis</Link>
              <a className="btn btn-ghost btn-lg btn-disabled" href="#">Ver demo</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 items-center">
              <Stat label="Actividad" value="99.99%" />
              <Stat label="Usuarios" value="0+" />
              <Stat label="Reportes" value="0+" />
            </div>
          </article>

          <aside className="order-first md:order-last flex justify-center">
            {/* Abstract SVG illustration */}
            <div className="w-full max-w-md">
              <svg
  viewBox="0 0 640 420"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-label="Financial analytics dashboard illustration"
  className="w-full hidden md:block "
>
  <defs>
    <linearGradient id="gradPrimary" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="var(--tw-color-primary)" stopOpacity="0.9" />
      <stop offset="100%" stopColor="black" stopOpacity="0.05" />
    </linearGradient>
  </defs>

  {/* Background card */}
  <rect x="0" y="0" width="640" height="420" rx="20" fill="white" stroke="#e5e7eb" />

  {/* Grid lines */}
  <g stroke="#e5e7eb" strokeWidth="1">
    <line x1="80" y1="80" x2="560" y2="80" />
    <line x1="80" y1="160" x2="560" y2="160" />
    <line x1="80" y1="240" x2="560" y2="240" />
    <line x1="80" y1="320" x2="560" y2="320" />
  </g>

  {/* Growth line */}
  <path
    d="M80 300 C160 260, 220 280, 300 220 C380 160, 460 180, 560 120"
    fill="none"
    stroke="var(--tw-color-primary)"
    strokeWidth="4"
    strokeLinecap="round"
  />

  {/* Area under curve */}
  <path
    d="M80 300 C160 260, 220 280, 300 220 C380 160, 460 180, 560 120 L560 340 L80 340 Z"
    fill="url(#gradPrimary)"
    opacity="0.15"
  />

  {/* Data points */}
  <g fill="var(--tw-color-primary)">
    <circle cx="80" cy="300" r="4" />
    <circle cx="180" cy="265" r="4" />
    <circle cx="300" cy="220" r="4" />
    <circle cx="420" cy="175" r="4" />
    <circle cx="560" cy="120" r="4" />
  </g>

  {/* Floating stat cards */}
  <g>
    <rect x="120" y="40" width="140" height="60" rx="12" fill="white" stroke="#e5e7eb" />
    <text x="140" y="65" fontSize="12" fill="#6b7280">Ahorro</text>
    <text x="140" y="85" fontSize="16" fontWeight="600" fill="black">+124.300€</text>
  </g>

  <g>
    <rect x="380" y="260" width="160" height="70" rx="12" fill="white" stroke="#e5e7eb" />
    <text x="400" y="285" fontSize="12" fill="#6b7280">Crecimiento</text>
    <text x="400" y="310" fontSize="18" fontWeight="600" fill="var(--tw-color-primary)">+18.4%</text>
  </g>

  {/* Decorative dots */}
  <circle cx="560" cy="40" r="6" fill="var(--tw-color-primary)" opacity="0.9" />
  <circle cx="60" cy="380" r="5" fill="#111827" opacity="0.06" />
</svg>
            </div>
          </aside>
        </section>

        {/* Features */}
        <section id="features" className="py-12">
          <h2 className="text-2xl font-semibold mb-6">Funcionalidades</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Gestiona tus ingresos y gastos"
              desc="Secciones para cuantificar ingresos, ahorros, gastos e inversiones."
              icon={IconLive}
            />

            <FeatureCard
              title="Gastos por categoría"
              desc="Enriquece tus reportes creando categorías y asignandolas a tus gastos"
              icon={IconBell}
            />

            <FeatureCard
              title="Plataforma gratuita OpenSource"
              desc="Nuestros servicios son gratuitos y trataremos de mantener esta premisa siempre que sea sostenible el número de usuarios"
              icon={IconDashboard}
            />

            <FeatureCard
              title="No se almacenan tus datos financieros"
              desc="No almacenamos ningún dato de finanzas. No almacenamos datos sensibles."
              icon={IconApi}
            />

            <FeatureCard
              title="Escuchamos a los usuarios"
              desc="Sugerencias y dudas de nuestros usuarios son contestadas a través del correo electrónico aportado al final de esta página."
              icon={IconLeaf}
            />

            <FeatureCard
              title="Ruta de desarrollo"
              desc="Estamos deseando aumentar las funcionalidades del servicio. Nuestra próxima meta es la compatibilidad multicuenta para PYMES"
              icon={IconShield}
            />

          </div>
        </section>



        {/* About & Footer */}
        <section id="about" className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h4 className="text-lg font-semibold">Diseñado para simplicidad</h4>
              <p className="mt-4 opacity-80 max-w-2xl">Enfocamos la interfaz en lo esencial: datos claros, acciones rápidas y una estética que no distrae. Puede visitar el código de esta página o contactar con nosotros a través de los siguientes enlaces.</p>
              <Link to={"/help"} className="btn btn-primary mt-4">Centro de ayuda</Link>
            </div>

            <div className="flex flex-col gap-3">
              <h4 className="text-lg font-semibold">Enlaces</h4>
              
              {!showEmail&&(
                <a className="text-sm hover:text-primary cursor-pointer" onClick={()=>setShowEmail(true)}>Email</a>
              )}
              {showEmail&&(
                <a className="text-sm hover:text-primary cursor-pointer">Email: jose.lppz03@gmail.com</a>
              )}
              <a className="text-sm hover:text-primary cursor-pointer " href="https://github.com/jlopep09/JLExpensia" target="_blank">Github</a>
              <a className="text-sm hover:text-primary" href="https://joselp.com/" target="_blank">Desarrollador</a>
            </div>
          </div>
        </section>

      </main>

      <Footer></Footer>
    </div>
  );
}

// --- Small presentational components ---

function Stat({ label, value }) {
  return (
    <div className="flex flex-col">
      <div className="text-sm opacity-70">{label}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

function FeatureCard({ title, desc, icon: Icon }) {
  return (
    <article className="p-6 rounded-2xl bg-white shadow-sm border border-base-200 hover:scale-105 transition ">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10">
          <Icon />
        </div>
        <div>
          <h5 className="font-semibold">{title}</h5>
          <p className="text-sm opacity-80 mt-1">{desc}</p>
        </div>
      </div>
    </article>
  );
}

// --- Inline SVG icons (no external licenses needed) ---
const IconLive = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
    <path d="M8 12a4 4 0 0 1 8 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconBell = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M15 17H9a3 3 0 0 1-3-3V11a6 6 0 1 1 12 0v3a3 3 0 0 1-3 3z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconDashboard = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="3" y="3" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <rect x="13" y="3" width="8" height="5" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <rect x="13" y="10" width="8" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
    <rect x="3" y="13" width="8" height="7" rx="2" stroke="currentColor" strokeWidth="1.4" />
  </svg>
);

const IconApi = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconLeaf = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M2 12s4-8 12-8 8 8 8 8-2 8-12 8S2 12 2 12z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconShield = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M12 3l8 4v5c0 5-3.58 9.74-8 11-4.42-1.26-8-6-8-11V7l8-4z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
