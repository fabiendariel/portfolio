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
  title: "greetings_title",
  subTitle: "greetings_subtitle",
  resumeLink: "resumeLink", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/fabiendariel",
  linkedin: "https://www.linkedin.com/in/fabien-dariel-5915903b/",
  gmail: "fabien.dariel@gmail.com",
  //gitlab: "https://gitlab.com/fabiendariel",
  facebook: "https://www.facebook.com/fabien.dariel.7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "skillsSection_title",
  subTitle: "skillsSection_subTitle",
  skills: ["skillsSection_skills1","skillsSection_skills2","skillsSection_skills3"],

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
      schoolName: "schoolName",
      logo: require("./assets/images/universite-poitiers.png"),
      subHeader: "subHeader",
      duration: "duration",
      desc: "desc",
      descBullets: [
        "descBullets1"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "experienceStack1", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "experienceStack2",
      progressPercentage: "70%"
    },
    {
      Stack: "experienceStack3",
      progressPercentage: "60%"
    },
    {
      Stack: "experienceStack4",
      progressPercentage: "50%"
    },
    {
      Stack: "experienceStack5",
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
      role: "experiencerole1",
      company: "experiencecompany1",
      companylogo: require("./assets/images/juste-pour-rire.png"),
      date: "experiencedate1",
      desc: "experiencedesc1",
      descBullets: [
        "experience1descBullets1",
        "experience1descBullets2",
        "experience1descBullets3",
        "experience1descBullets4",
        "experience1descBullets5"
      ]
    },
    {
      role: "experiencerole2",
      company: "experiencecompany2",
      companylogo: require("./assets/images/webhelp-medica.png"),
      date: "experiencedate2",
      desc: "experiencedesc2",
      descBullets: [
        "experience2descBullets1",
        "experience2descBullets2",
        "experience2descBullets3"
      ]
    },
    {
      role: "experiencerole3",
      company: "experiencecompany3",
      companylogo: require("./assets/images/alveos.png"),
      date: "experiencedate3",
      desc: "experiencedesc3",
      descBullets: [
        "experience3descBullets1",
        "experience3descBullets2",
        "experience3descBullets3"
      ]
    },
    {
      role: "experiencerole4",
      company: "experiencecompany4",
      companylogo: require("./assets/images/arobases.png"),
      date: "experiencedate4",
      desc: "experiencedesc4",
      descBullets: [
        "experience4descBullets1",
        "experience4descBullets2",
        "experience4descBullets3",
        "experience4descBullets4"
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
  title: "bigProjectstitle",
  subtitle: "bigProjectssubtitle",
  projects: [
    {
      image: require("./assets/images/drupal.webp"),
      projectName: "Demo Drupal 10",
      projectDesc: "bigProjectsprojectDesc1",
      footerLink: [
        {
          name: "bigProjectsprojectLink",
          url: "https://drupal.fabiendariel.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/laravel.webp"),
      projectName: "MyRental Agency",
      projectDesc: "bigProjectsprojectDesc2",
      footerLink: [
        {
          name: "bigProjectsprojectLink",
          url: "https://laravel.fabiendariel.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "achievementSectiontitle",
  subtitle:
    "achievementSectionsubtitle",

  achievementsCards: [
    {
      title: "achievementsCardstitle1",
      subtitle:
        "achievementsCardssubtitle1",
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
      title: "achievementsCardstitle2",
      subtitle:
        "achievementsCardssubtitle2",
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
      title: "achievementsCardstitle3",
      subtitle:
        "achievementsCardssubtitle3",
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
      title: "achievementsCardstitle4",
      subtitle:
        "achievementsCardssubtitle4",
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

const contactInfo = {
  title: "contactInfotitle",
  subtitle:
    "contactInfosubtitle",
  number: "+1 (438) 528-3971",
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
  isHireable
};
