# Reporte de actividades - Institución Montreal

Distribución temática propuesta de los avances, sin fechas calendario asignadas.

## Miércoles

### Nombre de la actividad:

Mejora de la página de inicio y presentación de los cursos de Institución Montreal.

### Objetivo de la actividad:

Facilitar la consulta de la oferta educativa y de la información institucional mediante una navegación clara, tarjetas de cursos y medios de contacto accesibles.

### Marco teórico:

Una aplicación web con arquitectura cliente-servidor separa la interfaz que utiliza el visitante del procesamiento y almacenamiento de datos. En este proyecto, React organiza las pantallas mediante componentes; Django atiende las solicitudes de la interfaz y consulta la base de datos mediante una API.

El enrutamiento permite mostrar diferentes pantallas dentro de la aplicación. Los componentes reutilizables mantienen una presentación uniforme, mientras que el diseño adaptable ajusta la distribución al tamaño de la pantalla. Los enlaces de contacto y los mapas integrados facilitan el acceso a información institucional.

### Desarrollo y Procedimiento:

1. Se revisó la organización del proyecto: configuración del servidor Django, aplicación bibliotecaapp, páginas de React y componentes compartidos.

2. Se conectó el listado de inicio con la API de cursos. Se creó un panel de detalle que permite consultar descripción, duración, costo, nivel, docentes, grupos y horarios al seleccionar un curso.

3. Se incorporaron ilustraciones relacionadas con las áreas de formación. La misma imagen se utiliza en la tarjeta de inicio y en el panel de información del curso.

4. Se ajustó el encabezado para identificar las opciones de navegación. El botón Contacto desplaza al visitante al pie de página, donde se agregaron el correo atlacomulcomontreal@gmail.com y el enlace de WhatsApp al 7225720866, acompañados de iconos.

5. Se integró un mapa con la referencia cercana a Los Maestros 28, Atlacomulco de Fabela, señalada como ubicación aproximada. También se creó el panel Conocer Montreal con el logotipo, presentación, áreas de formación y datos de contacto.

6. Se verificó la compilación del frontend. El resultado fue una página de inicio con acceso a los cursos y a la información institucional desde opciones claramente identificadas.

## Jueves

### Nombre de la actividad:

Desarrollo del panel del alumno y preparación del acceso a contenidos académicos.

### Objetivo de la actividad:

Permitir que cada alumno consulte sus cursos inscritos, materiales y horarios asignados desde su cuenta, con controles de acceso para proteger la información y las descargas.

### Marco teórico:

La autenticación identifica a quien inicia sesión y la autorización determina qué información puede consultar. Un token firmado permite al servidor comprobar la identidad de una solicitud sin confiar únicamente en un identificador enviado por el navegador.

En una base de datos relacional, la inscripción vincula a un alumno con un grupo; el grupo relaciona el curso, el docente y el periodo. Los horarios pertenecen al grupo. Esta estructura permite recuperar los datos correspondientes a cada alumno y mantener una relación coherente entre las entidades.

Los materiales digitales pueden incluir textos y archivos. Su consulta y descarga deben comprobar la inscripción del usuario. Las migraciones permiten incorporar nuevas estructuras de almacenamiento de forma controlada.

### Desarrollo y Procedimiento:

1. Se revisaron el inicio de sesión y la interfaz Contenido1.js. Se identificó que el panel anterior utilizaba un alumno fijo y que no contenía materiales descargables.

2. Se creó la ruta /alumno y se configuró el acceso desde el inicio de sesión. La consulta de cursos se vinculó con la cuenta autenticada y con sus inscripciones activas.

3. Se organizaron los datos de cada curso: descripción, nivel, duración, grupo, docente, periodo y horarios, incluidos el día, las horas y el aula asignada.

4. Se agregó la estructura materiales_curso para guardar títulos, contenidos y archivos. Se preparó su publicación desde el administrador de Django y se implementaron opciones para consultar y descargar los archivos disponibles.

5. Se incorporaron controles para rechazar sesiones inválidas o vencidas y descargas de cursos ajenos. También se añadieron mensajes para cursos sin materiales, errores de carga y cuentas sin inscripciones activas.

6. Se retiró el botón Crear una cuenta del formulario de login y se limitaron las opciones visibles del registro a Alumno y Padre. Se agregó el rol Padre a la base de datos.

7. Se aprobaron nueve pruebas del panel y se comprobó una consulta real de inscripciones. Los contenidos descargables quedaron preparados para su carga; no se incorporaron archivos académicos ficticios.

## Viernes

### Nombre de la actividad:

Organización del administrador, relaciones académicas y actualización del diseño visual.

### Objetivo de la actividad:

Simplificar la gestión de registros y asignaciones mediante formularios relacionados, y mostrar a docentes, alumnos y padres la información que les corresponde con una presentación ordenada.

### Marco teórico:

La integridad referencial mantiene la correspondencia entre registros relacionados. Los selectores con nombres ayudan a elegir claves foráneas sin escribir IDs. La normalización evita duplicar datos: en calificaciones, el alumno se obtiene mediante la inscripción, que también identifica su grupo.

Las operaciones CRUD permiten crear, consultar, editar y eliminar registros. Las validaciones deben comprobar las relaciones en el servidor. La consulta periódica actualiza las pantallas, mientras que la jerarquía visual, el contraste y los espacios facilitan el uso de tablas y formularios.

### Desarrollo y Procedimiento:

1. Se organizaron secciones separadas para docentes, alumnos y padres. Se incorporaron búsqueda y ordenamiento en las tablas, así como selectores filtrables que muestran nombres en lugar de identificadores.

2. Se habilitó la asignación de curso, docente y periodo desde Grupos. En Horarios se seleccionan grupo, día y aula, junto con las horas de inicio y fin. Inscripciones utiliza selección de alumno y grupo, además de un calendario para la fecha.

3. Se agregó el selector de alumno en Calificaciones. La inscripción filtra las evaluaciones del mismo grupo; el alumno se obtiene de esta relación sin agregar una columna duplicada a la tabla.

4. Se creó la relación padres_alumnos y el panel de padres de familia. Los docentes consultan sus grupos asignados; los alumnos, sus inscripciones; y los padres, los alumnos vinculados a su cuenta. Las pantallas consultan cambios cada 15 segundos y al recuperar el foco.

5. Se validaron inscripciones duplicadas, horarios cruzados y calificaciones de otro grupo. Una prueba integral con una base aislada comprobó que las asignaciones se reflejaran en las cuentas correspondientes y no en cuentas ajenas.

6. Se renovó el diseño del administrador conservando sus secciones y funciones: menú por categorías, iconos, indicadores de registros, tipografía uniforme, formularios espaciados, estados visuales y tablas con encabezados fijos. Se incorporaron ajustes para pantallas pequeñas.

7. Se verificaron siete pruebas de selectores, las pruebas del backend y la compilación del frontend. Quedó un administrador con formularios relacionados y una presentación más clara para la gestión institucional.

