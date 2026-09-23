import './index.css'

export default function Header() {
    return (
        <header className="header">

            <button className="header-button menu-button">
                <span className="menu-icon">☰</span>
            </button>

            <h1>Sua despensa</h1>

            <button className="header-button notification-button">
                <span className="notification-icon">🔔</span>
            </button>

        </header>
    )
}