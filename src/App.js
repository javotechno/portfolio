import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Index from './components/Index/Index';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = '/' element = {<Index/>}/>
      </Routes>
    </div>
  );
}

export default App;
