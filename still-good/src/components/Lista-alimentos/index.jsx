import Foodcard from '../Foodcard/index.jsx'
import './index.css'
import { GiSlicedBread, GiIceCube } from "react-icons/gi";

const alimentos = [
    {
        nome: "Leite em pó",
        local: "Despensa",
        validade: "15/03/27",
        icone: <GiSlicedBread size={30} color="black" />
    },
    {
        nome: "Café",
        local: "Despensa",
        validade: "22/08/26",
        icone: <GiSlicedBread size={30} color="black" />
    },
    {
        nome: "Queijo",
        local: "Geladeira",
        validade: "05/09/26",
        icone: <GiIceCube size={30} color="black" />
    },
    {
        nome: "Macarrão",
        local: "Despensa",
        validade: "10/12/27",
        icone: <GiSlicedBread size={30} color="black" />
    },
    {
        nome: "Bebida láctea",
        local: "Geladeira",
        validade: "30/01/27",
        icone: <GiIceCube size={30} color="black" />
    },
    {
        nome: "Farofa",
        local: "Despensa",
        validade: "18/06/28",
        icone: <GiSlicedBread size={30} color="black" />
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