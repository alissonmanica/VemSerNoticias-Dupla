import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Health from './pages/health/Health';
import Politics from './pages/politics/Politics';
import Technology from './pages/technology/Technology';
import World from './pages/world/World';
import NotFound from './pages/notFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='*' element={<NotFound /> } />
        <Route path='/' element={<Home />} />
        <Route path='/health' element={<Health />} />
        <Route path='politics' element={<Politics /> } />
        <Route path='technology' element={<Technology /> } />
        <Router path='world' element={<World /> } />
      </BrowserRouter>

    </div>
  );
}

export default App;
