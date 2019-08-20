import React from 'react';
import './styles.css';

import Ludoviajante from "../../assets/Ludoviajante.png";
import Estrelas from "../../assets/Estrelas.png";
import Esquilo from "../../assets/Esquilo olho.png";
import Castelo from "../../assets/Castelo.png";
import Video1 from "../../assets/Video1.png";
import Video2 from "../../assets/Video2.png";
import Video3 from "../../assets/Video3.png";
import Video4 from "../../assets/Video4.png";
import Video5 from "../../assets/Video5.png";
import Determination from "../../assets/Determination.png";

class Main extends React.Component {
  state = {
    loading: true
  };

  componentDidMount() {
    demoAsyncCall().then(() => this.setState({ loading: false }));
  }
  
  render () {
    const { loading } = this.state;
    
    if(loading) {
      return (
        <>
          <div className = "loadscreen">
            <img className = "imgLoad" src = {Determination}/>
          </div>
        </>
      )
    }
    
    return (
      <>
        <div>
          <img className = "LogoLudo" src = {Ludoviajante}/>
        </div>  

        <div className = "texto1">Que tal uma caminhada?</div>
        
        <img className = "castelo" src = {Castelo}/>  

        <div className = "estrelas">
          <img className = "estrelas1" src = {Estrelas}/>
          <img className = "estrelas1" src = {Estrelas}/>
          <img className = "estrelas1" src = {Estrelas}/>
          <img className = "estrelas1" src = {Estrelas}/>
          <img className = "estrelas1" src = {Estrelas}/>
          <img className = "estrelas1" src = {Estrelas}/>
          <img className = "estrelas1" src = {Estrelas}/>
          <img className = "estrelas1" src = {Estrelas}/>
          <img className = "estrelas1" src = {Estrelas}/>
          <img className = "estrelas1" src = {Estrelas}/>
          <img className = "estrelas1" src = {Estrelas}/>
        </div>

        <div className = "chao">
          <div className = "chao1"/>
          <div className = "chao2"/>
          <div className = "chao3"/>
          <div className = "chao4"/>
          <div className = "chao5"/>
        </div>

        <div >
          
        </div>
        <img className = "esquilo" src = {Esquilo}/>  
        <div className = "rodape">

        </div>

        <div className = "texto2">
          <div className = "margemTexto">Prazer, meu nome é Thiago, mas isso nem é tão importante. Eu decidi me</div>
          <div className = "margemTexto">dedicar à produção de vídeo-ensaios sobre ciência, existencialismo</div>
          <div className = "margemTexto">e tudo mais o que é digno (acho que essa é a parte importante).</div>
          <div className = "videos">
            <a href = {"https://www.youtube.com/watch?v=4l5RTGRxflY"} className = "centralizar">
              <img className = "video" src = {Video1}/>
              <div className = "margem">Undertale: lições sobre </div>
              <div className = "margem">humanidade (sem spoilers)</div>
            </a>
            <a href = {"https://www.youtube.com/watch?v=odqOtLDhOzc&t=252s"} className = "centralizar">
              <img className = "video" src = {Video2}/>
              <div>Qualia: por que é difícil </div>
              <div>explicar o que você sente?</div>
            </a>
            <a href = {"https://www.youtube.com/watch?v=MU_2ohBjdBg"} className = "centralizar">
              <img className = "video" src = {Video3}/>
              <div>Turma da Mônica: </div>
              <div>Histólias Univelsais</div>
            </a>
          </div>
        </div>
        
        <div className = "texto3">
        <div className = "titulo">Vídeos com amiguinhos</div>
          <div className = "videos">
            <a href = {"https://www.youtube.com/watch?v=M2Ow5uDh05w&t=117s"} className = "centralizar">
              <img className = "video" src = {Video4}/>
              <div className = "margem">A Estética de Shadow of the </div>
              <div className = "margem">Colossus e Okami </div>
              <div className = "margem">| Vídeo por Ludoviajante |</div>
            </a>
            <a href = {"https://www.youtube.com/watch?v=kHpdzVVldew"} className = "centralizar">
              <img className = "video" src = {Video5}/>
              <div className = "margem">Quem matou a sua DETERMINAÇÃO? </div>
              <div className = "margem">| Ludoviajante e Meteoro |</div>
            </a>
          </div>
        </div>

        <div className = "texto4">
          <div className = "margemTexto">Tenho uma equipe maravilhosa que torna meu trabalho muito mais fácil, ela é</div>
          <div className = "margemTexto">composta por mim, meus amigos imaginários e meus esquilos de estimação</div>
          <div className = "margemTexto">(também imaginários). Juntos, produzimos mini-homenagens sobre obras</div>
          <div className = "margemTexto">que marcaram a nossa vida. Yay! (งツ)ว</div>

          <a class = "apoiase" href = {"https://apoia.se/ludoviajante"}>Apoie meu trabalho</a>
        </div>
      </>
    );
  }
}

function demoAsyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 5000));
}

export default Main;
