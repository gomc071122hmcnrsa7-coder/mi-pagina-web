import { useRef, useState } from "react";

const consulta = texto => `https://wa.me/527225720866?text=${encodeURIComponent(texto)}`;
const ilustracion = nombre => `${process.env.PUBLIC_URL}/imagenes/cursos/${nombre}.svg`;
const servicios = [
  { nombre: "Inglés", area: "Idiomas", imagen: "idiomas", texto: "Vocabulario, gramática y conversación para situaciones cotidianas." },
  { nombre: "Francés", area: "Idiomas", imagen: "general", texto: "Expresiones básicas, pronunciación y vocabulario para comenzar a comunicarte." },
  { nombre: "Matemáticas", area: "Formación académica", imagen: "matematicas", texto: "Práctica de operaciones, álgebra y resolución de problemas." },
];

export function Productos() {
  return <>
    <p className="ceja">Formación para nuevas oportunidades</p>
    <h1>Nuestros productos</h1>
    <p>En Montreal, nuestros productos son servicios educativos. Conoce estos ejemplos de cursos y consulta cuál se adapta a tus intereses.</p>
    <p className="texto-secundario">Oferta ilustrativa. La disponibilidad, los horarios, los niveles y los costos se confirman directamente con la institución.</p>
    <div className="rejilla-actividad">
      {servicios.map(curso => <article className="tarjeta-actividad" key={curso.nombre}>
        <img src={ilustracion(curso.imagen)} alt="" className="imagen-actividad" />
        <div className="cuerpo-tarjeta"><span className="etiqueta-actividad">{curso.area}</span><h2>{curso.nombre}</h2><p>{curso.texto}</p>
          <a className="boton" href={consulta(`Hola, quisiera información sobre el curso de ${curso.nombre} en Montreal.`)} target="_blank" rel="noopener noreferrer">Consultar {curso.nombre}</a>
        </div>
      </article>)}
    </div>
    <a className="enlace-secundario" href="#/catalogo">Ver el catálogo de cursos</a>
  </>;
}

export function Aliados() {
  return <>
    <p className="ceja">Vinculación y colaboración</p><h1>Aliados estratégicos</h1>
    <p>Las colaboraciones pueden acercar nuevas oportunidades de aprendizaje a la comunidad. Este espacio está preparado para presentar las alianzas que Montreal confirme.</p>
    <h2 className="subtitulo-rojo">Áreas de colaboración propuestas</h2>
    <div className="rejilla-actividad">
      {[
        ["01", "Instituciones educativas", "Propuestas de intercambio de conocimientos y actividades académicas."],
        ["02", "Organizaciones culturales", "Propuestas para acercar los idiomas, el arte y la cultura a la comunidad."],
        ["03", "Sector profesional", "Propuestas de capacitación y desarrollo de habilidades para el trabajo."],
      ].map(([numero,titulo,texto]) => <article className="tarjeta-actividad cuerpo-tarjeta" key={titulo}><span className="numero-actividad" aria-hidden="true">{numero}</span><h2>{titulo}</h2><p>{texto}</p><span className="etiqueta-actividad">Propuesta de colaboración</span></article>)}
    </div>
    <p className="texto-secundario">No se publican nombres ni logotipos de aliados porque no hay convenios confirmados para esta versión del sitio.</p>
    <a className="boton" href="#/contacto">Proponer una colaboración</a>
  </>;
}

const imagenes = [
  { nombre: "Aprendizaje de idiomas", categoria: "Idiomas", archivo: "idiomas", descripcion: "Ilustración de recursos para el aprendizaje de idiomas." },
  { nombre: "Formación académica", categoria: "Formación", archivo: "general", descripcion: "Ilustración de materiales de estudio." },
  { nombre: "Herramientas digitales", categoria: "Tecnología", archivo: "tecnologia", descripcion: "Ilustración de herramientas tecnológicas para aprender." },
  { nombre: "Capacitación profesional", categoria: "Formación", archivo: "profesional", descripcion: "Ilustración sobre el desarrollo de habilidades profesionales." },
  { nombre: "Arte y cultura", categoria: "Cultura", archivo: "arte", descripcion: "Ilustración de actividades artísticas y culturales." },
];
export function Galeria() {
  const [filtro, setFiltro] = useState("Todas");
  const [seleccion, setSeleccion] = useState(null);
  const dialogo = useRef(null);
  const ultimoBoton = useRef(null);
  const abrir = (item,event) => { ultimoBoton.current=event.currentTarget; setSeleccion(item); dialogo.current.showModal(); };
  return <>
    <p className="ceja">Explora nuestras áreas de aprendizaje</p><h1>Galería</h1>
    <p>Recorre las ilustraciones de nuestras áreas de formación. Selecciona una categoría y pulsa una imagen para verla ampliada.</p>
    <p className="texto-secundario">Son recursos ilustrativos del sitio; no son fotografías de instalaciones, estudiantes ni eventos reales.</p>
    <div className="filtros-galeria" role="group" aria-label="Filtrar galería">
      {["Todas", "Idiomas", "Formación", "Tecnología", "Cultura"].map(categoria => <button type="button" key={categoria} aria-pressed={filtro === categoria} onClick={() => setFiltro(categoria)}>{categoria}</button>)}
    </div>
    <p role="status" className="texto-secundario">{imagenes.filter(item => filtro === "Todas" || item.categoria === filtro).length} imágenes en {filtro.toLowerCase()}.</p>
    <div className="rejilla-actividad galeria-actividad">
      {imagenes.filter(item => filtro === "Todas" || item.categoria === filtro).map(item => <figure className="tarjeta-actividad" key={item.nombre}>
        <button type="button" className="abrir-imagen" onClick={event => abrir(item,event)} aria-label={`Ampliar ${item.nombre}`}><img src={ilustracion(item.archivo)} alt={item.descripcion} /><span aria-hidden="true">Ampliar imagen ↗</span></button>
        <figcaption className="cuerpo-tarjeta"><strong>{item.nombre}</strong><small>{item.categoria}</small></figcaption>
      </figure>)}
    </div>
    <dialog ref={dialogo} className="dialogo-galeria" aria-labelledby="titulo-imagen" onClose={() => ultimoBoton.current?.focus()}>
      {seleccion && <><div className="cabecera-dialogo"><h2 id="titulo-imagen">{seleccion.nombre}</h2><button type="button" className="boton" onClick={() => dialogo.current.close()}>Cerrar imagen</button></div><img src={ilustracion(seleccion.archivo)} alt={seleccion.descripcion} /><p>{seleccion.descripcion}</p></>}
    </dialog>
  </>;
}

export function Testimonios() {
  return <>
    <p className="ceja">Experiencias de aprendizaje</p><h1>Testimonios de clientes</h1>
    <p>Este apartado permite presentar experiencias de estudiantes y personas que consultan nuestros servicios educativos.</p>
    <p className="aclaracion-ejemplos"><strong>Ejemplos de presentación:</strong> los siguientes textos son ficticios y muestran el diseño del apartado. No corresponden a opiniones reales ni a resultados comprobados.</p>
    <div className="rejilla-actividad">
      {[
        ["Inglés", "Las prácticas de conversación me ayudaron a repasar el vocabulario del curso."],
        ["Francés", "Los ejercicios de pronunciación me sirvieron para practicar las expresiones básicas."],
        ["Matemáticas", "Los ejercicios guiados me ayudaron a repasar operaciones y resolver dudas."],
      ].map(([curso,texto],i) => <figure className="tarjeta-actividad cuerpo-tarjeta testimonio" key={curso}><span className="etiqueta-actividad">Testimonio ficticio {i+1}</span><blockquote>“{texto}”</blockquote><figcaption>Perfil de ejemplo · {curso}</figcaption></figure>)}
    </div>
    <h2 className="subtitulo-rojo">Comparte tu experiencia</h2>
    <p>Si has participado en un curso, puedes enviar tu opinión. Su publicación requiere revisión y tu autorización; enviar el mensaje no publica el testimonio automáticamente.</p>
    <a className="boton" href={consulta("Hola, quisiera compartir mi experiencia con Montreal y consultar cómo autorizar su publicación.")} target="_blank" rel="noopener noreferrer">Enviar mi experiencia</a>
  </>;
}

export function Privacidad() {
  return <>
    <p className="ceja">Información y contacto</p><h1>Aviso de privacidad</h1>
    <p className="texto-secundario">Versión informativa del sitio académico · Actualización: 4 de noviembre de 2026.</p>
    <h2 className="subtitulo-rojo">Quién atiende las consultas</h2>
    <p>Institución Montreal. Dirección de contacto: Circuito de Los Maestros 28, Atlacomulco, Estado de México. Correo: <a href="mailto:atlacomulcomontreal@gmail.com">atlacomulcomontreal@gmail.com</a>.</p>
    <h2 className="subtitulo-rojo">Datos solicitados y finalidad</h2>
    <p>El formulario solicita nombre completo, correo electrónico, asunto y mensaje; el teléfono es opcional. Se utilizan para preparar y atender consultas sobre cursos, horarios, inscripciones o colaboraciones. Evita incluir información sensible o documentos personales en el mensaje.</p>
    <h2 className="subtitulo-rojo">Cómo funciona el envío</h2>
    <p>Los datos se capturan temporalmente en el formulario del navegador. Al continuar, se incorporan a una dirección de WhatsApp que se abre en otra pestaña. Revisa el texto y confirma allí su envío. El sitio no guarda estos datos en una base de datos ni realiza el envío por sí solo.</p>
    <p>Al abrir WhatsApp, el texto preparado se comunica a ese servicio mediante el enlace. Su tratamiento y el historial de la conversación dependen también de las condiciones de WhatsApp y de la atención posterior de la institución.</p>
    <h2 className="subtitulo-rojo">Imágenes y testimonios</h2>
    <p>La galería utiliza ilustraciones y los testimonios visibles son ejemplos ficticios. Para incorporar fotografías, nombres u opiniones reales se debe contar con la autorización correspondiente antes de publicarlos.</p>
    <h2 className="subtitulo-rojo">Consultas sobre tus datos</h2>
    <p>Para solicitar información, corrección o eliminación de datos enviados a la institución, escribe al correo de contacto e indica tu solicitud. No envíes documentos de identidad por este formulario.</p>
    <h2 className="subtitulo-rojo">Servicios externos y cambios</h2>
    <p>Los enlaces a WhatsApp, Google Maps y la aplicación de correo abren servicios externos. El formulario no utiliza cookies propias para guardar lo que escribes. Las actualizaciones de este aviso se mostrarán en esta misma página.</p>
    <a className="boton" href="#/contacto">Ir al formulario de contacto</a>
  </>;
}
