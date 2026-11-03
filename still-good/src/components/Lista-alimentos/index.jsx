import Foodcard from '../Foodcard/index.jsx'
import './index.css'
import { GiSlicedBread, GiIceCube } from 'react-icons/gi'

export default function Listaalimentos({ alimentos, busca }) {
    const alimentosFiltrados = alimentos.filter((alimento) =>
        `${alimento.id} ${alimento.nome} ${alimento.local}`
            .toLocaleLowerCase('pt-BR')
            .includes(busca.trim().toLocaleLowerCase('pt-BR'))
    )

    return (
        <section className="itens">
            <div className="section-header">
                <h2>Seus alimentos</h2>
                <span className="food-count">{alimentosFiltrados.length} itens</span>
            </div>

            <div className="item-list">
                {alimentosFiltrados.map((alimento) => (
                    <Foodcard
                        key={alimento.id}
                        icone={alimento.local === 'Geladeira' ? <GiIceCube /> : <GiSlicedBread />}
                        id={alimento.id}
                        nome={alimento.nome}
                        local={alimento.local}
                        validade={alimento.validade}
                    />
                ))}
                {alimentosFiltrados.length === 0 && (
                    <p className="empty-food-list">Nenhum alimento encontrado.</p>
                )}
            </div>
        </section>
    )
}