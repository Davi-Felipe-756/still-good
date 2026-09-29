import './index.css'
import { GiCannedFish } from "react-icons/gi";
import { FaBook } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";


export default function BottomNav() {
    return (
        <nav className="bottom-nav">

            <button className="bottom-nav-item1">
                <span className="bottom-icon1"><GiCannedFish />
</span>
                <span>Despensa</span>
            </button>

            <button className="bottom-nav-item">
                <span className="bottom-icon"><FaBook />
</span>
                <span>Receitas</span>
            </button>

            <button className="bottom-nav-item">
                <span className="bottom-icon"><MdAccountCircle />
</span>
                <span>Perfil</span>
            </button>

        </nav>
    )
}