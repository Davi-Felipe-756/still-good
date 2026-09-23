import './index.css'

export default function BottomNav() {
    return (
        <nav className="bottom-nav">

            <button className="bottom-nav-item1">
                <span className="bottom-icon1">🥫</span>
                <span>Despensa</span>
            </button>

            <button className="bottom-nav-item">
                <span className="bottom-icon">📖</span>
                <span>Receitas</span>
            </button>

            <button className="bottom-nav-item">
                <span className="bottom-icon">♙</span>
                <span>Perfil</span>
            </button>

        </nav>
    )
}