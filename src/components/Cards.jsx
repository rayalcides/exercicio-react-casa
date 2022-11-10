import Subtitulo from "./Subtitulo";
import Descricao from "./Descricao";
import Foto from "./Foto";
import cabeloImg from '../assets/cabelo.jpg'
import florImg from '../assets/flor.jpg'
import poesiaImg from '../assets/poesia.jpg'

function Cards() {
    return(
       <section className="container">
          <div className="card">
             <Subtitulo text="Amo Cabelo!!!"/>
             <Descricao text="Antes de me jogar de cabeça na aria da tecnologia, trabalhava como trancista. Amo realçar a auto estima das minhas pretinhas atravéz do cabelo"/>
             <Foto caminho={cabeloImg}/>
          </div>
          <div className="card">
             <Subtitulo text="Girassol é minha flor preferida"/>
             <Descricao text=" 'Primeiro raio de sol', esse é o significado do nome RAIANI, tudo a ver com 'flor do sol', o significado do girassol."/>
             <Foto caminho={florImg}/>
          </div>
          <div className="card">
             <Subtitulo text="Faço poesias nas horas vagas."/>
             <Descricao text="Atualmente resido em sussuarana, bairo da cidade de Salvador. Aqui faço parte do coletivo Sarau da Onça, onde sou a fotografa e recito poesias. "/>
             <Foto caminho={poesiaImg}/>
          </div>
       </section>
    )
}

export default Cards