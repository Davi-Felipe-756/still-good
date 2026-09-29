import './index.css'
import { CiBellOn, CiMenuBurger } from "react-icons/ci";
export default function Header() {
    return (
        <header className="header">

            <button className="header-button menu-button">
                <span className="menu-icon"><CiMenuBurger /></span>
            </button>

            <h1>Sua despensa</h1>

            <button className="header-button notification-button">
                <span className="notification-icon"><CiBellOn /></span>
            </button>

        </header>
    )
}