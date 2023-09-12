import "./style.css"
import OlaMundo from "./components/OlaMundo";
import Frases from "./components/Frases";
import logoNike from "./img/logoNike.png"
import mercadoLivre from "./img/mercado-livre.jpg"
import DadosPessoais from "./components/DadosPessoais";

function App() {
  return (
    <div className="body">
      <div className="header">
        <nav className="content-header">
          <mercadoLivre />
          <ul>
            <li>
              <a href="https://www.youtube.com/" target="_blank">Ir para o canal do Youtube</a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="main">
        <OlaMundo />
        <Frases />
        <Frases />
        <Frases />
        <div>
          <h1>Diga meu nome: </h1>
          <DadosPessoais />
        </div>
      </div>
    </div>
  );
}

export default App;
