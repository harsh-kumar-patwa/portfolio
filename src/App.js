import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage';
import AboutMe from './components/AboutMe';

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

function App() {
  return (
    <div className="App">
      <HomePage/>
      <AboutMe 
          
          MyDescription={MyComponent()} 
          
          AboutMeDetails={my_details}/>
    </div>
  );
}

export default App;
