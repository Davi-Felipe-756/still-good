import Header from '../../components/Header/index.jsx'
import Resumo from '../../components/Resumo/index.jsx'
import Busca from '../../components/Busca/index.jsx'
import Listaalimentos from '../../components/Lista-alimentos/index.jsx'
import BottomNav from '../../components/BottomNav/index.jsx'
import './index.css'

export default function Home() {
    return (
        <div className="home">

            <Header />

            <main className="home-content">

                <Resumo />

                <Busca />

                {/* Categorias */}
                <section className="categorias">

                    <div className="section-header">
                        <h2>Categorias</h2>
                        <button>Ver todas</button>
                    </div>

                    <div className="categoria-list">

                        <button className="categoria-item">
                            <span className="categoria-icon">🧊</span>
                            <span>Geladeira</span>
                        </button>

                        <button className="categoria-item">
                            <span className="categoria-icon">🥫</span>
                            <span>Despensa</span>
                        </button>

                        <button className="categoria-item">
                            <span className="categoria-icon">❄️</span>
                            <span>Freezer</span>
                        </button>

                    </div>

                </section>

                {/* Lista de alimentos */}
                <Listaalimentos />

            </main>

            <BottomNav />

        </div>
    )
}