import { FaMobileAlt, FaBookOpen, FaUser } from 'react-icons/fa'
import './index.css'

export default function BottomNav({ active = 'profile' }) {
    return (
        <nav className="bottom-nav">
            <button
                type="button"
                className={`bottom-nav-item${active === 'home' ? ' active' : ''}`}
                onClick={() => window.location.href = '/home'}
            >
                <FaMobileAlt />
                <span>Despensa</span>
            </button>

            <button
                type="button"
                className={`bottom-nav-item${active === 'receitas' ? ' active' : ''}`}
                onClick={() => window.location.href = '/receitas'}
            >
                <FaBookOpen />
                <span>Receitas</span>
            </button>

            <button
                type="button"
                className={`bottom-nav-item${active === 'profile' ? ' active' : ''}`}
                onClick={() => window.location.href = '/perfil'}
            >
                <FaUser />
                <span>Perfil</span>
            </button>
        </nav>
    )
}