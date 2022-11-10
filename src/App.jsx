import './App.css'
import Titulo from './components/Titulo'
import Subtitulo from './components/Subtitulo'
import Sobre from './components/Sobre'
import Foto from './components/Foto'
import Descricao from './components/descricao'
import Cards from './components/Cards'
import Footer from './components/footer'

function App() {
  
  return (
    <div className="App">
      <header>
         <Titulo/>
         <Subtitulo/>
         <Descricao/>
      </header>
      <main>
         <Sobre tipo="Profisão" infor="Trancista"/>
         <Sobre tipo="Rob" infor="Capoerista"/>
         <Sobre tipo="Signo" infor="Sargitariana"/>
         <Cards/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
