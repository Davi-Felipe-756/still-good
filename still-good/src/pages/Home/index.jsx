import { useState } from 'react'
import Header from '../../components/Header/index.jsx'
import Resumo from '../../components/Resumo/index.jsx'
import Busca from '../../components/Busca/index.jsx'
import Listaalimentos from '../../components/Lista-alimentos/index.jsx'
import BottomNav from '../../components/BottomNav/index.jsx'
import dados from '../../services/db.json'
import './index.css'

const { usuario, alimentos } = dados

export default function Home() {
    const [busca, setBusca] = useState('')

    return (
        <div className="home">
            <Header />

            <main className="home-content">
                <section className="profile-summary" aria-labelledby="profile-title">
                    <div className="profile-avatar" aria-hidden="true">
                        {usuario.nome.slice(0, 1).toUpperCase()}
                    </div>
                    <div className="profile-details">
                        <span className="profile-eyebrow">Seu perfil</span>
                        <h2 id="profile-title">{usuario.nome}</h2>
                        <p>@{usuario.username}</p>
                        <p>{usuario.email}</p>
                        <span className="profile-id">ID: {usuario.id}</span>
                    </div>
                </section>

                <Resumo
                    totalAlimentos={alimentos.length}
                    pontos={usuario.stats.experiencePoints}
                    missoes={usuario.stats.completedMissions}
                />

                <Busca value={busca} onChange={setBusca} />
                <Listaalimentos alimentos={alimentos} busca={busca} />
            </main>

            <BottomNav active="home" />
        </div>
    )
}