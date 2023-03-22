import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Inicio } from './components/Inicio'
import { Portifolio } from './components/Protifolio'
import { Sobre } from './components/Sobre'
import { Tecnologias } from './components/Tecnologias'
import { StyledGlobal } from './globalStyle'


function App() {
  return (
    <>
      <main>
        <StyledGlobal />
        <Header />
        <Inicio />
        <Sobre />
        <Tecnologias />
        <Portifolio />
        <Footer />
      </main>
    </>
  )
}

export default App
