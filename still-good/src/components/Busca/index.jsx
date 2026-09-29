import './index.css'
import { FaSearch } from "react-icons/fa";

export default function Busca() {
    return (
        <div className="busca">

            <span className="search-icon"><FaSearch />
</span>

            <input
                type="text"
                placeholder="Buscar alimentos..."
            />

        </div>
    )
}