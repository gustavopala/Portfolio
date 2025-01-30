import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header class="hero">
        <div class="hero-content">
          <img src="profile.jpg" alt="Gustavo" class="profile-pic" />
          <h1>Hola, soy <span>Gustavo</span></h1>
          <p>Desarrollador Full Stack apasionado por crear experiencias digitales sorprendentes.</p>
          <a href="#projects" class="btn">Ver proyectos</a>
        </div>
        {/*  <section id="about" class="about">
            <div class="container">
                <h2>Sobre mí</h2>
                <p>Soy un programador especializado en JavaScript, React y Node.js. Me encanta desarrollar interfaces modernas y escalables.</p>
            </div>
        </section> */}
      </header>

      <section id="experience" class="section">
        <div class="container">
          <h2>Experiencia</h2>
          <div class="experience-item">
            <h3>Software developer - Eseica Nea</h3>
            <p>
              Creando un software que optimiza la interacción con un sistema robusto, simplificando procesos y mejorando la eficiencia operativa.
              Este desarrollo permite a la organización mantener su infraestructura principal mientras agiliza la gestión de datos y operaciones clave.
            </p>
          </div>
          <div class="experience-item">
            <h3>Full Stack - Intercapital</h3>
            <p>
              Desarrollo de una plataforma para inversores que permite la compra y negociación de activos financieros como bonos, acciones, CEDEARs y títulos públicos.
              Implementación de una experiencia de usuario intuitiva y segura para facilitar la inversión en mercados bursátiles.
            </p>
          </div>
          {/* Desarrollador Full Stack - Proyecto en curso


Frontend Developer - InterCapital
 */}
        </div>
      </section>

      <section id="projects" class="section">
        <div class="container">
          <h2>Proyectos Destacados</h2>
          <div class="projects-grid">
            <div class="project-card">
              <h3>Proyecto 1</h3>
              <p>Plataforma de comercio electrónico con React y Node.js.</p>
            </div>
            <div class="project-card">
              <h3>Proyecto 2</h3>
              <p>Aplicación de gestión de tareas con autenticación segura.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" class="section">
        <div class="container">
          <h2>Contacto</h2>
          <p>Email: <a href="mailto:tuemail@gmail.com">tuemail@gmail.com</a></p>
          <p><a href="https://linkedin.com/in/tuusuario" target="_blank">LinkedIn</a></p>
        </div>
      </section>
    </>
  )
}

export default App
