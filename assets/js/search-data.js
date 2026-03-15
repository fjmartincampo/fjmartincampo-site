
const currentUrl = window.location.href;
const siteUrl = "https://www.fjmartincampo.com"; 
let updatedUrl = currentUrl.replace("https://www.fjmartincampo.com", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("".length > 0) {
  updatedUrl = updatedUrl.replace("/", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation menu",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "dropdown-research-experience",
              title: "research experience",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/projects/";
              },
            },{id: "dropdown-collaborators",
              title: "collaborators",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/coauthors/";
              },
            },{id: "dropdown-publications-jcr",
              title: "publications JCR",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/publications/";
              },
            },{id: "dropdown-other-publications",
              title: "other publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/opublications/";
              },
            },{id: "dropdown-books-chapters",
              title: "books/chapters",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-datasets",
              title: "datasets",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/datasets/";
              },
            },{id: "dropdown-course-2025-26",
              title: "course 2025-26",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/course/";
              },
            },{id: "dropdown-optimization-bites",
              title: "optimization bites",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/bites/";
              },
            },{id: "dropdown-teaching-experience",
              title: "teaching experience",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/teaching/";
              },
            },{id: "dropdown-bachelor-39-s-theses",
              title: "bachelor&#39;s theses",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/tfg/";
              },
            },{id: "dropdown-master-39-s-theses",
              title: "master&#39;s theses",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/tfm/";
              },
            },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "exploring operations research",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-sources",
          title: "sources",
          description: "",
          section: "Navigation menu",
          handler: () => {
            window.location.href = "/sources/";
          },
        },{id: "post-discovering-the-mirror-of-linear-optimization-the-fascinating-world-of-duality",
        
          title: "Discovering the mirror of linear optimization, the fascinating world of duality",
        
        description: "A journey through the theory of duality in linear optimization.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/duality/";
          
        },
      },{id: "post-convergence-degeneracy-and-the-quot-dark-side-quot-of-the-simplex",
        
          title: "Convergence, Degeneracy, and the &quot;Dark Side&quot; of the Simplex",
        
        description: "Analysis of Simplex convergence with examples of cycles and full vertex traversals.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/simplexconvergence/";
          
        },
      },{id: "post-how-to-recognize-the-different-types-of-solutions-in-linear-optimization-using-the-simplex-algorithm",
        
          title: "How to recognize the different types of solutions in linear optimization using the...",
        
        description: "Learn how to identify the different types of solutions in linear optimization problems with examples",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/simplexexamples/";
          
        },
      },{id: "post-starting-the-simplex-method-how-to-begin-when-no-obvious-basic-solution-exists",
        
          title: "Starting the Simplex Method, how to begin when no obvious basic solution exists...",
        
        description: "How to construct an initial feasible basis in the Simplex method using the Big-M penalty approach and the Two-Phase method",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/initialization/";
          
        },
      },{id: "post-the-simplex-algorithm-the-engine-of-mathematical-optimization",
        
          title: "The Simplex Algorithm, the engine of mathematical optimization",
        
        description: "The classic method that turned optimization into an effective computational tool.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/simplex/";
          
        },
      },{id: "post-the-anatomy-of-a-linear-optimization-problem",
        
          title: "The anatomy of a linear optimization problem",
        
        description: "Geometric characterization of linear optimization problems, extreme points, extreme directions, and the representation theorem",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/theoreticalLO/";
          
        },
      },{id: "post-exploring-linear-optimization-through-graphical-methods",
        
          title: "Exploring linear optimization through graphical methods",
        
        description: "Discover how graphical methods provide intuition for linear optimization before moving on to algorithmic techniques like the Simplex.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/graphical/";
          
        },
      },{id: "post-linear-optimization-mathematics-for-better-decision-making",
        
          title: "Linear optimization, mathematics for better decision-making",
        
        description: "A journey through the origins of linear optimization, its basic concepts, and its key role in efficient decision-making",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/linearoptimization/";
          
        },
      },{id: "post-the-science-behind-decision-making-in-a-complex-world-operations-research",
        
          title: "The science behind decision-making in a complex world - operations research",
        
        description: "A journey through the history, scientific societies and impact of operations research",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/historyOR/";
          
        },
      },{id: "post-how-to-model-the-n-queens-problem-using-linear-programming",
        
          title: "How to model the n-queens problem using linear programming",
        
        description: "Modelling maximum non-attacking queens on a chessboard",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/queens/";
          
        },
      },{id: "post-sudoku-meets-linear-optimization",
        
          title: "Sudoku Meets Linear Optimization",
        
        description: "Modelling a sudoku",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/sudoku/";
          
        },
      },{id: "projects-aircraft-conflict-detection-and-resolution",
          title: 'aircraft conflict detection and resolution',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project-1/";
            },},{id: "projects-humanitarian-aid-distribution",
          title: 'humanitarian aid distribution',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project-2/";
            },},{id: "projects-design-of-electrification-programs-for-remote-areas",
          title: 'design of electrification programs for remote areas',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project-3/";
            },},{id: "projects-facilities-closure-or-management-change",
          title: 'facilities closure or management change',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project-4/";
            },},{id: "projects-cutting-in-the-steel-industry",
          title: 'cutting in the steel industry',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project-5/";
            },},{id: "projects-cutting-in-the-cardboard-industry",
          title: 'cutting in the cardboard industry',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project-6/";
            },},{id: "projects-medical-staff-planning-in-field-hospital-operations",
          title: 'medical staff planning in field hospital operations',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project-7/";
            },},{id: "projects-photovoltaic-energy-distribution-in-residential-communities",
          title: 'photovoltaic energy distribution in residential communities',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/project-8/";
            },},{
        id: 'social-dblp',
        title: 'DBLP',
        section: 'Socials',
        handler: () => {
          window.open("https://dblp.org/pid/76/9516.html", "_blank");
        },
      },{
        id: 'social-email',
        title: 'Send an email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%61%76%69%65%72.%6D%61%72%74%69%6E.%63%61%6D%70%6F@%6D%61%74.%75%63%6D.%65%73", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/fjmartincampo", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/f-javier-martín-campo-b4a1583b5", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-7584-4062", "_blank");
        },
      },{
        id: 'social-publons',
        title: 'Publons',
        section: 'Socials',
        handler: () => {
          window.open("https://publons.com/a/D-8609-2012/", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/F-Javier-Martin-Campo/", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=HZnCRN0AAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=36350160600", "_blank");
        },
      },{
        id: 'social-semanticscholar',
        title: 'Semantic Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://www.semanticscholar.org/author/1401648468", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: 'Socials',
        handler: () => {
          window.open("https://blogs.mat.ucm.es/fjmartinc/en/", "_blank");
        },
      },{
          id: 'lang-spanish',
          title: 'spanish',
          section: 'Languages',
          handler: () => {
            window.location.href = "/spanish" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
