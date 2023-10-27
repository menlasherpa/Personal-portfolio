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
  username: "Lakpa Sherpa",
  title: "Hi, I'm Lakpa",
  subTitle: emoji(
    "Highly skilled Full Stack Developer proficient at implementing systems using Java technologies with Spring and Hibernate frameworks."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/menlasherpa",
  linkedin: "https://www.linkedin.com/in/lakpadsherpa8/",
  gmail: "lakpa.d.sherpa8@gmail.com",
  medium: "https://medium.com/@menlasherpa",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "About Me",
  subTitle: "FULL STACK JAVA DEVELOPER",
  skills: [
    emoji(
      "🎯 Developed highly interactive Front end / User Interfaces for web applications"
    ),
    emoji(
      "🎯 Designed web applications using Microservices, Spring MVC, Restful and MySQL database"
    ),
    emoji(
      "🎯 Trained in project management and experienced in implementing development projects via PMI processes"
    ),
    emoji(
      "🎯 Strong knowledge of CI/CD, Object Oriented Principles, several Design Patterns and Web services"
    ),
    emoji(
      "🎯 Proficient in Cloud Computing particularly in AWS (EC2, Lambda, S3, RDS, CloudWatch, DynamoDB, CloudFront, RDS, API Gateway, Elastic Load Balancer)"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "SQL-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Maharishi International University",
      logo: require("./assets/images/miuLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "May 2021 - December 2024",
      desc: "",
      descBullets: [
        "Worked as a Graduate Student Assistant for Web Application Architecture course",
        "Key courses: Algorithms, Web Application Programming, Modern Programming Practices, Software Architecture, Fundamentals of Programming Practice, Web Application Architecture, Enterprise Architecture, Project Management, Cloud Computing"
      ]
    },
    {
      schoolName: "Tribhuvan University",
      logo: require("./assets/images/tuLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2014 - December 2018",
      desc: "",
      descBullets: ["Class Rank 1", "Microsoft Student Partner 2016"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "40%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Database (SQL)", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend (Java)",
      progressPercentage: "80%"
    },
    {
      Stack: "Spring (Boot, MVC)",
      progressPercentage: "70%"
    },
    {
      Stack: "Object Oriented Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "AWS",
      progressPercentage: "70%"
    },
    {
      Stack: "REST APIs",
      progressPercentage: "70%"
    },
    {
      Stack: "CI/CD",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Kozzaja Infotech",
      companylogo: require("./assets/images/kozzajaLogo.png"),
      date: "2019 – 2021",
      desc: "Technologies Used: Angular, HTML5, CSS3, JavaScript, AJAX, JSON, jQuery, Bootstrap, Java, Spring Suite, REST, CI/CD, Git, GitHub, MySQL, Hibernate, Maven, Apache, Agile, Jira, Windows 10."
    },
    {
      role: "Enterprise and Network Security Officer",
      company: "Thakral One",
      companylogo: require("./assets/images/thakralOneLogo.jpeg"),
      date: "2018 – 2019",
      desc: "Technologies Used: Traps System, PuTTY, VMware, Windows 7/8/10."
    },
    {
      role: "Full Stack Developer",
      company: "Webrobo",
      companylogo: require("./assets/images/webroboLogo.jpeg"),
      date: "2017 – 2018",
      desc: "Technologies Used: HTML5, CSS3, Bootstrap, JavaScript, React, Java, Spring Suite, REST, MySQL, Atom, Sublime, Slack, Trello, Windows 10, Git, GitHub, Photoshop, Apache Tomcat, XAMPP."
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
  title: "Academic Projects",
  subtitle: "FEW PROJECTS I HAVE WORKED ON",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Property Management Portal",
      projectDesc:
        "A Java project where house owners and customers can exchange information effectively and inexpensively, and provides a user-friendly interface, satisfying needs of consumers such as website realtor.com. ",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/sehabte/Full-Project"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Online Shopping Cart System",
      projectDesc:
        "Web-based Java project that enables vendors to upload products while customers can do seamless product browsing and purchasing with a secure payment system using Visa and Mastercard.",
      footerLink: [
        {
          name: "Visit Project",
          url: "https://github.com/menlasherpa/online-shopping-cart-system"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆"),
  subtitle: "",

  achievementsCards: [
    {
      title: "AWS Essential Training",
      subtitle: "",
      image: require("./assets/images/awsCert.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/8e6d614421f5d61ab0860741d27001116bbca1c072e4db7d8a0a738e612a862b"
        }
      ]
    },
    {
      title: "Jenkins Essential Training",
      subtitle: "",
      image: require("./assets/images/jenkinsCert.png"),
      imageAlt: "",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.linkedin.com/learning/certificates/1980fcaa6d5f1a1e2536e8eb6560099dc1fc5fcd4e0dd33a8e0a3176e43e8f8c"
        }
      ]
    },

    {
      title: "Web Development Bootamp",
      subtitle: "",
      image: require("./assets/images/udemyCert.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1lkLCBhgXEbxkgbZjyTVZb1FDLlJe8j2x/view"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://menlasherpa.medium.com/working-with-api-gateway-and-cognito-in-aws-38b3da120dbe",
      title: "Working with API Gateway and Cognito in AWS — As a Beginner",
      description:
        "Amazon API Gateway is a service for creating, publishing, maintaining, monitoring, and securing RESTful APIs."
    },
    {
      url: "https://medium.com/@menlasherpa/my-3-favourite-apps-for-note-writing-87412556481d",
      title: "My 3 Favorite Apps For Note Writing",
      description:
        "Writing notes is a must when you want to gather your thoughts and ideas in one place. It might turn useful when you want to record some important records too. So, having a nice and reliable note writing app is much needed."
    },
    {
      url: "https://menlasherpa.medium.com/working-with-api-gateway-and-cognito-in-aws-38b3da120dbe",
      title: "Working with API Gateway and Cognito in AWS",
      description:
        "Create a CRUD API for the Lambda function app in API Gateway."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  title: emoji("Contact Me ☎️"),
  subtitle: "Please Feel free to email me or visit me on other links below.",
  number: "980-680-3626",
  email_address: "lakpa.d.sherpa8@gmail.com"
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
