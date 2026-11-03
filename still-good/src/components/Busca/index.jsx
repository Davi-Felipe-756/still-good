import './index.css'
import { FaSearch } from 'react-icons/fa'

export default function Busca({ value, onChange }) {
    return (
        <label className="busca">
            <span className="search-icon"><FaSearch />
            </span>
            <input
                type="text"
                placeholder="Buscar alimentos..."
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </label>
    )
}