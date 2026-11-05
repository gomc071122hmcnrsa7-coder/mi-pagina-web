import { useEffect, useState } from "react";
import "./App.css";

const enlaces = [
  ["/", "Inicio"],
  ["/mision-vision", "Misión y visión"],
  ["/catalogo", "Catálogo"],
  ["/sobre-nosotros", "Sobre nosotros"],
  ["/contacto", "Contacto"],
];
const whatsapp = "https://wa.me/527225720866";

function Encabezado({ ruta }) {
  return <header className="encabezado">
    <a className="marca" href="#/" aria-label="Montreal — Inicio">
      <img src={`${process.env.PUBLIC_URL}/montreal.jpeg`} alt="Institución Montreal" />
    </a>
    <nav aria-label="Navegación principal">
      {enlaces.map(([url, texto]) => <a key={url} href={`#${url}`} aria-current={ruta === url ? "page" : undefined}>{texto}</a>)}
    </nav>
  </header>;
}

function PiePagina() {
  return <footer className="pie-pagina">
    <p>© {new Date().getFullYear()} Institución Montreal. Todos los derechos reservados.</p>
    <address>
      <a href="https://www.google.com/maps/search/?api=1&query=Circuito+de+Los+Maestros+28+Atlacomulco" target="_blank" rel="noopener noreferrer">Circuito de Los Maestros 28, Atlacomulco, Estado de México.</a>
      <a href="mailto:atlacomulcomontreal@gmail.com">atlacomulcomontreal@gmail.com</a>
      <a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp: 722 572 0866</a>
    </address>
  </footer>;
}

function FormularioContacto() {
  const [estado, setEstado] = useState("");
  const enviar = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const datos = new FormData(form);
    for (const campo of ["nombre", "asunto", "mensaje"]) {
      const input = form.elements.namedItem(campo);
      input.setCustomValidity(input.value.trim() ? "" : "Completa este campo con texto.");
    }
    if (!form.reportValidity()) return;
    const mensaje = `Hola, quiero contactar con Institución Montreal.\n\nNombre: ${datos.get("nombre").trim()}\nCorreo: ${datos.get("correo").trim()}\nTeléfono: ${datos.get("telefono").trim() || "No indicado"}\nAsunto: ${datos.get("asunto").trim()}\n\n${datos.get("mensaje").trim()}`;
    window.open(`${whatsapp}?text=${encodeURIComponent(mensaje)}`, "_blank", "noopener,noreferrer");
    setEstado("Continúa en WhatsApp para revisar y enviar tu mensaje. Si no se abrió, permite las ventanas emergentes y vuelve a intentarlo.");
  };
  return <>
    <h1>Contacto</h1>
    <p>Cuéntanos cómo podemos ayudarte. Completa el formulario para preparar tu consulta por WhatsApp.</p>
    <form className="formulario-contacto" onSubmit={enviar} onInput={event => event.target.setCustomValidity?.("")}>
      <h2 className="subtitulo-rojo">Escríbenos</h2>
      <p className="nota-formulario">Los campos con * son obligatorios.</p>
      <div className="campos-contacto">
        <label htmlFor="contacto-nombre">Nombre completo *<input id="contacto-nombre" name="nombre" autoComplete="name" required maxLength={100} /></label>
        <label htmlFor="contacto-correo">Correo electrónico *<input id="contacto-correo" name="correo" type="email" autoComplete="email" required maxLength={150} /></label>
      </div>
      <label htmlFor="contacto-telefono">Teléfono (opcional)<input id="contacto-telefono" name="telefono" type="tel" autoComplete="tel" maxLength={25} /></label>
      <label htmlFor="contacto-asunto">Asunto *<input id="contacto-asunto" name="asunto" required maxLength={120} /></label>
      <label htmlFor="contacto-mensaje">Mensaje *<textarea id="contacto-mensaje" name="mensaje" rows={5} required maxLength={2000} /></label>
      <p className="nota-formulario">Al continuar, se abrirá WhatsApp con tus datos y mensaje. Tú confirmas el envío allí.</p>
      <button className="boton" type="submit">Continuar en WhatsApp</button>
      <p role="status" className="estado-formulario">{estado}</p>
    </form>
  </>;
}

function Contenido({ ruta }) {
  const [mostrarTelefono, setMostrarTelefono] = useState(false);
  useEffect(() => {
    setMostrarTelefono(false);
  }, [ruta]);
  if (ruta === "/") return <main id="contenido" className="portada" tabIndex={-1}>
    <div className="imagen-portada"><img src={`${process.env.PUBLIC_URL}/montreal.jpeg`} alt="Institución Montreal — educación y capacitación" /></div>
    <h1>Institución Montreal</h1>
    <p className="portada-descripcion">Aprende, descubre y construye nuevas oportunidades.</p>
    <span className="portada-etiqueta">Idiomas · Educación · Capacitación</span>
    <div className="portada-acciones">
      <a className="boton" href="#/catalogo">Ver cursos <span aria-hidden="true">↗</span></a>
      <a className="enlace-secundario" href="#/sobre-nosotros">Conoce Montreal</a>
    </div>
  </main>;

  const paginas = {
    "/contacto": <FormularioContacto />,
    "/sobre-nosotros": <>
      <h1>Sobre nosotros</h1>
      <h2 className="subtitulo-rojo">Quiénes somos</h2>
      <p>Institución Montreal es un espacio de educación y capacitación en Atlacomulco, Estado de México.</p>
      <p>Nuestra oferta está orientada al aprendizaje de idiomas, tecnología, cultura y al desarrollo de habilidades personales y profesionales.</p>
      <h2 className="subtitulo-rojo">Aprende con Montreal</h2>
      <p>Te acompañamos a encontrar una opción de formación de acuerdo con tus intereses. Comunícate con nosotros para conocer los cursos disponibles, horarios y requisitos de inscripción.</p>
      <button className="boton" type="button" aria-expanded={mostrarTelefono} aria-controls="telefono-whatsapp" onClick={() => setMostrarTelefono(valor => !valor)}>Contáctanos por WhatsApp</button>
      <div id="telefono-whatsapp" hidden={!mostrarTelefono} className="telefono-whatsapp">
        <p>WhatsApp: <a href={whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Escribir al 722 572 0866 por WhatsApp (abre una pestaña nueva)">722 572 0866</a></p>
      </div>
    </>,
    "/mision-vision": <>
      <h1>Misión y visión</h1>
      <h2 className="subtitulo-rojo">Misión</h2>
      <p>Contribuir a la formación de nuestros alumnos mediante cursos de idiomas, tecnología y capacitación profesional que les permitan desarrollar conocimientos y habilidades para su vida cotidiana y laboral. Promover el aprendizaje continuo, la responsabilidad y el respeto, acompañando a cada estudiante en su proceso de formación.</p>
      <h2 className="subtitulo-rojo">Visión</h2>
      <p>Ser una institución reconocida en Atlacomulco y su región por su compromiso con la educación y el desarrollo de sus estudiantes. Ampliar las oportunidades de formación mediante propuestas educativas que respondan a las necesidades de la comunidad y el uso de herramientas tecnológicas que faciliten el acceso al aprendizaje.</p>
    </>,
    "/catalogo": <>
      <h1>Catálogo de cursos</h1>
      <p>Explora nuestras áreas de formación:</p>
      <ul><li>Idiomas</li><li>Tecnología y herramientas digitales</li><li>Capacitación profesional</li><li>Arte y cultura</li></ul>
      <h2 className="subtitulo-rojo">Ejemplos de cursos</h2>
      <p>Estos son tres ejemplos de formación. Consulta con Montreal su disponibilidad.</p>
      <div className="ejemplos-cursos">
        <article className="curso-ejemplo">
          <h3>Inglés</h3>
          <p>Practica vocabulario, gramática y conversación para comunicarte en situaciones cotidianas.</p>
        </article>
        <article className="curso-ejemplo">
          <h3>Francés</h3>
          <p>Aprende expresiones básicas, pronunciación y vocabulario para comenzar a hablar francés.</p>
        </article>
        <article className="curso-ejemplo">
          <h3>Matemáticas</h3>
          <p>Refuerza operaciones, álgebra y resolución de problemas mediante ejercicios prácticos.</p>
        </article>
      </div>
      <p>Consulta directamente con Montreal la disponibilidad, los horarios y los costos de los cursos.</p>
      <a className="boton" href={`${whatsapp}?text=${encodeURIComponent("Hola, quisiera información sobre los cursos de Montreal.")}`} target="_blank" rel="noopener noreferrer">Consultar cursos</a>
    </>,
  };
  return <main id="contenido" className="contenido-interior" tabIndex={-1}>{paginas[ruta] || <><h1>Página no encontrada</h1><a href="#/">Volver al inicio</a></>}</main>;
}

export default function App() {
  const [ruta, setRuta] = useState(() => window.location.hash.slice(1) || "/");
  useEffect(() => {
    const cambiar = () => {
      setRuta(window.location.hash.slice(1) || "/");
      window.scrollTo?.(0, 0);
    };
    window.addEventListener("hashchange", cambiar);
    return () => window.removeEventListener("hashchange", cambiar);
  }, []);
  useEffect(() => {
    const titulo = enlaces.find(([url]) => url === ruta)?.[1] || "Página no encontrada";
    document.title = `${titulo} | Institución Montreal`;
  }, [ruta]);
  return <div className="sitio"><a className="saltar" href="#contenido" onClick={event => { event.preventDefault(); document.getElementById("contenido")?.focus(); }}>Saltar al contenido</a><Encabezado ruta={ruta} /><Contenido ruta={ruta} /><PiePagina /></div>;
}
