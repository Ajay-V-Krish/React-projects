
import './App.css';
import Accordion from './components/accordion';
import LoadMore from './components/load-more-button';
import RandomColor from './components/random-color';
import Starrating from './components/starrating';

function App() {
  return (
    <div className="App">
     <Accordion/>

     <RandomColor/> 

     <Starrating noOfStars={10}/> 

     <LoadMore/>
    </div>
  );
}

export default App;
