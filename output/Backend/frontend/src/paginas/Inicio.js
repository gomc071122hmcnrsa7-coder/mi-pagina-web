import { useEffect, useState } from "react";
import "./Inicio.css";



const referenciaUbicacion = "Circuito de Los Maestros 28, Atlacomulco de Fabela, Estado de México, México";
const consultaMapa = encodeURIComponent(referenciaUbicacion);

function Inicio() {

    const navegar = (id) => (event) => irASeccion(event, id);
    const consultar = () => window.open("https://wa.me/527225720866?text=" + encodeURIComponent("Hola, me gustaría recibir información sobre los cursos e inscripciones de Montreal."), "_blank", "noopener,noreferrer");
    const [seccionActiva, setSeccionActiva] = useState("inicio");

    useEffect(() => {
        if (!("IntersectionObserver" in window)) return;
        const observer = new IntersectionObserver(([entry]) => {
            setSeccionActiva(entry.isIntersecting ? "contacto" : "inicio");
        }, { threshold: 0.15 });
        const contacto = document.getElementById("contacto");
        if (contacto) observer.observe(contacto);
        return () => observer.disconnect();
    }, []);

    const irASeccion = (event, id) => {
        event.preventDefault();
        setSeccionActiva(id);
        const destino = document.getElementById(id);
        destino?.scrollIntoView({ behavior: window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
        destino?.focus({ preventScroll: true });
    };

    return (

        <div id="inicio" tabIndex={-1} className="pagina-inicio"
            style={{
                backgroundColor: "#f5f5f5",
                minHeight: "100vh",
                color: "#1a1a1a"
            }}
        >

            {/* =====================================================
                ENCABEZADO
            ====================================================== */}

            <header
                style={{
                    backgroundColor: "#111111",
                    color: "white",
                    padding: "15px 0",
                    boxShadow: "0 3px 15px rgba(0,0,0,0.25)"
                }}
            >

                <div
                    className="container d-flex justify-content-between align-items-center flex-wrap gap-3"
                >

                    {/* LOGO + NOMBRE */}

                    <div className="d-flex align-items-center">

                        <img
                            src="/montreal.jpeg"
                            alt="Logo Institución Montreal"
                            style={{
                                width: "65px",
                                height: "65px",
                                objectFit: "contain",
                                backgroundColor: "white",
                                borderRadius: "10px",
                                padding: "4px",
                                marginRight: "15px"
                            }}
                        />

                        <div>

                            <h3 className="mb-0 fw-bold">
                                Institución Montreal
                            </h3>

                            <small style={{ color: "#cfcfcf" }}>
                                Plataforma de cursos y capacitación
                            </small>

                        </div>

                    </div>


                    {/* MENÚ */}

                    <nav className="d-flex align-items-center flex-wrap gap-2" aria-label="Navegación principal">
                        <a href="#inicio" onClick={event => irASeccion(event, "inicio")}
                            className={`btn inicio-nav rounded-pill px-4 ${seccionActiva === "inicio" ? "activo" : ""}`}
                            aria-current={seccionActiva === "inicio" ? "location" : undefined}>Inicio</a>
                        <a href="#contacto" onClick={event => irASeccion(event, "contacto")}
                            className={`btn inicio-nav rounded-pill px-4 ${seccionActiva === "contacto" ? "activo" : ""}`}
                            aria-current={seccionActiva === "contacto" ? "location" : undefined}>Contacto</a>
                        <button className="btn inicio-nav rounded-pill px-4" onClick={navegar("nosotros")}>Nosotros</button>
                        <button className="btn inicio-nav rounded-pill px-4" onClick={navegar("cursos")}>Cursos</button>
                        <button className="btn inicio-nav inicio-login rounded-pill px-4 fw-bold" onClick={navegar("contacto")}>Contáctanos</button>
                    </nav>

                </div>

            </header>


            {/* =====================================================
                HERO
            ====================================================== */}

            <section
                style={{
                    background:
                        "linear-gradient(110deg, #050505 0%, #171717 50%, #3a3a3a 100%)",
                    color: "white",
                    minHeight: "430px",
                    display: "flex",
                    alignItems: "center"
                }}
            >

                <div className="container">

                    <div className="row align-items-center">

                        {/* TEXTO */}

                        <div className="col-lg-6 py-5">

                            <span
                                className="badge rounded-pill mb-3"
                                style={{
                                    backgroundColor: "#ffffff",
                                    color: "#111111",
                                    padding: "10px 18px"
                                }}
                            >
                                🎓 Educación y capacitación
                            </span>


                            <h1 className="fw-bold display-4">

                                Formación que abre

                                <span
                                    style={{
                                        color: "#d4d4d4"
                                    }}
                                >
                                    {" "}nuevas oportunidades
                                </span>

                            </h1>


                            <p
                                className="lead mt-3"
                                style={{
                                    maxWidth: "600px",
                                    color: "#d6d6d6"
                                }}
                            >
                                Aprende, desarrolla tus habilidades y
                                prepárate para nuevos retos con
                                Institución Montreal.
                            </p>


                            <div
                                className="d-flex gap-3 mt-4 flex-wrap"
                            >

                                <button
    className="btn btn-light btn-lg rounded-pill px-4 fw-bold text-dark"
    onClick={navegar("cursos")} 
>
    Ver cursos →
</button>


                                <button
                                    className="btn btn-outline-light btn-lg rounded-pill px-4"
                                    onClick={navegar("nosotros")}
                                >
                                    Conocer Montreal
                                </button>

                            </div>

                        </div>


                        {/* IMAGEN */}

                        <div className="col-lg-6 text-center">

                            <div
                                style={{
                                    backgroundColor: "white",
                                    borderRadius: "25px",
                                    padding: "25px",
                                    display: "inline-block",
                                    boxShadow:
                                        "0 15px 45px rgba(0,0,0,0.45)"
                                }}
                            >

                                <img
                                    src="/montreal.jpeg"
                                    alt="Institución Montreal"
                                    style={{
                                        width: "300px",
                                        maxWidth: "100%",
                                        borderRadius: "15px"
                                    }}
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                BENEFICIOS
            ====================================================== */}

            <section
                className="py-5"
                style={{
                    backgroundColor: "#ffffff"
                }}
            >

                <div className="container">

                    <div className="text-center mb-5">

                        <h2 className="fw-bold">
                            Todo lo que necesitas para seguir aprendiendo
                        </h2>

                        <p className="text-muted">
                            Encuentra diferentes opciones de formación
                            en un solo lugar.
                        </p>

                    </div>


                    <div className="row g-4">


                        {/* CURSOS */}

                        <div className="col-md-3">

                            <div
                                className="card h-100 border-0 shadow-sm text-center p-4"
                                style={{
                                    borderRadius: "18px"
                                }}
                            >

                                <div
                                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "65px",
                                        height: "65px",
                                        borderRadius: "50%",
                                        backgroundColor: "#eeeeee",
                                        fontSize: "30px"
                                    }}
                                >
                                    📚
                                </div>

                                <h5 className="fw-bold">
                                    Cursos
                                </h5>

                                <p className="text-muted mb-0">
                                    Formación en diferentes áreas
                                    de conocimiento.
                                </p>

                            </div>

                        </div>


                        {/* CAPACITACIÓN */}

                        <div className="col-md-3">

                            <div
                                className="card h-100 border-0 shadow-sm text-center p-4"
                                style={{
                                    borderRadius: "18px"
                                }}
                            >

                                <div
                                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "65px",
                                        height: "65px",
                                        borderRadius: "50%",
                                        backgroundColor: "#eeeeee",
                                        fontSize: "30px"
                                    }}
                                >
                                    🎓
                                </div>

                                <h5 className="fw-bold">
                                    Capacitación
                                </h5>

                                <p className="text-muted mb-0">
                                    Desarrolla nuevas habilidades
                                    profesionales.
                                </p>

                            </div>

                        </div>


                        {/* TECNOLOGÍA */}

                        <div className="col-md-3">

                            <div
                                className="card h-100 border-0 shadow-sm text-center p-4"
                                style={{
                                    borderRadius: "18px"
                                }}
                            >

                                <div
                                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "65px",
                                        height: "65px",
                                        borderRadius: "50%",
                                        backgroundColor: "#eeeeee",
                                        fontSize: "30px"
                                    }}
                                >
                                    💻
                                </div>

                                <h5 className="fw-bold">
                                    Tecnología
                                </h5>

                                <p className="text-muted mb-0">
                                    Aprende herramientas digitales
                                    actuales.
                                </p>

                            </div>

                        </div>


                        {/* IDIOMAS */}

                        <div className="col-md-3">

                            <div
                                className="card h-100 border-0 shadow-sm text-center p-4"
                                style={{
                                    borderRadius: "18px"
                                }}
                            >

                                <div
                                    className="mx-auto mb-3 d-flex align-items-center justify-content-center"
                                    style={{
                                        width: "65px",
                                        height: "65px",
                                        borderRadius: "50%",
                                        backgroundColor: "#eeeeee",
                                        fontSize: "30px"
                                    }}
                                >
                                    🌎
                                </div>

                                <h5 className="fw-bold">
                                    Idiomas
                                </h5>

                                <p className="text-muted mb-0">
                                    Mejora tus habilidades
                                    lingüísticas.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                CURSOS
            ====================================================== */}

            
{/* =====================================================
    ACCESO AL CATÁLOGO DE CURSOS
====================================================== */}

<section
    id="cursos" tabIndex={-1}
    className="py-5"
    style={{
        backgroundColor: "#f5f5f5"
    }}
>
    <div className="container">

        <div className="text-center mb-4">
            <h2 className="fw-bold">
                Nuestra oferta educativa
            </h2>

            <p className="text-muted">
                Explora nuestros cursos y encuentra el ideal para ti.
            </p>
        </div>

        <div className="row justify-content-center">

            <div className="col-12 col-md-8 col-lg-6">

                <button
                    type="button"
                    className="tarjeta-acceso-cursos w-100 text-start"
                    onClick={consultar}
                    aria-label="Consultar cursos por WhatsApp (abre una pestaña nueva)"
                >

                    <div className="tarjeta-cursos-icono">
                        📚
                    </div>

                    <div className="tarjeta-cursos-contenido">

                        <h3 className="fw-bold mb-2">
                            Cursos
                        </h3>

                        <p className="mb-3">
                            Solicita información sobre los cursos disponibles,
                            sus características, horarios e inscripciones
                            por WhatsApp.
                        </p>

                        <span className="tarjeta-cursos-enlace">
                            Consultar cursos →
                        </span>

                    </div>

                </button>

            </div>

        </div>

    </div>
</section>

            {/* =====================================================
                SOBRE MONTREAL
            ====================================================== */}

            <section
                id="nosotros" tabIndex={-1}
                className="py-5"
                style={{
                    backgroundColor: "#e9e9e9"
                }}
            >

                <div className="container">

                    <div className="row align-items-center">

                        <div className="col-lg-5 text-center mb-4 mb-lg-0">

                            <img
                                src="/montreal.jpeg"
                                alt="Institución Montreal"
                                style={{
                                    width: "280px",
                                    maxWidth: "100%",
                                    borderRadius: "20px",
                                    boxShadow:
                                        "0 15px 35px rgba(0,0,0,0.25)"
                                }}
                            />

                        </div>


                        <div className="col-lg-7">

                            <span
                                className="fw-bold"
                                style={{
                                    color: "#111111"
                                }}
                            >
                                INSTITUCIÓN MONTREAL
                            </span>

                            <h2 className="fw-bold mt-2">
                                Educación, idiomas,
                                tecnología y cultura.
                            </h2>

                            <p
                                className="text-muted mt-3"
                                style={{
                                    fontSize: "18px",
                                    lineHeight: "1.8"
                                }}
                            >
                                En Institución Montreal encontrarás
                                opciones de cursos y capacitación
                                orientadas al aprendizaje y al
                                desarrollo de nuevas habilidades.
                            </p>

                            
                        </div>

                    </div>

                </div>

            </section>


            {/* =====================================================
                LLAMADA FINAL
            ====================================================== */}

            <section
                className="py-5 text-white text-center"
                style={{
                    background:
                        "linear-gradient(135deg, #050505, #292929)"
                }}
            >

                <div className="container">

                    <h2 className="fw-bold">
                        ¿Listo para comenzar?
                    </h2>

                    <p className="lead">
                        Da el siguiente paso en tu formación.
                    </p>

                    <button
                        className="btn btn-light text-dark rounded-pill px-5 py-3 fw-bold"
                        onClick={consultar}
                    >
                        Consultar inscripciones
                    </button>

                </div>

            </section>


            {/* =====================================================
                PIE DE PÁGINA
            ====================================================== */}

            <section id="ubicacion" className="py-5 bg-white" aria-labelledby="titulo-ubicacion">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
                        <div>
                            <h2 id="titulo-ubicacion" className="fw-bold">Encuéntranos</h2>
                            <p className="text-muted mb-1"> {referenciaUbicacion}.</p>
                            <small className="text-muted">Ubicación aproximada. Contáctanos para confirmar cómo llegar.</small>
                        </div>
                        <a className="btn btn-outline-dark rounded-pill" href={`https://www.google.com/maps/search/?api=1&query=${consultaMapa}`}
                            target="_blank" rel="noopener noreferrer">
                            Abrir en Google Maps <span className="visually-hidden">(abre una pestaña nueva)</span>
                        </a>
                    </div>
                    <iframe
                        title="Mapa de referencia 28, Atlacomulco de Fabela"
                        src={`https://www.google.com/maps?q=${consultaMapa}&output=embed`}
                        width="100%"
                        height="400"
                        style={{ border: 0, borderRadius: "18px", display: "block" }}
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>

            <footer
                id="contacto"
                tabIndex={-1}
                className="text-white pt-5 pb-3"
                style={{
                    backgroundColor: "#111111"
                }}
            >

                <div className="container">

                    <div className="row">

                        {/* MARCA */}

                        <div className="col-md-4 mb-4">

                            <div className="d-flex align-items-center">

                                <img
                                    src="/montreal.jpeg"
                                    alt="Logo Montreal"
                                    style={{
                                        width: "65px",
                                        backgroundColor: "white",
                                        borderRadius: "10px",
                                        padding: "4px",
                                        marginRight: "12px"
                                    }}
                                />

                                <div>

                                    <h5 className="mb-0">
                                        Institución Montreal
                                    </h5>

                                    <small style={{ color: "#bbbbbb" }}>
                                        Plataforma de cursos
                                    </small>

                                </div>

                            </div>

                            <p className="mt-3">
                                Educación y capacitación profesional.
                            </p>

                        </div>


                        {/* ENLACES */}

                        <div className="col-md-4 mb-4">

                            <h5>
                                Enlaces rápidos
                            </h5>

                            <p><a className="contacto-enlace" href="#inicio" onClick={navegar("inicio")}>Inicio</a></p>
                            <p><a className="contacto-enlace" href="#cursos" onClick={navegar("cursos")}>Cursos</a></p>
                            <p><a className="contacto-enlace" href="#nosotros" onClick={navegar("nosotros")}>Conocer Montreal</a></p>

                        </div>


                        {/* CONTACTO */}

                        <div className="col-md-4 mb-4">

                            <h5>
                                Contacto
                            </h5>

                            <p>📍 Circuito de Los Maestros 28, Atlacomulco de Fabela, Estado de México.</p>
                            <a className="contacto-enlace" href="mailto:atlacomulcomontreal@gmail.com">
                                <svg aria-hidden="true" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="3"/><path d="m3 6 9 7 9-7"/></svg>
                                <span>atlacomulcomontreal@gmail.com</span>
                            </a>
                            <a className="contacto-enlace" href="https://wa.me/527225720866" target="_blank" rel="noopener noreferrer" aria-label="Escribir por WhatsApp al 722 572 0866 (abre una pestaña nueva)">
                                <svg aria-hidden="true" viewBox="0 0 24 24" width="26" height="26" fill="none"><path d="M20.5 11.5a9 9 0 0 1-13.4 7.8L2 21l1.7-5.1A9 9 0 1 1 20.5 11.5Z" fill="#25d366"/><path d="M8 7c-2 2 3 8 6 8l2-2-3-1-1 1-3-3 1-1-1-2Z" fill="white"/></svg>
                                <span>WhatsApp: 722 572 0866</span>
                            </a>

                        </div>

                    </div>


                    <hr
                        style={{
                            borderColor: "rgba(255,255,255,0.25)"
                        }}
                    />


                    <div className="text-center">

                        <small>
                            © {new Date().getFullYear()} Institución Montreal. Todos los derechos reservados.
                        </small>

                    </div>

                </div>

            </footer>

        </div>

    );

}

export default Inicio;
