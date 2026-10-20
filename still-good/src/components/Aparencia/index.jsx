import { useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import './index.css'

export default function Aparencia() {
    const [tema, setTema] = useState('claro')
    const [cor, setCor] = useState('#171717')

    const cores = ['#171717', '#7587c4', '#29218d', '#a72d55']

    return (
        <section className="aparencia">
            <h2>Aparencia</h2>

            <div className="tema-linha">
                <strong>Tema</strong>

                <div className="tema-botoes">
                    <button
                        type="button"
                        className={tema === 'escuro' ? 'tema-selecionado' : ''}
                        onClick={() => setTema('escuro')}
                    >
                        <FaMoon /> Escuro
                    </button>

                    <button
                        type="button"
                        className={tema === 'claro' ? 'tema-selecionado' : ''}
                        onClick={() => setTema('claro')}
                    >
                        <FaSun /> Claro
                    </button>
                </div>
            </div>

            <div className="cores-linha">
                <strong>Cores Principais</strong>

                <div className="paleta-cores">
                    {cores.map((corItem) => (
                        <button
                            key={corItem}
                            type="button"
                            aria-label={`Selecionar cor ${corItem}`}
                            className={cor === corItem ? 'cor-selecionada' : ''}
                            style={{ backgroundColor: corItem }}
                            onClick={() => setCor(corItem)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}