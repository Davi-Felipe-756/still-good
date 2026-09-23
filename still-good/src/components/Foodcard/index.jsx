import './index.css'

export default function Foodcard({
    icone,
    nome,
    local,
    validade
}) {
    return (
        <div className="food-card">

            <span className="food-icon">
                {icone || '🥫'}
            </span>

            <div className="food-info">

                <h3>{nome}</h3>

                <p>{local}</p>

                <p>Validade: {validade}</p>

            </div>

        </div>
    )
}