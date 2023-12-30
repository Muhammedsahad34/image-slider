import './App.css';
import { Parallax } from 'react-parallax';
import city from './Assets/city.jpg';
import mountain from './Assets/mountain.jpg';
import sunset from './Assets/sunset.jpg';
import butterfly from './Assets/butterfly.jpg';

function App() {
  return (
    <div className="App">
        <Parallax strength={500} bgImage={city} className='content'>
          
        </Parallax>
        <Parallax strength={200} blur={{min:-15,max:15}} bgImage={mountain} className='content '>
          
        </Parallax>
        <Parallax strength={700} bgImage={sunset} className='content '>
          
        </Parallax>
        <Parallax strength={-100} bgImage={butterfly} className='content '>
          
        </Parallax>
        <Parallax strength={500} bgImage={city} className='content'>
          
        </Parallax>
        
    </div>
  );
}

export default App;
