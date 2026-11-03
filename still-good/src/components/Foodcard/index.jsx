import './index.css'

export default function Foodcard({
    icone,
    id,
    nome,
    local,
    validade
}) {
    const [ano, mes, dia] = validade.split('-')
    const validadeFormatada = `${dia}/${mes}/${ano}`

    return (
        <article className="food-card">
            <div className="food-card-heading">
                <span className="food-icon">{icone || '🥫'}</span>
                <div className="food-info">
                    <h3>{nome}</h3>
                    <p>{local}</p>
                </div>
            </div>
            <div className="food-info">
                <p><strong>Validade:</strong> {validadeFormatada}</p>
                <p><strong>ID:</strong> {id}</p>
            </div>
        </article>
    )
}