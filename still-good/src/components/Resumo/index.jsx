import './index.css'
import { GiSlicedBread } from "react-icons/gi";
import { CiWarning } from "react-icons/ci";



export default function Resumo() {
    return (
        <section className="resumo">

            <div className="resumo-card">

                <span className="resumo-icon"><GiSlicedBread size={30} color="black" /></span>

                <div>
                    <strong>6 itens</strong>
                    <small>Cadastrados</small>
                </div>

            </div>


            <div className="resumo-card">

                <span className="resumo-icon"><CiWarning /></span>

                <div>
                    <strong>2 próximos</strong>
                    <small>Do vencimento</small>
                </div>

            </div>

        </section>
    )
}