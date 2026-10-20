import { FaUserCircle, FaPencilAlt } from 'react-icons/fa'
import './index.css'

export default function PerfilHeader() {
    return (
        <header className="perfil-header">
            <FaUserCircle className="perfil-avatar" />

            <div className="perfil-identificacao">
                <small>Bem-vindo</small>
                <h1>Anônimo</h1>
            </div>

            <button
                className="editar-perfil"
                type="button"
                aria-label="Editar perfil"
            >
                <FaPencilAlt />
            </button>
        </header>
    )
}