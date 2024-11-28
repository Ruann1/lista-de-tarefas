import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Folha from './components/Folha'
import Container from './components/Container'

function App() {
  return (
    

    <BrowserRouter>
    
      <Container>

        <Routes>
          <Route path="/"  element={<Folha />} />
        </Routes>

      </Container>
    
    
    </BrowserRouter>

  );
}

export default App;
