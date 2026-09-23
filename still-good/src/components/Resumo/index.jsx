import './index.css'

export default function Resumo() {
    return (
        <section className="resumo">

            <div className="resumo-card">

                <span className="resumo-icon">🥫</span>

                <div>
                    <strong>6 itens</strong>
                    <small>Cadastrados</small>
                </div>

            </div>


            <div className="resumo-card">

                <span className="resumo-icon">⚠️</span>

                <div>
                    <strong>2 próximos</strong>
                    <small>Do vencimento</small>
                </div>

            </div>

        </section>
    )
}