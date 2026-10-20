import { useState } from 'react'
import { FaCalendarAlt } from 'react-icons/fa'
import './index.css'

export default function Notificacoes() {
    const [ativadas, setAtivadas] = useState(true)
    const [dias, setDias] = useState(7)

    return (
        <section className="notificacoes">
            <h2>Notificação</h2>

            <div className="notificacao-linha">
                <div className="notificacao-texto">
                    <strong>Ativar notificações personalizadas</strong>
                    <p>
                        Receba avisos sobre o vencimento de um alimento
                        de acordo com o tempo que você personalizou
                    </p>
                </div>

                <button
                    type="button"
                    className={`interruptor ${ativadas ? 'ligado' : ''}`}
                    onClick={() => setAtivadas(!ativadas)}
                    aria-label="Ativar ou desativar notificações"
                >
                    <span />
                </button>
            </div>

            <div className="dias-lista">
                {[30, 15, 7].map((dia) => (
                    <button
                        key={dia}
                        type="button"
                        className={dias === dia ? 'dia ativo' : 'dia'}
                        onClick={() => setDias(dia)}
                    >
                        <FaCalendarAlt />
                        {dia} dias
                    </button>
                ))}

                <button
                    type="button"
                    className="dia adicionar-dia"
                    onClick={() => {
                        const novoDia = prompt('Quantos dias antes deseja receber o aviso?')
                        const numero = Number(novoDia)

                        if (numero > 0 && Number.isInteger(numero)) {
                            setDias(numero)
                        }
                    }}
                    aria-label="Adicionar prazo de notificação"
                >
                    +
                </button>
            </div>
        </section>
    )
}