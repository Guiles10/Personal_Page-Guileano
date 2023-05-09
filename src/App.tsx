import { Experiencia } from './components/Experiencias'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Inicio } from './components/Inicio'
import { Portifolio } from './components/Protifolio'
import { Sobre } from './components/Sobre'
import { Tecnologias } from './components/Tecnologias'
import { StyledGlobal } from './globalStyle'
import { useRef } from 'react'


function App() {

  const inicioRef = useRef(null);
  const sobreRef = useRef(null);
  const techRef= useRef(null);
  const expRef = useRef(null);
  const portifolioRef = useRef(null);

  const handleClick = (ref: any) => {
    window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
    });
  };

  return (
    <>
      <main>
        <StyledGlobal />
        <Header handleClick={handleClick} inicioRef={inicioRef} sobreRef={sobreRef} techRef={techRef} portifolioRef={portifolioRef} expRef={expRef}/>
        <Inicio inicioRef={inicioRef}/>
        <Sobre sobreRef={sobreRef}/>
        <Tecnologias techRef={techRef}/>
        <Experiencia techRef={expRef}/>
        <Portifolio portifolioRef={portifolioRef}/>
        <Footer />
      </main>
    </>
  )
}

export default App
