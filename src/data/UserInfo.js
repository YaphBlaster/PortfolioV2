import prequelMemes from "../images/PrequelMemes.png";
import wowVr from "../images/WowVr.jpg";
import CSHOF from "../images/CSHOF.jpg";
import patioBuilder from "../images/PatioBuilder.jpg";
import garageBuilder from "../images/GarageBuilder.jpg";
import portfolio from "../assets/avatar.svg";
import innovationLab from "../images/InnovationLab.png";
import wawanesa from "../images/WawanesaLogo.svg";
import hypemoji from "../images/HypeMoji.png";
import arHouse from "../images/ARHouse.png";
import peggoARImage from "../images/PeggoARImage.jpg";
import ReactCrashCourse from "../images/ReactLogo.png";
import resumeLink from "../resume.pdf";

const firstName = "Yaphet";
const lastName = "Abraha";
const summary = `I am a developer in Winnipeg, Manitoba. 
  I've worked with various technologies ranging from frontend applications using React and JavaScript to backend services using Serverless and AWS Lambda to virtual reality using Unity and Unreal Engine. 
  I love working on projects that challenge and help me grow to become a better programmer. 
  Thanks for visiting my portfolio and please check out my projects down below!`;
const emailAddress = "yaphet.abraha@gmail.com";
const linkedIn = "https://www.linkedin.com/in/yaphet-abraha";
const github = "https://github.com/YaphBlaster";
const skillsList = [
  "ReactJS",
  "Redux",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Sass",
  "Serverless",
  "AWS API Gateway",
  "AWS Lambda",
  "AWS S3",
  "C#",
  "Python",
  "Unity",
  "Unreal Engine",
  "Oculus",
  "HTC Vive"
];
const education = "B.Sc. Computer Science - University of Winnipeg";

const about = [
  {
    category: "contactInfo",
    info: [
      `<a class="placeholder" href="mailto:${emailAddress}">${emailAddress}</a>`,
      `<a class="placeholder" target="_blank" href="${linkedIn}">LinkedIn</a>`,
      `<a class="placeholder" target="_blank" href="${github}">GitHub</a>`
    ]
  },
  {
    category: "resume",
    info: `<a href="${resumeLink}" target="_blank">resume.pdf</a>`
  },
  {
    category: "education",
    info: education
  },
  {
    category: "skills",
    info: skillsList
  }
];

const links = about[0].info;

const projects = [
  {
    title: "React Crash Course",
    description:
      "Made with ReactJS, this application was initially made to onboard front end developers at Wawanesa that would work on React projects, but was later expanded to the public in order to give anyone a quick crash course for React. Developers can go through a small tutorial where the basics of React are explained with practical examples with code breakdowns and screenshots to easily follow along.",
    techStack: ["ReactJS", "JavaScript", "Styled Components"],
    year: 2019,
    image: ReactCrashCourse,
    github: ["https://github.com/YaphBlaster/react-crash-course"],
    gitText: ["View Github"],
    demo: "http://reactcrashcourse.surge.sh/",
    demoText: "View Website"
  },
  {
    title: "Wawanesa Augmented Reality House",
    description:
      "Built in Unity3D, this application is made to engage users, help with customer retention and act as a self promoting marketing tool. The proposed use case is that brokers can give a customer a business card with a custom logo on the back and a QR code on the front that would allow the user to download a companion application. When the user runs the application and points their camera at the business card, a virtual house will appear in augmented reality. Users can then explore the house by pinching to zoom, rotating the house with a slider, and physically moving their device to view the house from different angles. Users can also tap on glowing items, giving the user more information about the different insurance options Wawanesa offers. As the sole developer of this application, I was responsible for all the animation, game design, and logic.",
    techStack: ["Unity", "Mecanim", "C#", "Vuforia"],
    year: 2019,
    image: arHouse,
    github: [
      "https://s3-us-west-2.amazonaws.com/yaphet-uploaded-files/Wawanesa_AR_House.apk",
      peggoARImage
    ],
    gitText: ["Download Android APK", "AR Target"],
    demo: "https://www.youtube.com/watch?v=E9lGHy3dBO0",
    demoText: "Watch Demo Video"
  },
  {
    title: "Claims Fast Track",
    description:
      "Made in ReactJS, Claims Fast Track is an application made to streamline the claims process. Built for adjusters, this application allows them to add customers, claims, estimates and manage the status of a claim. Adjusters can also send a custom URL to a client where they can add images of a damaged asset at the their convenience to be later viewed by the adjuster.",
    techStack: [
      "ReactJS",
      "Redux",
      "Sass",
      "Javascript",
      "HTML5",
      "CSS3",
      "AWS"
    ],
    year: 2018,
    image: wawanesa
  },
  {
    title: "WowVR",
    description:
      "WOWVR is a fun and creative tool that allows you to design your dream patio with Outdoor living products in a fully 3D environment. With over 100+ high definition products to choose from including BBQs, Seating, Tables, Rugs, Accessories, Umbrellas and Gazebos, you can arrange them into ANY possible way that fits your Outdoor lifestyle. Want to see your design up-close? Using WOWVR’s built-in Virtual Reality engine, you can take a virtual walk through your patio designs in a fully immersive 3D environment. WOWVR also supports Google Cardboard viewers, so you can get a Fully Immersive VR Experience using your mobile device.",
    techStack: ["C#", "Unity", "GoogleVr", "Android", "IOS"],
    year: 2016,
    image: wowVr
  },
  {
    title: "Hypemoji",
    description:
      "With ReactJS running the frontend and Serverless + Amazon Web Services in the backend, this application traverses Snapchat's Bitmoji API to create custom Bitmoji comics with text input from the user. Users also can copy and paste their Bitmoji url into the application and be granted access to all Bitmoji and Friendmoji images to edit and share!",
    techStack: [
      "ReactJS",
      "Redux",
      "Javascript",
      "Styled Components",
      "Python",
      "Serverless",
      "AWS Lambda"
    ],
    github: [
      "https://github.com/YaphBlaster/hypemoji",
      "https://github.com/YaphBlaster/hypemoji_sls"
    ],
    gitText: ["Frontend Github", "Backend Github"],
    demo: "http://hypemoji.surge.sh/",
    demoText: "View Website",
    year: 2019,
    image: hypemoji
  },
  {
    title: "Portfolio",
    description:
      "This website! I wanted some more experience working with ReactJS, Sass, and web in general so I decided a portfolio page would be a great learning experience! Feel free to view the github repository linked below.",
    techStack: [
      "ReactJS",
      "Javascript",
      "Sass",
      "Enzyme",
      "Mocha",
      "Chai",
      "HTML5",
      "CSS3"
    ],
    github: ["https://github.com/YaphBlaster/Portfolio"],
    demo: null,
    year: 9999,
    image: portfolio
  },
  {
    title: "Wawanesa Innovation Dashboard",
    description:
      "Developed in ReactJS, this web application is used as a central hub for the prototypes made in Wawanesa's Innovation Lab. The Innovation Lab is heavily focused on creating insurance solutions using the most cutting edge technologies, however, these technologies are backend heavy so the Innovation Dashboard was created to give a face to all the proof of concepts at the lab. As the Lead Developer for this project, I mentored junior developers to learn ReactJS, established version control workflows and  set up the groundwork to expedite tedious tasks such as routing, component building, and hosting/deployment solutions.",
    techStack: [
      "ReactJS",
      "Redux",
      "Sass",
      "Javascript",
      "HTML5",
      "CSS3",
      "AWS"
    ],
    year: 2018,
    image: innovationLab
  },
  {
    title: "Prequel Memes",
    description:
      "A web application developed in React. This application was made to streamline the process of creating images for social media. The user can choose a character and will be given multiple screenshots that are pulled from a server where that character is featured. The user can then choose to add text and then finally create an image with their text implanted onto it.",
    techStack: ["ReactJS", "Redux", "Sass", "Javascript", "HTML5", "CSS3"],
    github: ["https://github.com/YaphBlaster/pm3"],
    demo: "http://www.prequelmemes.com",
    demoText: "View Website",
    year: 2018,
    image: prequelMemes
  },
  {
    title: "Hall of Fame VR Invitation",
    description:
      "This app was created to invite members to the 2016 Canadian Sports Hall of Fame induction using Google Cardboard/VR. Upon putting a device in a vr headset, users find themselves in a full auditorium where they would be invited to the sports event via a video playing on a theatre screen",
    techStack: ["C#", "Unity", "GoogleVr"],
    year: 2016,
    image: CSHOF
  },
  {
    title: "Canada’s Dream Garage Builder",
    description:
      "Developed in Unity, this app allows a user to create their garage in a controlled first person experience and allows them to move products around. Users can then can explore their space by moving around using a touch screen, or by putting on an Oculus Rift to see their garage in Virtual Reality.",
    techStack: ["C#", "Unity", "Oculus"],
    year: 2015,
    image: garageBuilder
  },
  {
    title: "Canada’s Dream Patio Builder",
    description:
      "Developed in Unity, this application lets users create a patio through a top down builder on a touch screen television. Users can then can explore their space by moving around using the touch screen, or putting on an Oculus Rift to see it in Virtual Reality.",
    techStack: ["C#", "Unity", "Oculus"],
    year: 2016,
    image: patioBuilder
  }
];

const Data = {
  firstName,
  lastName,
  summary,
  about,
  projects,
  links,
  resumeLink
};

export default Data;
