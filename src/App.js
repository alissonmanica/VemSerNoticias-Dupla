import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Health from './pages/health/Health';
import Politics from './pages/politics/Politics';
import Technology from './pages/technology/Technology';
import World from './pages/world/World';
import NotFound from './pages/notFound/NotFound';
import GetProvider from './context/GetContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GetProvider>
            <Routes>
              <Route path='*' element={<NotFound /> } />
              <Route path='/' element={<Home />} />
              <Route path='/health' element={<Health />} />
              <Route path='politics' element={<Politics /> } />
              <Route path='technology' element={<Technology /> } />
              <Route path='world' element={<World /> } />
            </Routes>
        </GetProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
