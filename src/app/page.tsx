"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  // Lógica para manejar el estado del formulario
  const [estadoEnvio, setEstadoEnvio] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEstadoEnvio("Enviando...");

    const formData = new FormData(e.currentTarget);
    // Tu Access Key conectada
    formData.append("access_key", "0d8fc43b-0a50-4f57-bfbf-50fa7d6fb6e8"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setEstadoEnvio("¡Mensaje enviado con éxito!");
        (e.target as HTMLFormElement).reset(); // Limpia el formulario
        setTimeout(() => setEstadoEnvio(""), 5000); // Quita el mensaje después de 5 segundos
      } else {
        setEstadoEnvio("Hubo un error. Por favor, intenta de nuevo.");
      }
    } catch (error) {
      setEstadoEnvio("Error de conexión. Intenta contactarnos por WhatsApp.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-inter antialiased">
      {/* Navegación - Estilo Premium Claro y Logo Imponente */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-white shadow-sm border-b border-slate-200/60 transition-all">
        <div className="flex justify-between items-center max-w-7xl mx-auto h-28 px-6 lg:px-8">
          
          {/* LOGO MAXIMIZADO SIN ERRORES */}
          <a href="/" className="relative block h-[95px] w-[340px] group py-2">
            <Image 
              src="/logo.jpg" 
              alt="Logo ConsultaEduca"
              fill
              className="object-contain object-left transition-transform group-hover:scale-[1.02] mix-blend-multiply" 
              priority 
            />
          </a>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center space-x-8 text-base font-semibold text-brand-dark">
            <a href="#servicios" className="hover:text-brand-orange transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-brand-orange transition-colors">Portafolio</a>
            <a href="#nosotros" className="hover:text-brand-orange transition-colors">Nosotros</a>
            <a href="#contacto" className="bg-brand-orange text-brand-dark px-8 py-3.5 rounded-xl font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all font-poppins text-base text-center">
              Solicitar Consultoría
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-44 pb-20 lg:pt-52 lg:pb-36 px-6 lg:px-8 bg-brand-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-light text-brand-dark text-xs font-bold uppercase tracking-widest font-inter">
              Ingeniería Pedagógica
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold font-poppins text-brand-dark leading-tight">
              Innovación Pedagógica y <span className="text-brand-orange">Transformación Digital.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-700 font-inter leading-relaxed max-w-2xl">
              Elevamos el estándar institucional mediante la integración estratégica de tecnología avanzada y metodologías pedagógicas de vanguardia.
            </p>
            <div className="flex flex-wrap gap-5 pt-4">
              <a href="#contacto" className="inline-block bg-brand-orange text-brand-dark px-10 py-4 rounded-xl font-bold shadow-lg hover:brightness-110 transition-all font-poppins text-lg text-center">
                Contactar Ahora
              </a>
              <a href="#proyectos" className="inline-block border-2 border-brand-dark text-brand-dark px-10 py-4 rounded-xl font-bold hover:bg-brand-bg transition-all font-poppins text-lg text-center">
                Ver Proyectos
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-2xl mx-auto lg:ml-auto aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-2xl border-4 border-brand-light/30">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" 
              alt="Consultoría Educativa" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Sección de Servicios */}
      <section id="servicios" className="py-28 bg-brand-bg px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-3">
            <p className="text-brand-orange font-bold uppercase tracking-widest text-sm font-inter">Lo que hacemos</p>
            <h2 className="text-3xl lg:text-5xl font-bold font-poppins text-brand-dark">Servicios Especializados</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-10 rounded-3xl bg-brand-white border border-slate-100 hover:shadow-2xl transition-all group flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-brand-light rounded-full flex items-center justify-center mb-8 text-brand-dark ring-4 ring-brand-light/50">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-2xl font-bold font-poppins text-brand-dark mb-4">Capacitación Docente</h3>
              <p className="text-slate-600 font-inter text-base leading-relaxed">Formación en metodologías activas y herramientas digitales diseñadas para el contexto educativo actual.</p>
            </div>

            <div className="p-10 rounded-3xl bg-brand-white border border-slate-100 hover:shadow-2xl transition-all group flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-brand-light rounded-full flex items-center justify-center mb-8 text-brand-dark ring-4 ring-brand-light/50">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-2xl font-bold font-poppins text-brand-dark mb-4">Desarrollo EdTech</h3>
              <p className="text-slate-600 font-inter text-base leading-relaxed">Software y aplicaciones educativas a medida para automatizar procesos y mejorar la experiencia de aprendizaje.</p>
            </div>

            <div className="p-10 rounded-3xl bg-brand-white border border-slate-100 hover:shadow-2xl transition-all group flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-brand-light rounded-full flex items-center justify-center mb-8 text-brand-dark ring-4 ring-brand-light/50">
                <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-2xl font-bold font-poppins text-brand-dark mb-4">Analítica Escolar</h3>
              <p className="text-slate-600 font-inter text-base leading-relaxed">Dashboards inteligentes para transformar los datos académicos en decisiones estratégicas de éxito.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección CTA */}
      <section className="py-24 bg-brand-dark px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 text-brand-white">
          <div className="md:w-2/3 space-y-5">
            <h2 className="text-3xl lg:text-4xl font-bold font-poppins">Asesoría Académica y de Tesis</h2>
            <p className="text-brand-light/90 font-inter text-lg leading-relaxed">Acompañamiento especializado para proyectos de investigación y titulación bajo una metodología rigurosa.</p>
          </div>
          <a href="#contacto" className="inline-block bg-brand-orange text-brand-dark px-12 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-all shadow-xl font-poppins flex-shrink-0 text-center">
            Saber más
          </a>
        </div>
      </section>

      {/* Portafolio (Proyectos) */}
      <section id="proyectos" className="py-28 bg-brand-white px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-3xl space-y-3">
              <p className="text-brand-orange font-bold uppercase tracking-widest text-sm font-inter">Nuestra Huella Digital</p>
              <h2 className="text-3xl lg:text-5xl font-bold font-poppins text-brand-dark">Proyectos Destacados</h2>
              <p className="text-slate-600 font-inter text-lg pt-2">Impacto real en el ecosistema educativo mexicano a través de nuestras plataformas exclusivas.</p>
            </div>
            <button className="text-brand-dark font-bold font-poppins border-b-2 border-brand-orange pb-1 hover:text-brand-orange transition-all flex-shrink-0 text-lg">Ver portafolio completo</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <a href="https://planeadorpro.com.mx" target="_blank" className="group block">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-brand-bg mb-7 shadow-md group-hover:shadow-2xl transition-all border border-slate-100 flex items-center justify-center p-8">
                <div className="text-brand-dark/40 font-bold font-poppins text-lg text-center uppercase tracking-wider">Preview Planeador Pro</div>
              </div>
              <h3 className="text-2xl font-bold font-poppins text-brand-dark group-hover:text-brand-orange transition-colors">Planeador NEM Pro</h3>
              <p className="text-slate-600 font-inter text-sm mt-3 leading-relaxed">Ecosistema digital con IA para la creación de programas analíticos y didácticos (Plan 2022).</p>
            </a>

            <a href="https://bitacorapro.com.mx" target="_blank" className="group block">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-brand-bg mb-7 shadow-md group-hover:shadow-2xl transition-all border border-slate-100 flex items-center justify-center p-8">
                <div className="text-brand-dark/40 font-bold font-poppins text-lg text-center uppercase tracking-wider">Preview Bitácora Pro</div>
              </div>
              <h3 className="text-2xl font-bold font-poppins text-brand-dark group-hover:text-brand-orange transition-colors">Bitácora Digital Docente</h3>
              <p className="text-slate-600 font-inter text-sm mt-3 leading-relaxed">Herramienta integral de gestión y seguimiento pedagógico para optimizar la labor docente diaria.</p>
            </a>

            <div className="group block">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-brand-bg mb-7 shadow-md group-hover:shadow-2xl transition-all border border-slate-100 flex items-center justify-center p-8">
                <div className="text-brand-dark/40 font-bold font-poppins text-lg text-center uppercase tracking-wider">Sistemas de Analítica</div>
              </div>
              <h3 className="text-2xl font-bold font-poppins text-brand-dark">Gestión Institucional</h3>
              <p className="text-slate-600 font-inter text-sm mt-3 leading-relaxed">Dashboards inteligentes para el seguimiento de KPIs académicos y alertas tempranas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto (Formulario + WhatsApp) */}
      <section id="contacto" className="py-24 bg-brand-bg px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-brand-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">
            
            {/* Mitad Izquierda: WhatsApp y Propuesta de Valor */}
            <div className="lg:w-5/12 bg-brand-dark p-12 lg:p-16 text-brand-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-brand-orange opacity-10 blur-3xl pointer-events-none"></div>
              
              <div className="z-10 relative">
                <h2 className="text-3xl lg:text-4xl font-bold font-poppins mb-4">Iniciemos la Transformación</h2>
                <p className="text-brand-light/80 font-inter text-lg leading-relaxed mb-12">
                  Ya sea para integrar tecnología en tu institución o para estructurar tu proyecto académico, estamos listos para escucharte.
                </p>

                <div className="space-y-8">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-2 font-poppins">Respuesta Inmediata</p>
                    <a 
                      href="https://wa.me/524448688044?text=Hola%20Mtro.%20Jorge,%20visité%20ConsultaEduca%20y%20me%20gustaría%20solicitar%20información%20sobre%20sus%20servicios." 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#20bd5a] transition-all shadow-lg hover:-translate-y-1 font-poppins"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                      </svg>
                      Chat en WhatsApp
                    </a>
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-2 font-poppins">Ubicación</p>
                    <p className="font-inter text-brand-light/90">San Luis Potosí, México.<br/>Atención remota a todo Hispanoamérica.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mitad Derecha: Formulario Empresarial */}
            <div className="lg:w-7/12 p-12 lg:p-16 bg-brand-white">
              <div className="mb-8">
                <h3 className="text-2xl font-bold font-poppins text-brand-dark mb-2">Envíanos un mensaje</h3>
                <p className="text-slate-500 font-inter text-sm">Completa el formulario y nos pondremos en contacto contigo por correo electrónico.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 font-inter">
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-slate-700 mb-2">Nombre completo</label>
                    <input type="text" id="nombre" name="Nombre" className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all" placeholder="Ej. Dra. María Pérez" required />
                  </div>
                  <div>
                    <label htmlFor="institucion" className="block text-sm font-medium text-slate-700 mb-2">Institución / Escuela</label>
                    <input type="text" id="institucion" name="Institucion" className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all" placeholder="Nombre de tu centro educativo" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Correo institucional o profesional</label>
                  <input type="email" id="email" name="Correo" className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all" placeholder="correo@institucion.edu.mx" required />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-slate-700 mb-2">¿Cómo podemos ayudarte?</label>
                  <textarea id="mensaje" name="Mensaje" rows={4} className="w-full px-5 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:border-brand-orange outline-none transition-all resize-none" placeholder="Cuéntanos brevemente sobre los retos de tu proyecto..." required></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={estadoEnvio === "Enviando..."}
                  className="w-full bg-brand-dark text-brand-white px-8 py-4 rounded-xl font-bold hover:bg-brand-orange hover:text-brand-dark transition-all shadow-md hover:-translate-y-0.5 font-poppins text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {estadoEnvio === "Enviando..." ? "Enviando mensaje..." : "Enviar Consulta"}
                </button>

                {estadoEnvio && estadoEnvio !== "Enviando..." && (
                  <div className={`p-4 rounded-xl text-center font-bold text-sm ${estadoEnvio.includes("éxito") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                    {estadoEnvio}
                  </div>
                )}
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-brand-dark text-brand-light/70 text-base border-t border-brand-light/10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="relative h-[60px] w-[220px] mx-auto">
            <Image 
              src="/logo.jpg" 
              alt="Logo ConsultaEduca Footer"
              fill
              className="object-contain rounded-lg opacity-90" 
            />
          </div>
          <p className="font-inter">Transformamos ideas en soluciones educativas.</p>
          <p className="font-inter text-sm pt-6 border-t border-brand-light/10 max-w-xl mx-auto">
            © 2026 ConsultaEduca. Innovación Pedagógica en San Luis Potosí. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}