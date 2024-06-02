import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';
import SkillPage from './components/SkillsPage';
import EducationPage from './components/EducationPage';
import scaler from './assets/scaler.png';
import bits from './assets/bits.png';
import grizzly from './assets/grizzly.png';
import payment from './assets/payments.png';
import image_generator from './assets/image-generator.jpeg';
import music_store from './assets/music-store.jpeg';
import snake from './assets/snake.jpg';
import ProjectsPage from './components/ProjectsPage';


function MyComponent() {
  const my_description = `Hi there, I'm <strong>Harsh Kumar</strong>! 
  I am a computer science student pursuing bachelors from <strong>Scaler School of Technology</strong> along with <strong>BITS Pilani</strong>.
  Learning how to use tech to make things powerful and user friendly ! Diving deep into the world of <strong>Data Structures and Algorithm</strong> & learning different technologies like spring boot, react ,sql ,etc to make an impact with my solution. I have also been learning command line interface and shell scripting for seamless operations.
  My love for math isn't just theoretical - I've delved into Discrete Mathematics, Linear Algebra, and Probability & Statistics which will also help me in the field of Data Science and Analysis.
  Apart from the tech, I like to explore different things ,whether it be the field of marketing ,content creation or management . It's tough but also exciting at the same time to keep exploring which keeps me motivated in delving more and more.
  "<strong>Life is all about learning new things!</strong>"`;

  return <div dangerouslySetInnerHTML={{ __html: my_description }} />;
}

const my_details = [(
  <span>
    <strong>Name:</strong> Harsh Kumar
  </span>
),
(
  <span>
    <strong>Email:</strong> kumar3446harsh@gmail.com
  </span>
),
(
  <span>
    <strong>Phone:</strong> +91 9142840799
  </span>
),
(
  <span>
    <strong>Address:</strong> Koderma, Jharkhand (INDIA)
  </span>
)];

let skillsMapArray = [{skillName:"Java",color:"red",details:"I'm skilled in Java programming with 1 years of experience. I've worked on various projects, like Music Store Management System, Payment Link Generator ,Command Line Image Editor ,Product Service etc. I'm familiar with frameworks like Spring and Hibernate and creating RESTful web services."},
                  {skillName:"Python",color:"#3674A5",details:"I've learned data analysis with Python and completed 2-3 projects in this field. I've also created a Python-based SVD image compressor and a web scraper. These experiences have strengthened my Python skills and problem-solving abilities."},
                  {skillName:"Mysql",color:"#FEA500",details:"I've just started learning MySQL and practicing writing queries. I'm excited to understand how to manage databases better and use MySQL to work with data effectively."},
                  {skillName:"DSA",color:"#rgb(48,185,253)",details:"I've been learning lots about Data Structures and Algorithms (DSA). It's all about organizing and manipulating data efficiently. I've solved over 300 problems on Scaler, which has really helped me understand how to solve different kinds of puzzles and challenges. DSA is like the foundation of my tech skills, helping me solve problems step by step."},
                  {skillName:"HTML",color:"#000000",details:"I've been learning HTML, which stands for HyperText Markup Language. It's the backbone of web development, used to create the structure and content of web pages. I've grasped the basics, like creating headings, paragraphs, lists, and links. HTML allows me to build the foundation of a website and understand how content is structured on the web."},
                  {skillName:"CSS",color:"#F16529",details:"I've been diving into CSS, or Cascading Style Sheets, which is all about making websites look good. It lets me control the colors, fonts, layouts, and overall appearance of web pages. With CSS, I can give a website its unique style and design, making it visually appealing and user-friendly."},
                  {skillName:"Javascript",color:"#FDDE35",details:"I've created several projects using HTML, CSS, and JavaScript, including clones of popular websites, a personal portfolio, and even a classic game like Snake. These projects have helped me reinforce my understanding of web development fundamentals and showcase my creativity in building interactive and visually appealing websites."},
                  {skillName:"React",color:"#0279FD",details:"I've recently started learning React, a popular JavaScript library for building user interfaces. I've begun by creating my portfolio and exploring techniques to optimize websites for better performance. It's exciting to delve into React's component-based architecture and learn how to create dynamic, efficient web applications."},
                  {skillName:"Spring Boot",color:"#6DB33F",details:"In Spring Boot, I've built a variety of applications, including a payment link generator using a third-party API, a product service, and a music store management system. The music store system includes services for customer management, employee management, inventory tracking, and more. "}
                ];
let educationList = [
  {
    name: "Scaler School of Technology",
    course: "BSc & Msc in Computer Science",
    year: "2023-2027",
    image:scaler
  },
  {
    name: "BITS Pilani",
    course: "BSc in Computer Science",
    year: "2023-2026",
    image:bits
  },
  {
    name:"Grizzly Vidyalaya",
    course:"Intermediate",
    year:"2020-2022",
    image:grizzly
  },
];
let projects = [
  {
    name:"Music Store Management",
    link:"https://github.com/harsh-kumar-patwa/MusicStoreManagement",
    image:music_store
  },
  {
    name:"Snake Game",
    link:"https://harsh-kumar-patwa.github.io/snake-game/",
    image:snake
  },
  {
    name:"AI Image Generator",
    link:"https://harsh-kumar-patwa.github.io/ai-image-generator/",
    image:image_generator
  },
  {
    name:"Payment Service",
    link:"https://github.com/harsh-kumar-patwa/paymentService",
    image:payment
  }
];

function App() {
  return (
    <div className="App">
      <HomePage/>
      <AboutMe 
          
          MyDescription={MyComponent()} 
          
          AboutMeDetails={my_details}
      />
      <SkillPage skillsMap={skillsMapArray}/>
      <EducationPage educationList={educationList}/>
      <ProjectsPage projects={projects}/>

    </div>
  );
}

export default App;
