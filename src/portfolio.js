/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Fabien Dariel",
  title: "Salut à tous, je suis Fabien",
  subTitle: emoji(
    "Un développeur fullstack passioné et passionnant 🚀 avec une forte expérience sur la conception web avec PHP / JavaScript / Reactjs et d'autres super librairies et frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1THWzOus8s637-FulvtNK0Dh2CYX0qbEf/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/fabiendariel",
  linkedin: "https://www.linkedin.com/in/fabien-dariel-5915903b/",
  gmail: "fabien.dariel@gmail.com",
  gitlab: "https://gitlab.com/fabiendariel",
  facebook: "https://www.facebook.com/fabien.dariel.7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ce que je fais",
  subTitle: "DÉVELOPPEUR FULLSTACK CURIEUX ET PASSIONNÉ QUI SOUHAITE EXPLORER LE MAXIMUM DE TECHNOLGIES WEB MODERNES",
  skills: [
    emoji(
      "⚡ Concevoir et maintenir des logiciels complexes et professionnels"
    ),
    emoji("⚡ Interagir avec des applications tierces (API)"),
    emoji(
      "⚡ Developper des applications web responsive, modern et optimisées pour la sécurité."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [    
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "symfony",
      fontAwesomeClassname: "fab fa-symfony"
    },
    {
      skillName: "laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "drupal",
      fontAwesomeClassname: "fab fa-drupal"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fab fa-wordpress"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Université de Poitiers (France)",
      logo: require("./assets/images/universite-poitiers.png"),
      subHeader: "Brevet de technicien supérieur (DEC)",
      duration: "Septembre 2005 - Juin 2007",
      desc: "Informatique de gestion",
      descBullets: [
        "Option Développeur d'application"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Base de données",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend/Design",
      progressPercentage: "60%"
    },
    {
      Stack: "Conception/Gestion de projets",
      progressPercentage: "50%"
    },
    {
      Stack: "IT",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Développeur Fullstack",
      company: "Gestion Juste Pour Rire",
      companylogo: require("./assets/images/juste-pour-rire.png"),
      date: "Mai 2023 – June 2024",
      desc: "Drupal, Wordpress, PHP, CSS, JS vanilla, AWS, GCP, API Google / Pixel, Symfony",
      descBullets: [
        "Collaborer pour définir et planifier la transition entre l’outil logiciel en place vers une nouvelle version utilisant Symfony/JS et un CMS d’intégration de contenus adapté à l’usage par des non-initiés à l’intégration web",
        "Évaluer la faisabilité d’une transition en termes d’hébergement infonuagique entre AWS et Google Cloud Platform",
        "Participer à la mise en place de contenus personnalisés sur les sites web du groupe pour la mise en avant d’événements et la promotion des festivals au fil de l’année en respectant des contraintes d’adaptabilité et de navigabilité multi-supports",
        "Concevoir, développer et maintenir les sites web, en assurant un haut niveau de qualité et de performance",
        "Gérer le suivi et la maintenance du catalogue des sous-domaines du groupe et de leur hébergement"
      ]
    },
    {
      role: "Développeur web",
      company: "Webhelp Medica",
      companylogo: require("./assets/images/webhelp-medica.png"),
      date: "July 2012 – April 2023",
      desc: "Symfony 1.4 et 3 avec en Backend Apache, PHP5/7 et MSSQL et en Frontend JS/JQuery/Bootstrap, HTML5/CSS3/Twig",
      descBullets: [
        "Développer des applications internes pour la gestion de prises et suivi de commandes au sein d’un call-center",
        "Maintenir des applicatifs en production et améliorer leurs fonctionnalités Frontend et Backend",
        "Concevoir des plateformes web (sites institutionnels, extranet sécurisés et programme de suivi médicalisés complet) pour le compte de clients de la compagnie"
      ]
    },
    {
      role: "Ingénieur développement logiciel",
      company: "Alveos",
      companylogo: require("./assets/images/alveos.png"),
      date: "July 2010 – March 2012",
      desc: "Symfony 1, Drupal, JS et HTML/CSS",
      descBullets: [
        "Analyse fonctionnelle détaillée des besoins utilisateurs, étude de faisabilité technologique et rédaction du cahier des charges.",
        "Codage avec les langages de programmation HTML, CSS, JavaScript, PHP sous un CMS Drupal.",
        "Contrôle du bon fonctionnement du site web et de la qualité de navigation."
      ]
    },
    {
      role: "Analyste programmeur Web",
      company: "Arobases",
      companylogo: require("./assets/images/arobases.png"),
      date: "Januaray 2008 – July 2010",
      desc: "PHP4, JS et HTML/CSS",
      descBullets: [
        "Développer des plateformes e-commerce basé sur architecture PHP4 et framework MVC propriétaire",
        "Maintenir des modules de gestion backend.",
        "Mettre en place plusieurs boutiques clientes (Frontend et Backend spécifiques).",
        "Monter en compétences sur PHP4, JS et Ajax (dont les bibliothèques mootools, thickbox, jquery), XML, XHTML"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Formations et Certifications 🏆 "),
  subtitle:
    "Formations, Certifications et autres choses cool que j'ai pu réaliser !",

  achievementsCards: [
    {
      title: "ReactJs",
      subtitle:
        "ReactJs Introduction",
      image: require("./assets/images/orsys.png"),
      imageAlt: "Orsys Formations",
      footerLink: [
        {
          name: "Training",
          url: "https://www.orsys-training.fr/fr/formation/TJS"
        }
      ]
    },
    {
      title: "Maîtrise de Symfony 4",
      subtitle:
        "Approfondir la maîtrise du développement avec le framework Symfony 4.",
      image: require("./assets/images/sensio_labs.png"),
      imageAlt: "Sensio Labs",
      footerLink: [
        {
          name: "Training",
          url: "https://training.sensiolabs.com/"
        }
      ]
    },

    {
      title: "Javascript Orientée Objet",
      subtitle:
        "JavaScript, maîtriser la Programmation Orientée Objet",
      image: require("./assets/images/orsys.png"),
      imageAlt: "Orsys Formations",
      footerLink: [
        {
          name: "Training",
          url: "https://www.orsys.fr/formation/formation_javascript_maitriser_programmation_orientee_objet.html"
        }
      ]
    },
    {
      title: "Maîtrise de Symfony 1.4",
      subtitle:
        "Approfondir la maîtrise du développement avec le framework Symfony 1.4.",
      image: require("./assets/images/sensio_labs.png"),
      imageAlt: "Sensio Labs",
      footerLink: [
        {
          name: "Training",
          url: "https://training.sensiolabs.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "CV",
  subtitle: "N'hésites pas à télécharger mon CV",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactes-moi ☎️"),
  subtitle:
    "Discutons ensemble d'un projet ou simplement souhaites-tu discuter ? Mon courriel est ouvert à tous.",
  number: "+1-(438) 528-3971",
  email_address: "fabien.dariel@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
