import Foodcard from '../Foodcard/index.jsx'
import './index.css'

const alimentos = [
    {
        nome: "Leite em pó",
        local: "Despensa",
        validade: "15/03/27",
        icone: "🥛"
    },
    {
        nome: "Café",
        local: "Despensa",
        validade: "22/08/26",
        icone: "☕"
    },
    {
        nome: "Queijo",
        local: "Geladeira",
        validade: "05/09/26",
        icone: "🧀"
    },
    {
        nome: "Macarrão",
        local: "Despensa",
        validade: "10/12/27",
        icone: "🍝"
    },
    {
        nome: "Bebida láctea",
        local: "Geladeira",
        validade: "30/01/27",
        icone: "🥛"
    },
    {
        nome: "Farofa",
        local: "Despensa",
        validade: "18/06/28",
        icone: "🥫"
    }
]

export default function Listaalimentos() {

    return (
        <section className="itens">

            <div className="section-header">
                <h2>Seus alimentos</h2>

                <button>
                    Ver todos
                </button>
            </div>


            <div className="item-list">

                {alimentos.map((alimento, index) => (

                    <Foodcard
                        key={index}
                        icone={alimento.icone}
                        nome={alimento.nome}
                        local={alimento.local}
                        validade={alimento.validade}
                    />

                ))}

            </div>

        </section>
    )
}