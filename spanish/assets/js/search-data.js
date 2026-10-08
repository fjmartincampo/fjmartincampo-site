
const currentUrl = window.location.href;
const siteUrl = "https://www.fjmartincampo.com"; 
let updatedUrl = currentUrl.replace("https://www.fjmartincampo.com", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("spanish".length > 0) {
  updatedUrl = updatedUrl.replace("/spanish", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-inicio",
    title: "Inicio",
    section: "Menu de navegación",
    handler: () => {
      window.location.href = "/spanish/";
    },
  },{id: "dropdown-experiencia-investigadora",
              title: "Experiencia investigadora",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/projects/";
              },
            },{id: "dropdown-colaboradores",
              title: "Colaboradores",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/coauthors/";
              },
            },{id: "dropdown-publicaciones-jcr",
              title: "Publicaciones JCR",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/publications/";
              },
            },{id: "dropdown-otras-publicaciones",
              title: "Otras publicaciones",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/opublications/";
              },
            },{id: "dropdown-libros-capítulos",
              title: "Libros/capítulos",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/books/";
              },
            },{id: "dropdown-datasets",
              title: "Datasets",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/datasets";
              },
            },{id: "dropdown-curso-2026-27",
              title: "Curso 2026-27",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/course/";
              },
            },{id: "dropdown-píldoras-de-optimización",
              title: "Píldoras de optimización",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/bites/";
              },
            },{id: "dropdown-trayectoria-docente",
              title: "Trayectoria docente",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/teaching/";
              },
            },{id: "dropdown-trabajos-fin-de-grado",
              title: "Trabajos fin de grado",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/tfg/";
              },
            },{id: "dropdown-trabajos-fin-de-máster",
              title: "Trabajos fin de máster",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/tfm/";
              },
            },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Menu de navegación",
          handler: () => {
            window.location.href = "/spanish/cv/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "Explorando la investigación operativa",
          section: "Menu de navegación",
          handler: () => {
            window.location.href = "/spanish/blog/";
          },
        },{id: "nav-fuentes",
          title: "Fuentes",
          description: "",
          section: "Menu de navegación",
          handler: () => {
            window.location.href = "/spanish/sources/";
          },
        },{id: "post-cuando-las-variables-se-mezclan-cortes-mixtos-de-gomory",
        
          title: "Cuando las variables se mezclan: cortes mixtos de Gomory",
        
        description: "Los cortes de Gomory mixtos permiten abordar problemas de optimización con variables enteras y continuas",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/gomorycutmixed/";
          
        },
      },{id: "post-torres-de-hanoi-la-danza-del-mínimo-movimiento",
        
          title: "Torres de Hanoi, la danza del mínimo movimiento",
        
        description: "3 varillas, unos discos para mover una torre",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/towerhanoi/";
          
        },
      },{id: "post-se-ha-cometido-un-crimen-en-un-sudoku",
        
          title: "Se ha cometido un crimen... ¡en un sudoku!",
        
        description: "Resuelve el crimen utilizando optimización lineal binaria",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/murdoku/";
          
        },
      },{id: "post-la-armonía-de-los-dígitos-resolviendo-el-kakuro",
        
          title: "La armonía de los dígitos resolviendo el Kakuro",
        
        description: "Sumas fijas, dígitos sin repetir, celdas cruzadas y optimización binaria",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/kakuro/";
          
        },
      },{id: "post-sudoku-killer-el-reto-del-tablero-vacío-que-las-matemáticas-pueden-vencer",
        
          title: "Sudoku Killer, el reto del tablero vacío que las matemáticas pueden vencer",
        
        description: "¿Un Sudoku sin un solo número inicial? La optimización binaria lo resuelve sin titubear",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/sudokukiller/";
          
        },
      },{id: "post-resolviendo-el-tablero-de-number-sums-usando-optimización-matemática",
        
          title: "Resolviendo el tablero de Number Sums usando optimización matemática",
        
        description: "Sumar parece fácil hasta que todas las filas y columnas tienen que encajar a la vez",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/numbersums/";
          
        },
      },{id: "post-construyendo-puentes-con-optimización-lineal-el-rompecabezas-hashi",
        
          title: "Construyendo puentes con optimización lineal, el rompecabezas Hashi",
        
        description: "De un pasatiempo japonés a un modelo de flujo único",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/hashi/";
          
        },
      },{id: "post-el-paseo-perfecto-del-caballo-desafía-al-ajedrez-con-optimización-lineal",
        
          title: "El paseo perfecto del caballo, desafía al ajedrez con optimización lineal",
        
        description: "¿Un caballo que visita cada casilla del tablero exactamente una vez?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/knightstour/";
          
        },
      },{id: "post-más-allá-del-0-y-el-1-el-sudoku-binario",
        
          title: "Más allá del 0 y el 1, el sudoku binario",
        
        description: "Desafía a tu mente y aprende a resolver este rompecabezas de ceros y unos",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/binarysudoku/";
          
        },
      },{id: "post-dominando-el-tablero-con-reinas",
        
          title: "Dominando el tablero con reinas",
        
        description: "Optimización lineal binaria para dominar el tablero de ajedrez",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/queensdomination/";
          
        },
      },{id: "post-termómetros-lógicos-más-allá-de-la-temperatura",
        
          title: "Termómetros lógicos, más allá de la temperatura",
        
        description: "Modelando este puzzle mediante optimización entera",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/thermometers/";
          
        },
      },{id: "post-dominosa-más-allá-del-dominó",
        
          title: "Dominosa, más allá del dominó",
        
        description: "Formulación matemática del juego Dominosa mediante optimización lineal binaria",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/dominosa/";
          
        },
      },{id: "post-el-laberinto-numérico-de-hidato",
        
          title: "El laberinto numérico de Hidato",
        
        description: "Formulación matemática de Hidato mediante optimización",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/hidato/";
          
        },
      },{id: "post-cruzando-el-puente-de-noche",
        
          title: "Cruzando el puente de noche",
        
        description: "¿Cómo cruzar a 4 personas por un puente oscuro en el menor tiempo posible?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/bridgecrossing/";
          
        },
      },{id: "post-coloreando-mapas",
        
          title: "Coloreando mapas",
        
        description: "¿Cuántos colores necesitas para pintar un mapa sin que dos países vecinos compartan color?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/coloringmap/";
          
        },
      },{id: "post-el-acertijo-de-einstein",
        
          title: "El acertijo de Einstein",
        
        description: "¿Es cierto que sólo el 2% puede resolverlo? Resolvámoslo mediante optimización binaria",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/einsteinpuzzle/";
          
        },
      },{id: "post-optimización-no-lineal-con-restricciones-las-condiciones-que-esconden-el-óptimo",
        
          title: "Optimización no lineal con restricciones, las condiciones que esconden el óptimo",
        
        description: "Descubriendo cómo las condiciones de Karush-Kuhn-Tucker permiten conectar el objetivo y las restricciones para caracterizar soluciones óptimas",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/kkt/";
          
        },
      },{id: "post-cortes-fraccionales-de-gomory-el-poder-de-un-buen-corte",
        
          title: "Cortes fraccionales de Gomory, el poder de un buen corte",
        
        description: "Descubre cómo los cortes de Gomory eliminan soluciones fraccionarias para acercarnos a la solución entera óptima",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/gomorycut/";
          
        },
      },{id: "post-encontrar-la-aguja-sin-mirar-todo-el-pajar",
        
          title: "Encontrar la aguja sin mirar todo el pajar",
        
        description: "Una introducción intuitiva al algoritmo de ramificación y acotación",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/branchandbound/";
          
        },
      },{id: "post-modelando-decisiones-con-variables-binarias",
        
          title: "Modelando decisiones con variables binarias",
        
        description: "Aprendiendo a formular implicaciones, disyunciones, costes fijos y otras restricciones habituales en optimización entera",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/basicmodelling/";
          
        },
      },{id: "post-de-la-optimización-continua-a-la-optimización-entera-el-poder-de-las-variables-enteras",
        
          title: "De la optimización continua a la optimización entera, el poder de las variables...",
        
        description: "Explorando cómo un pequeño cambio en el modelo da lugar a una nueva clase de problemas de optimización",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/integeroptimization/";
          
        },
      },{id: "post-el-óptimo-no-es-el-final-claves-de-la-post-optimización",
        
          title: "El óptimo no es el final, claves de la post-optimización",
        
        description: "Una explicación intuitiva de cómo estudiar la estabilidad de una solución óptima mediante técnicas de post-optimización",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/postoptimization/";
          
        },
      },{id: "post-el-símplex-al-revés-entendiendo-el-algoritmo-dual-del-símplex",
        
          title: "El Símplex al revés, entendiendo el algoritmo dual del Símplex",
        
        description: "Una introducción intuitiva al algoritmo dual del Símplex, sus fundamentos y cómo inicializarlo.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/dualsimplex/";
          
        },
      },{id: "post-descubriendo-el-espejo-de-la-optimización-lineal-el-fascinante-mundo-de-la-dualidad",
        
          title: "Descubriendo el espejo de la optimización Lineal, el fascinante mundo de la dualidad...",
        
        description: "Un viaje por la teoría de la dualidad en optimización lineal.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/duality/";
          
        },
      },{id: "post-convergencia-degeneración-y-el-quot-lado-oscuro-quot-del-símplex",
        
          title: "Convergencia, degeneración y el &quot;lado oscuro&quot; del Símplex",
        
        description: "Análisis de la convergencia del Símplex y ejemplos de ciclos y recorridos completos de vértices.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/simplexconvergence/";
          
        },
      },{id: "post-cómo-reconocer-los-distintos-tipos-de-soluciones-en-optimización-lineal-con-el-símplex",
        
          title: "Cómo reconocer los distintos tipos de soluciones en optimización lineal con el Símplex...",
        
        description: "Aprende a diferenciar los tipos de soluciones en problemas de optimización lineal con ejemplos",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/simplexexamples/";
          
        },
      },{id: "post-el-arranque-del-símplex-cómo-comenzar-cuando-no-hay-solución-básica-evidente",
        
          title: "El arranque del Símplex, cómo comenzar cuando no hay solución básica evidente",
        
        description: "Cómo construir una base factible inicial en el Símplex mediante los métodos de penalizaciones (Big-M) y el método de las dos fases",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/initialization/";
          
        },
      },{id: "post-el-algoritmo-símplex-el-motor-de-la-optimización-matemática",
        
          title: "El Algoritmo Símplex, el motor de la optimización matemática",
        
        description: "El método clásico que convirtió la optimización en una herramienta computacional efectiva.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/simplex/";
          
        },
      },{id: "post-la-anatomía-del-problema-de-optimización-lineal",
        
          title: "La anatomía del problema de optimización lineal",
        
        description: "Caracterización geométrica de los problemas de optimización lineal, puntos extremos, direcciones extremas y teorema de representación",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/theoreticalLO/";
          
        },
      },{id: "post-la-resolución-gráfica-como-punto-de-partida-en-optimización-lineal",
        
          title: "La resolución gráfica como punto de partida en optimización lineal",
        
        description: "Resolución gráfica en optimización, herramienta conceptual previa a métodos algorítmicos como el Símplex.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/graphical/";
          
        },
      },{id: "post-optimización-lineal-matemáticas-para-decidir-mejor",
        
          title: "Optimización lineal, matemáticas para decidir mejor",
        
        description: "Un recorrido por el origen de la optimización lineal, sus conceptos básicos y su papel clave en la toma de decisiones eficientes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/linearoptimization/";
          
        },
      },{id: "post-la-ciencia-detrás-de-la-la-toma-de-decisiones-en-un-mundo-complejo-investigación-operativa",
        
          title: "La ciencia detrás de la la toma de decisiones en un mundo complejo...",
        
        description: "Un recorrido por la historia, las sociedades científicas y el impacto de la investigación operativa",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/historyOR/";
          
        },
      },{id: "post-una-formulación-de-optimización-lineal-del-problema-de-las-n-reinas",
        
          title: "Una formulación de optimización lineal del problema de las n-reinas",
        
        description: "Modelización del número máximo de reinas sin atacarse en un tablero de ajedrez",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2025/queens/";
          
        },
      },{id: "post-cómo-resolver-sudokus-con-optimización-lineal",
        
          title: "Cómo resolver Sudokus con optimización lineal",
        
        description: "Modelización de un sudoku",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2025/sudoku/";
          
        },
      },{id: "projects-detección-y-resolución-de-conflictos-aéreos",
          title: 'Detección y resolución de conflictos aéreos',
          description: "",
          section: "Proyectos",handler: () => {
              window.location.href = "/spanish/projects/project-1/";
            },},{id: "projects-distribución-de-ayuda-humanitaria",
          title: 'Distribución de ayuda humanitaria',
          description: "",
          section: "Proyectos",handler: () => {
              window.location.href = "/spanish/projects/project-2/";
            },},{id: "projects-diseño-de-programas-de-electrificación-rural-descentralizada",
          title: 'Diseño de programas de electrificación rural descentralizada',
          description: "",
          section: "Proyectos",handler: () => {
              window.location.href = "/spanish/projects/project-3/";
            },},{id: "projects-deslocalización-de-instalaciones",
          title: 'Deslocalización de instalaciones',
          description: "",
          section: "Proyectos",handler: () => {
              window.location.href = "/spanish/projects/project-4/";
            },},{id: "projects-corte-en-la-industria-del-acero",
          title: 'Corte en la industria del acero',
          description: "",
          section: "Proyectos",handler: () => {
              window.location.href = "/spanish/projects/project-5/";
            },},{id: "projects-corte-en-la-industria-del-cartón-nido-de-abeja",
          title: 'Corte en la industria del cartón nido de abeja',
          description: "",
          section: "Proyectos",handler: () => {
              window.location.href = "/spanish/projects/project-6/";
            },},{id: "projects-planificación-del-personal-médico-en-un-hospital-de-campaña",
          title: 'Planificación del personal médico en un hospital de campaña',
          description: "",
          section: "Proyectos",handler: () => {
              window.location.href = "/spanish/projects/project-7/";
            },},{id: "projects-reparto-de-energía-fotovoltaica-en-comunidades-de-vecinos",
          title: 'Reparto de energía fotovoltaica en comunidades de vecinos',
          description: "",
          section: "Proyectos",handler: () => {
              window.location.href = "/spanish/projects/project-8/";
            },},{id: "projects-clasificación-geométrica-mediante-ensamblados",
          title: 'Clasificación geométrica mediante ensamblados',
          description: "",
          section: "Proyectos",handler: () => {
              window.location.href = "/spanish/projects/project-9/";
            },},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Redes sociales',
        handler: () => {
          window.open("https://dblp.org/pid/76/9516.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'Enviar un email',
        section: 'Redes sociales',
        handler: () => {
          window.open("mailto:%6A%61%76%69%65%72.%6D%61%72%74%69%6E.%63%61%6D%70%6F@%6D%61%74.%75%63%6D.%65%73", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Redes sociales',
        handler: () => {
          window.open("https://github.com/fjmartincampo", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Redes sociales',
        handler: () => {
          window.open("https://www.linkedin.com/in/f-javier-martín-campo-b4a1583b5", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Redes sociales',
        handler: () => {
          window.open("https://orcid.org/0000-0001-7584-4062", "_blank");
        },
      },{
        id: 'social-publons',
        title: 'Publons',
        section: 'Redes sociales',
        handler: () => {
          window.open("https://publons.com/a/D-8609-2012/", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Redes sociales',
        handler: () => {
          window.open("https://www.researchgate.net/profile/F-Javier-Martin-Campo/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Redes sociales',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=HZnCRN0AAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Redes sociales',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=36350160600", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Redes sociales',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/1401648468", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Redes sociales',
        handler: () => {
          window.open("https://blogs.mat.ucm.es/fjmartinc/en/", "_blank");
        },
      },{
          id: 'lang-english',
          title: 'english',
          section: 'Idiomas',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Cambia el tema a modo claro',
      description: 'Cambia el tema a modo claro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Cambia el tema a modo oscuro',
      description: 'Cambia el tema a modo oscuro',
      section: 'Tema',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Cambia el tema al modo del sistema',
      description: 'Cambia el tema al modo del sistema',
      section: 'Tema',
      handler: () => {
        setThemeSetting("system");
      },
    },];
