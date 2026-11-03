import './index.css'
import { GiSlicedBread } from 'react-icons/gi'
import { FaStar, FaTrophy } from 'react-icons/fa'

export default function Resumo({ totalAlimentos, pontos, missoes }) {
    return (
        <section className="resumo" aria-label="Resumo da conta">
            <div className="resumo-card">
                <span className="resumo-icon"><GiSlicedBread /></span>
                <div>
                    <strong>{totalAlimentos}</strong>
                    <small>Alimentos cadastrados</small>
                </div>
            </div>
            <div className="resumo-card">
                <span className="resumo-icon"><FaStar /></span>
                <div>
                    <strong>{pontos}</strong>
                    <small>Pontos de experiência</small>
                </div>
            </div>
            <div className="resumo-card">
                <span className="resumo-icon"><FaTrophy /></span>
                <div>
                    <strong>{missoes}</strong>
                    <small>Missões concluídas</small>
                </div>
            </div>
        </section>
    )
}