import './index.css'

export default function Foodcard({
    icone,
    nome,
    local,
    validade,
    onEditar,
    onRemover
}) {
    const validadeFormatada = validade?.includes('-')
        ? validade.split('-').reverse().join('/')
        : validade || 'Não informada'

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
            </div>
            <div className="food-card-actions">
                <button type="button" className="food-card-edit" onClick={onEditar}>
                    Editar
                </button>
                <button type="button" className="food-card-remove" onClick={onRemover}>
                    Remover
                </button>
            </div>
        </article>
    )
}