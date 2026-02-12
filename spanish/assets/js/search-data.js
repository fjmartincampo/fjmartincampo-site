
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
    title: "inicio",
    section: "Menu de navegación",
    handler: () => {
      window.location.href = "/spanish/";
    },
  },{id: "dropdown-experiencia-investigadora",
              title: "experiencia investigadora",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/projects/";
              },
            },{id: "dropdown-colaboradores",
              title: "colaboradores",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/coauthors/";
              },
            },{id: "dropdown-publicaciones-jcr",
              title: "publicaciones JCR",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/publications/";
              },
            },{id: "dropdown-otras-publicaciones",
              title: "otras publicaciones",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/opublications/";
              },
            },{id: "dropdown-libros-capítulos",
              title: "libros/capítulos",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/books/";
              },
            },{id: "dropdown-datasets",
              title: "datasets",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/datasets";
              },
            },{id: "dropdown-curso-2025-26",
              title: "curso 2025-26",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/course/";
              },
            },{id: "dropdown-trayectoria-docente",
              title: "trayectoria docente",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/teaching/";
              },
            },{id: "dropdown-trabajos-fin-de-grado",
              title: "trabajos fin de grado",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/tfg/";
              },
            },{id: "dropdown-trabajos-fin-de-máster",
              title: "trabajos fin de máster",
              description: "",
              section: "Otras opciones",
              handler: () => {
                window.location.href = "/spanish/tfm/";
              },
            },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Menu de navegación",
          handler: () => {
            window.location.href = "/spanish/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "explorando la investigación operativa",
          section: "Menu de navegación",
          handler: () => {
            window.location.href = "/spanish/blog/";
          },
        },{id: "post-el-algoritmo-símplex-el-motor-de-la-optimización-matemática",
        
          title: "El Algoritmo Símplex, el Motor de la Optimización Matemática",
        
        description: "El método clásico que convirtió la optimización en una herramienta computacional efectiva.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/spanish/blog/2026/simplex/";
          
        },
      },{id: "post-la-anatomía-de-un-problema-de-optimización-lineal",
        
          title: "La anatomía de un problema de optimización lineal",
        
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
          title: 'detección y resolución de conflictos aéreos',
          description: "",
          section: "Proyectos",handler: () => {
              window.location.href = "/spanish/projects/spanish/1_project/";
            },},{id: "projects-distribución-de-ayuda-humanitaria",
          title: 'distribución de ayuda humanitaria',
          description: "",
          section: "Proyectos",handler: () => {
              window.location.href = "/spanish/projects/spanish/2_project/";
            },},{id: "projects-diseño-de-programas-de-electrificación-rural-descentralizada",
          title: 'diseño de programas de electrificación rural descentralizada',
          description: "",
          section: "Proyectos",handler: () => {
              window.location.href = "/spanish/projects/spanish/3_project/";
            },},{id: "projects-deslocalización-de-instalaciones",
          title: 'deslocalización de instalaciones',
          description: "",
          section: "Proyectos",handler: () => {
              window.location.href = "/spanish/projects/spanish/4_project/";
            },},{id: "projects-corte-en-la-industria-del-acero",
          title: 'corte en la industria del acero',
          description: "",
          section: "Proyectos",handler: () => {
              window.location.href = "/spanish/projects/spanish/5_project/";
            },},{id: "projects-corte-en-la-industria-del-cartón-nido-de-abeja",
          title: 'corte en la industria del cartón nido de abeja',
          description: "",
          section: "Proyectos",handler: () => {
              window.location.href = "/spanish/projects/spanish/6_project/";
            },},{id: "projects-planificación-del-personal-médico-en-un-hospital-de-campaña",
          title: 'planificación del personal médico en un hospital de campaña',
          description: "",
          section: "Proyectos",handler: () => {
              window.location.href = "/spanish/projects/spanish/7_project/";
            },},{id: "projects-reparto-de-energía-fotovoltaica-en-comunidades-de-vecinos",
          title: 'reparto de energía fotovoltaica en comunidades de vecinos',
          description: "",
          section: "Proyectos",handler: () => {
              window.location.href = "/spanish/projects/spanish/8_project/";
            },},{
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
