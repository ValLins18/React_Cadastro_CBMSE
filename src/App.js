import Container from './components/layout/Container';
import TrabalheConosco from './components/pages/TrabalheConosco';
import Candidatos from './components/pages/Candidatos';
import DadosPessoais from './components/pages/DadosPessoais';
import Experiencia from './components/pages/Experiencia';
import Perfil from './components/pages/Perfil';
import Resumo from './components/pages/Resumo';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
      <Router>
        <Container>
          <Routes>
            <Route path='/' element={<TrabalheConosco/>}/>
            <Route path='/candidatos' element={<Candidatos/>}/>
            <Route path='/dadospessoais' element={<DadosPessoais/>}/>
            <Route path='/experiencia' element={<Experiencia/>}/>
            <Route path='/perfil/:id' element={<Perfil/>}/>
            <Route path='/resumo' element={<Resumo/>}/>
          </Routes>
        </Container>  
      </Router>
  );
}

export default App;
