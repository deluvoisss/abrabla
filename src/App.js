import './App.css';
import Navbar from './js/Navbar.tsx';
import Hero from './js/Hero.tsx';
import Projects from './js/Projects.tsx';
function App() {
  return (
    <div className="App">
       <Navbar />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
