import './index.css'
import { GiSlicedBread } from 'react-icons/gi'
import { FaClock } from 'react-icons/fa'

export default function Resumo({ totalAlimentos, alimentosPertoDeVencer }) {
    return (
        <section className="resumo" aria-label="Resumo da conta">
            <div className="resumo-card resumo-card-alinhado">
                <span className="resumo-icon"><GiSlicedBread /></span>
                <div className="resumo-card-content">
                    <strong>{totalAlimentos}</strong>
                    <small>Alimentos cadastrados</small>
                </div>
            </div>
            <div className="resumo-card resumo-card-alinhado resumo-card-vencimento">
                <span className="resumo-icon"><FaClock /></span>
                <div className="resumo-card-content">
                    <strong>{alimentosPertoDeVencer.length}</strong>
                    <small>Alimentos perto de vencer</small>
                    {alimentosPertoDeVencer.length > 0 ? (
                        <ul aria-label="Alimentos que vencem nos próximos 7 dias">
                            {alimentosPertoDeVencer.map((alimento) => (
                                <li key={alimento.id}>
                                    {alimento.nome} — {alimento.validade.split('-').reverse().join('/')}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="resumo-empty">Nenhum nos próximos 7 dias.</p>
                    )}
                </div>
            </div>
        </section>
    )
}