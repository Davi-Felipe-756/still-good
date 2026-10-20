import { FaGlobeAmericas, FaChevronRight } from 'react-icons/fa'
import './index.css'

export default function ConfiguracoesPerfil() {
    return (
        <section className="configuracoes-perfil">
            <button
                type="button"
                className="idioma-linha"
                onClick={() => alert('Configuração de idioma em breve!')}
            >
                <span className="idioma-titulo">
                    <FaGlobeAmericas />
                    Idioma
                </span>

                <span className="idioma-valor">
                    Português (Brasil)
                    <FaChevronRight />
                </span>
            </button>

            <div className="sobre">
                <h2>sobre</h2>

                <div className="sobre-linha">
                    <span>versão do aplicativo</span>
                    <span>1.0.0</span>
                </div>

                <button
                    type="button"
                    className="sobre-linha"
                    onClick={() => alert('Política de privacidade em breve!')}
                >
                    <span>política de privacidade</span>
                    <FaChevronRight />
                </button>

                <button
                    type="button"
                    className="sobre-linha"
                    onClick={() => alert('Suporte em breve!')}
                >
                    <span>suporte</span>
                    <FaChevronRight />
                </button>
            </div>
        </section>
    )
}