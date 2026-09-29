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

                {/* Lista de alimentos */}
                <Listaalimentos />

            </main>

            <BottomNav />

        </div>
    )
}