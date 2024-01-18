import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { JokePage } from './pages/JokePage';
import { PageNotFound } from './pages/PageNotFound';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/joke" element={<JokePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default App;
