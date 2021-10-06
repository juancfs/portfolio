
import downArrow from "./icons/arrow-down-icon.svg";

import locationIcon from "../assets/icons/location-icon.svg";
import downloadIcon from "../assets/icons/download-icon.svg";

import restCountriesAPI from "../assets/projects/rest-countries-api.png";
import planets from "../assets/projects/planets.png";
import covidstats from "../assets/projects/covidstats.png";
import sunnyside from "../assets/projects/sunnyside.png";

import linkedin from "../assets/icons/linkedin-icon.svg";

import code from "../assets/icons/code-icon.svg";
import html from "../assets/icons/html-icon.svg";
import css from "../assets/icons/css-icon.svg";
import javascript from "../assets/icons/javascript-icon.svg";
import technologies from "../assets/icons/library-icon.svg";
import sass from "../assets/icons/sass-icon.svg";
import react from "../assets/icons/react-icon.svg";
import tailwind from "../assets/icons/tailwind-icon.svg";
import git from "../assets/icons/git-icon.svg";
import languages from "../assets/icons/language-icon.svg";
import venezuela from "../assets/icons/venezuela-icon.svg";
import usa from "../assets/icons/united-states-icon.svg";
import france from "../assets/icons/france-icon.svg";

import rocket from "../assets/icons/rocket-icon.svg";
import code2 from "../assets/icons/code2-icon.svg";

import airplane from "../assets/icons/paper-airplane-icon.svg";

import githubFooter from "../assets/icons/github-contact-icon.svg";
import chevronUp from "../assets/icons/chevron-up-icon.svg";

let content = {
  en: {
    header: {
      role: "Frontend Developer",
      sections: [
        {
          name: "Home",
          id: "home",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Skills",
          id: "skills",
        },
        {
          name: "Projects",
          id: "projects",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ],
      greeting: {
        first: "Hello world,",
        second: "I'm Juan Faracco",
      },
      downArrow: {
        href: "#about",
        imgSrc: downArrow,
        imgAlt: "Down arrow icon"
      }
    },
    about: {
      title: "About me",
      locationIcon: {
        imgSrc: locationIcon,
        imgAlt: "Location icon"
      },
      downloadIcon: {
        imgSrc: downloadIcon,
        imgAlt: "Download icon"
      },
      description:
        "I'm a Frontend Developer who is passionate about what he does and won't give up in the face of any challenge. Learning new things every day is one of my passions.",
      resume: "Resume",
      resumeName: "Resume of Juan Faracco"
    },
    skills: {
      title: "Skills",
      skillsContent: [
        {
          skills: [
            { name: "HTML5", imgSrc: html, imgAlt: "HTML5 icon" },
            { name: "CSS3", imgSrc: css, imgAlt: "CSS icon" },
            {
              name: "JavaScript",
              imgSrc: javascript,
              imgAlt: "JavaScript icon",
            },
          ],
          title: "Languages",
          imgSrc: code,
          imgAlt: "Terminal console icon",
        },
        {
          skills: [
            { name: "SCSS", imgSrc: sass, imgAlt: "Sass icon" },
            { name: "React", imgSrc: react, imgAlt: "React icon" },
            { name: "Tailwind", imgSrc: tailwind, imgAlt: "Tailwind icon" },
            { name: "Git", imgSrc: git, imgAlt: "Git icon" },
          ],
          title: "Technologies",
          imgSrc: technologies,
          imgAlt: "Books icon",
        },
        {
          skills: [
            {
              name: "Spanish",
              imgSrc: venezuela,
              imgAlt: "Venezuela's flag",
              level: "Native",
            },
            {
              name: "English",
              imgSrc: usa,
              imgAlt: "United States flag",
              level: "Advanced / Fluent",
            },
            {
              name: "French",
              imgSrc: france,
              imgAlt: "France's flag",
              level: "Beginner",
            },
          ],
          title: "Spoken languages",
          imgSrc: languages,
          imgAlt: "Languages icon",
        },
      ],
    },

    projects: {
      title: "Projects",
      madeWithTitle: "Made with:",
      descriptionTitle: "Description:",
      liveSiteTitle: "Live site",
      codeTitle: "View code",
      rocketIcon: {
        imgSrc: rocket,
        imgAlt: "Rocket icon"
      },
      codeIcon: {
        imgSrc: code2,
        imgAlt: "Code icon"
      },
      projectsContent: [
        {
          title: "Countries facts site",
          madeWith: "React.js, Sass (SCSS)",
          description: "Informative website that displays information about the countries of the world using the REST countries API made as a challenge taken from Frontend Mentor. The challenge consisted of building the website based on the designs provided by the platform.",
          siteLink: "https://rest-countries-api-juancfs.vercel.app/",
          codeLink: "https://github.com/juancfs/rest-countries-api",
          imgSrc: restCountriesAPI,
          imgAlt: "Countries facts project screenshot"
        },
        {
          title: "Planets facts site",
          madeWith: "HTML5, Tailwindcss, React.js",
          description: "Informative website about the planets of the Solar system made as a challenge taken from Frontend Mentor. The challenge consisted of laying out the website based on the designs provided by the platform.",
          siteLink: "https://juancfs.github.io/planets-fact-site/",
          codeLink: "https://github.com/juancfs/planets-fact-site",
          imgSrc: planets,
          imgAlt: "Planets facts site project screenshot"
        },
        {
          title: "Covidstats",
          madeWith: "HTML5, CSS3, JavaScript",
          description:
            "A web application that offers statistical information about the situation of the COVID-19 epidemic in several countries. It works as a searcher where the user enters a registered country's name and a table is displayed with the data.",
          siteLink: "https://covidstats01.netlify.app/",
          codeLink: "https://github.com/juancfs/covidstats",
          imgSrc: covidstats,
          imgAlt: "Covidstats project screenshot",
        },

        {
          title: "Sunnyside agency landing page",
          madeWith: "HTML5, CSS3, JavaScript",
          description:
            "Landing page made as a challenge taken from Frontend Mentor. The challenge consisted of laying out the landing page based on the designs provided by the platform.",
          siteLink: "https://juancfs.github.io/sunnyside-agency-landing-page/",
          codeLink: "https://github.com/juancfs/sunnyside-agency-landing-page",
          imgSrc: sunnyside,
          imgAlt: "Sunnyside agency landing page project screenshot",
        },
      ],
    },

    contact: {
      title: "Contact",
      workTogether: "Let's make incredible things together!",
      name: "Name:",
      email: "Email:",
      message: "Message:",
      button: "Send message",
      airplaneIcon: {
        imgSrc: airplane,
        imgAlt: "Airplane paper icon"
      }
    },
    footer: {
      role: "Frontend Developer",
      socialIcons: [
        {
          id: "Github",
          href: "https://github.com/juancfs",
          imgSrc: githubFooter,
          imgAlt: "Github icon",
        },
        {
          id: "Linkedin",
          href: "https://www.linkedin.com/in/jcfs",
          imgSrc: linkedin,
          imgAlt: "Linkedin icon",
        },
      ],
      chevronIcon: {
        href: "#home",
        imgSrc: chevronUp,
        imgAlt: "Chevron up icon"
      }
    },
  },
  es: {
    header: {
      role: "Desarrollo Frontend",
      sections: [
        {
          name: "Inicio",
          id: "home",
        },
        {
          name: "Sobre",
          id: "about",
        },
        {
          name: "Habilidades",
          id: "skills",
        },
        {
          name: "Proyectos",
          id: "projects",
        },
        {
          name: "Contacto",
          id: "contact",
        },
      ],
      greeting: {
        first: "Hola mundo,",
        second: "soy Juan Faracco",
      },
      downArrow: {
        href: "#about",
        imgSrc: downArrow,
        imgAlt: "Ícono de flecha hacia abajo"
      }
    },
    about: {
      title: "Sobre mí",
      locationIcon: {
        imgSrc: locationIcon,
        imgAlt: "Ícono de localización"
      },
      downloadIcon: {
        imgSrc: downloadIcon,
        imgAlt: "Ícono de descargas"
      },
      description:
        "Soy un desarrollador de Frontend que es apasionado por lo que hace y no se rendirá ante cualquier desafío. Aprender nuevas cosas cada día es una de mis pasiones.",
      resume: "Currículum",
      resumeName: "Currículum de Juan Faracco"
    },
    skills: {
        title: "Habilidades",
        skillsContent: [
          {
            skills: [
              { name: "HTML5", imgSrc: html, imgAlt: "Ícono de HTML5" },
              { name: "CSS3", imgSrc: css, imgAlt: "Ícono de CSS3" },
              {
                name: "JavaScript",
                imgSrc: javascript,
                imgAlt: "Ícono de JavaScript",
              },
            ],
            title: "Lenguajes",
            imgSrc: code,
            imgAlt: "Ícono de Terminal",
          },
          {
            skills: [
              { name: "SCSS", imgSrc: sass, imgAlt: "Ícono de Sass" },
              { name: "React", imgSrc: react, imgAlt: "Ícono de React" },
              { name: "Tailwind", imgSrc: tailwind, imgAlt: "Ícono de Tailwind" },
              { name: "Git", imgSrc: git, imgAlt: "Ícono de Tailwind" },
            ],
            title: "Tecnologías",
            imgSrc: technologies,
            imgAlt: "Ícono de libros",
          },
          {
            skills: [
              {
                name: "Español",
                imgSrc: venezuela,
                imgAlt: "Bandera de Venezuela",
                level: "Nativo",
              },
              {
                name: "Inglés",
                imgSrc: usa,
                imgAlt: "Bandera de Estados Unidos",
                level: "Avanzado / Fluído",
              },
              {
                name: "Francés",
                imgSrc: france,
                imgAlt: "Bandera de Francia",
                level: "Principiante",
              },
            ],
            title: "Idiomas",
            imgSrc: languages,
            imgAlt: "Ícono de Idiomas",
          },
        ],
      },
    projects: {
      title: "Proyectos",
      madeWithTitle: "Hecho con:",
      descriptionTitle: "Descripción:",
      liveSiteTitle: "Sitio en vivo",
      codeTitle: "Ver código",
      rocketIcon: {
        imgSrc: rocket,
        imgAlt: "Ícono de cohete"
      },
      codeIcon: {
        imgSrc: code2,
        imgAlt: "Ícono de código"
      },
      projectsContent: [
        {
          title: "Sitio de información sobre países",
          madeWith: "React.js, Sass (SCSS)",
          description: "Sitio web informativo que muestra información sobre los países del mundo usando la REST countries API tomado como un desafío de Frontend Mentor. El desafío consistió en maquetar el sitio web basándose en el diseño proveído por la plataforma.",
          siteLink: "https://rest-countries-api-juancfs.vercel.app/",
          codeLink: "https://github.com/juancfs/rest-countries-api",
          imgSrc: restCountriesAPI,
          imgAlt: "Captura de pantalla del proyecto sitio de información sobre países"
        },
        {
          title: "Sitio de información sobre planetas",
          madeWith: "Tailwindcss, React.js",
          description: "Sitio web informativo sobre los planetas del sistema solar hecho como un desafío tomado de Frontend Mentor. El desafío consistió en maquetar el sitio web basándose en el diseño proveído por la plataforma.",
          siteLink: "https://juancfs.github.io/planets-fact-site/",
          codeLink: "https://github.com/juancfs/planets-fact-site",
          imgSrc: planets,
          imgAlt: "Captura de pantalla del proyecto sitio de información sobre planetas"
        },
        {
          title: "Covidstats",
          madeWith: "HTML5, CSS3, JavaScript",
          description:
            "Una aplicación web que ofrece información estadística sobre la situación de la epidemia del COVID-19 en varios países. Funciona como un buscador donde el usuario ingresa el nombre de un país registrado y una tabla es mostrada con los datos.",
          siteLink: "https://covidstats01.netlify.app/",
          codeLink: "https://github.com/juancfs/covidstats",
          imgSrc: covidstats,
          imgAlt: "Captura de pantalla del proyecto Covidstats",
        },

        {
          title: "Página de aterrizaje Sunnyside agency",
          madeWith: "HTML5, CSS3, JavaScript",
          description:
            "Página de aterrizaje hecha como un desafío tomado de Frontend Mentor. El desafío consistió en maquetar la página de aterrizaje basándose en el diseño proveído por la plataforma.",
          siteLink: "https://juancfs.github.io/sunnyside-agency-landing-page/",
          codeLink: "https://github.com/juancfs/sunnyside-agency-landing-page",
          imgSrc: sunnyside,
          imgAlt: "Captura de pantalla del proyecto página de aterrizaje Sunnyside agency",
        },
      ],
    },
    contact: {
      title: "Contacto",
      workTogether: "¡Hagamos cosas increíbles juntos!",
      name: "Nombre:",
      email: "Correo:",
      message: "Mensaje:",
      button: "Enviar mensaje",
      airplaneIcon: {
        imgSrc: airplane,
        imgAlt: "Ícono de avión de papel"
      }
    },
    footer: {
      role: "Desarrollo Frontend",
      socialIcons: [
        {
          id: "Github",
          href: "https://github.com/juancfs",
          imgSrc: githubFooter,
          imgAlt: "Ícono de Github",
        },
        {
          id: "Linkedin",
          href: "https://www.linkedin.com/in/jcfs",
          imgSrc: linkedin,
          imgAlt: "Ícono de Linkedin",
        },
      ],
      chevronIcon: {
        href: "#home",
        imgSrc: chevronUp,
        imgAlt: "Ícono de flecha hacia arriba"
      }
    },
  },
};


export default content;