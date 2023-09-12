import DigaMeuNome from "./DigaMeuNome"
import Idade from "./Idade"
import Profissao from "./Profissão"

function DadosPessoais() {
    return (
        <div>
            <DigaMeuNome nome="Camila Boges de Goes" />
            <Idade idade="16" />
            <Profissao profissao="Professora de Inglês" />
        </div>
    )
}

export default DadosPessoais