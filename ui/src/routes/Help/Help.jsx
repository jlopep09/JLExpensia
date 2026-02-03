import React from 'react'
import { VITE_APP_NAME } from '../../../constants';
import { Link } from 'react-router';
import Footer from '../../common/components/Footer';
import DevWarning from '../../common/components/DevWarning';

const Help = () => {
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
        <DevWarning></DevWarning>

        {/* Features */}
        <section id="features" className="py-12 pt-4">
          <h2 className="text-2xl font-semibold mb-6 text-center">Preguntas frecuentes</h2>

          <div className="flex flex-col w-full justify-center align-middle items-center gap-6">


            <FeatureCard
              title="¿Qué es JLExpensia?"
              desc="JLExpensia es una plataforma OpenSource que ofrece herramientas financieras gratuitas para mejorar tus finanzas. Te invitamos a iniciar sesión para explorar todas sus funcionalidades."
  
            />
            <FeatureCard
              title="¿Cómo usais mis datos?"
              desc="Tratamos de almacenar los mínimos datos posibles de nuestros usuarios. La gestión de tus credenciales de usuario son gestionadas por Auth0, plataforma destacada por seguridad y amplio uso en entornos empresariales. Por nuestra parte no se almacenan datos introducidos en herramientas financieras ni los archivos generados. "
  
            />
            <FeatureCard
              title="¿Qué datos almacenais?"
              desc="Los datos que almacenamos son la dirección de correo electrónico introducida y configuraciones de preferencias usadas en las herramientas. Un ejemplo son las categorias creadas por los usuarios para etiquetar sus gastos. Por otro lado almacenamos métricas anónimas para analizar el alcance y uso de la plataforma. Un ejemplo son las métricas mostradas en la página de presentación de la plataforma. Cualquier duda o solicitud de eliminación de sus datos debe hacerse por el momento a través de email. "
            />
            <FeatureCard
              title="Tengo una duda, ¿se puede contactar con un adiminstrador?"
              desc="Por supuesto, puede encontrar la información de contacto en la página de presentación de la plataforma. Trataremos de contestar con la mayor brevedad posible"
            />

          </div>
        </section>



        {/* About & Footer */}
        

      </main>

      <Footer></Footer>
    </div>
  )
}
function FeatureCard({ title, desc}) {
  return (
    <article className="max-w-xl p-6 rounded-2xl bg-white shadow-sm border border-base-200 hover:scale-x-102 transition ">
      <div className="flex items-center gap-4">

        <div>
          <h5 className="font-semibold">{title}</h5>
          <p className="text-sm opacity-80 mt-1">{desc}</p>
        </div>
      </div>
    </article>
  );
}
export default Help