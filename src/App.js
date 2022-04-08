import './App.css';
import { useGlobalContext } from './context';
import { Home, SingleNote, Error } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/main.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/notes/:id' element={<SingleNote />}></Route>
        <Route path='*' element={<Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
