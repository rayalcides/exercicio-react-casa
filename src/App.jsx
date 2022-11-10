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
        <div className='stylle-titulo'>
         <Titulo/>
         <Subtitulo text="Fique a vontade para conhecer um pouco sobre minha historia."/>
        </div>
         <Descricao text="Essa pagina foi criada por mim, com o abjetivo de colocar em pratica oque eu aprendi na primeira aula de REACT, ministrada pela Simara Conceição. Então, decidi fazer uma pagina pra falar um pouco sobre meus hobbys, gostos, estilos e etc.., Espero que gostem! " />
      </header>
      <main>
        <div className="sobre-mim">
          <Sobre tipo="Profisão" infor="Trancista"/>
          <Sobre tipo="Hobby" infor="Capoerista"/>
          <Sobre tipo="Signo" infor="Sargitariana"/>
        </div>
        <div className='corpo-pag'>
          <Cards/>
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default App
