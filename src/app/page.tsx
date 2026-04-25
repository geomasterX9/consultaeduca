"use client";

import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f7f9fb] antialiased">
      {/* Navegación */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="flex justify-between items-center max-w-7xl mx-auto h-20 px-6 lg:px-8">
          <span className="text-2xl font-extrabold text-[#003351]">ConsultaEduca</span>
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
            <a href="#servicios" className="hover:text-[#003351] transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-[#003351] transition-colors">Portafolio</a>
            <a href="#" className="hover:text-[#003351] transition-colors">Nosotros</a>
            <button className="bg-[#fd9d1a] text-white px-6 py-2 rounded-lg font-bold hover:brightness-110 transition-all">
              Solicitar Consultoría
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-[#003351] text-xs font-bold uppercase tracking-widest">
              Ingeniería Pedagógica
            </div>
            <h1 className="text-4xl lg:text-7xl font-bold text-[#003351] leading-tight">
              Innovación Pedagógica y <span className="text-[#fd9d1a]">Transformación Digital.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed max-w-xl">
              Elevamos el estándar institucional mediante la integración estratégica de tecnología avanzada y metodologías pedagógicas de vanguardia.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#fd9d1a] text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:brightness-110 transition-all">
                Contactar Ahora
              </button>
              <button className="border-2 border-[#003351] text-[#003351] px-8 py-4 rounded-xl font-bold hover:bg-white transition-all">
                Ver Proyectos
              </button>
            </div>
          </div>

          <div className="relative w-full max-w-2xl mx-auto lg:ml-auto aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800" 
              alt="Consultoría Educativa" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </header>

      {/* Sección de Servicios Especializados */}
      <section id="servicios" className="py-24 bg-white px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#003351] mb-16">Servicios Especializados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-2xl bg-[#f7f9fb] border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-[#cde5ff] rounded-lg flex items-center justify-center mb-6 text-[#003351]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#003351] mb-3">Capacitación Docente</h3>
              <p className="text-slate-600 text-sm">Formación en metodologías activas y herramientas digitales diseñadas para el contexto educativo actual.</p>
            </div>

            <div className="p-8 rounded-2xl bg-[#f7f9fb] border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-[#ffdcbc] rounded-lg flex items-center justify-center mb-6 text-[#895100]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#003351] mb-3">Desarrollo EdTech</h3>
              <p className="text-slate-600 text-sm">Software y aplicaciones educativas para móviles y web a medida para automatizar procesos y mejorar el aprendizaje.</p>
            </div>

            <div className="p-8 rounded-2xl bg-[#f7f9fb] border border-slate-100 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-[#d1fae5] rounded-lg flex items-center justify-center mb-6 text-[#065f46]">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              </div>
              <h3 className="text-xl font-bold text-[#003351] mb-3">Analítica Escolar</h3>
              <p className="text-slate-600 text-sm">Dashboards inteligentes para transformar los datos académicos en decisiones estratégicas de éxito.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Tesis */}
      <section className="py-20 bg-[#003351] px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-white">
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-3xl font-bold">Asesoría Académica y de Tesis</h2>
            <p className="text-blue-100 text-lg">Acompañamiento especializado para proyectos de investigación y titulación bajo una metodología rigurosa.</p>
          </div>
          <button className="bg-[#fd9d1a] px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all">Saber más</button>
        </div>
      </section>

      {/* Portafolio de Aplicaciones */}
      <section id="proyectos" className="py-24 bg-white px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#003351] mb-16 text-center">Soluciones Proactivas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Planeador Pro */}
            <a href="https://planeadorpro.com.mx" target="_blank" className="group block">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 mb-6 shadow-md group-hover:shadow-2xl transition-all border border-slate-100">
                <div className="flex items-center justify-center h-full text-[#003351]/40 font-bold text-lg p-6 text-center">Preview PlaneadorPro.com.mx</div>
              </div>
              <h3 className="text-xl font-bold text-[#003351] group-hover:text-[#fd9d1a] transition-colors">Planeador NEM Pro</h3>
              <p className="text-slate-500 text-sm mt-2">Ecosistema digital con IA para la creación de programas analíticos y didácticos (Plan 2022).</p>
            </a>

            {/* Bitácora Pro */}
            <a href="https://bitacorapro.com.mx" target="_blank" className="group block">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 mb-6 shadow-md group-hover:shadow-2xl transition-all border border-slate-100">
                <div className="flex items-center justify-center h-full text-[#003351]/40 font-bold text-lg p-6 text-center">Preview BitacoraPro.com.mx</div>
              </div>
              <h3 className="text-xl font-bold text-[#003351] group-hover:text-[#fd9d1a] transition-colors">Bitácora Digital Docente</h3>
              <p className="text-slate-500 text-sm mt-2">Herramienta integral de gestión y seguimiento pedagógico para optimizar la labor docente diaria.</p>
            </a>

            {/* Dashboards */}
            <div className="group block">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-slate-100 mb-6 shadow-md group-hover:shadow-2xl transition-all border border-slate-100">
                <div className="flex items-center justify-center h-full text-[#003351]/40 font-bold text-lg p-6 text-center">Sistemas de Analítica EST 84</div>
              </div>
              <h3 className="text-xl font-bold text-[#003351]">Gestión y Analítica Institucional</h3>
              <p className="text-slate-500 text-sm mt-2">Visualización de datos críticos y alertas tempranas para el rendimiento académico por disciplina.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-slate-50 text-center text-slate-400 text-sm border-t border-slate-200">
        © 2026 ConsultaEduca. Innovación Pedagógica en San Luis Potosí.
      </footer>
    </div>
  );
}