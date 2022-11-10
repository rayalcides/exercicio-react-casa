import Subtitulo from "./Subtitulo";
import Descricao from "./Descricao";
import Foto from "./Foto";

function Cards() {
    return(
       <section className="container">
          <div className="card">
             <Subtitulo/>
             <Descricao/>
             <Foto/>
          </div>
          <div className="card">
             <Subtitulo/>
             <Descricao/>
             <Foto/>
          </div>
          <div className="card">
             <Subtitulo/>
             <Descricao/>
             <Foto/>
          </div>
       </section>
    )
}

export default Cards