import { useState } from 'react'
import Header from '../../components/Header/index.jsx'
import Resumo from '../../components/Resumo/index.jsx'
import Busca from '../../components/Busca/index.jsx'
import Listaalimentos from '../../components/Lista-alimentos/index.jsx'
import BottomNav from '../../components/BottomNav/index.jsx'
import dados from '../../services/db.json'
import './index.css'

const usuarios = Array.isArray(dados.usuarios)
    ? dados.usuarios
    : [
        { ...dados.usuario, alimentos: dados.alimentos ?? [] },
        { ...dados.usuario2, alimentos: dados.alimentos2 ?? [] }
      ].filter(Boolean)

export default function Home() {
    const [busca, setBusca] = useState('')

    const usuarioLogadoId = localStorage.getItem('usuarioLogadoId') || usuarios[0]?.id
    const usuarioAtual = usuarios.find((usuario) => usuario.id === usuarioLogadoId) || usuarios[0]
    const alimentosAtual = usuarioAtual?.alimentos ?? dados.alimentos ?? []

    if (!usuarioAtual) {
        return <div className="home">Nenhum usuário encontrado.</div>
    }

    return (
        <div className="home">
            <Header />

            <main className="home-content">
                <section className="profile-summary" aria-labelledby="profile-title">
                    <div className="profile-avatar" aria-hidden="true">
                        {usuarioAtual.nome.slice(0, 1).toUpperCase()}
                    </div>
                    <div className="profile-details">
                        <span className="profile-eyebrow">Seu perfil</span>
                        <h2 id="profile-title">{usuarioAtual.nome}</h2>
                        <p>@{usuarioAtual.username}</p>
                        <p>{usuarioAtual.email}</p>
                        <span className="profile-id">ID: {usuarioAtual.id}</span>
                    </div>
                </section>

                <Resumo
                    totalAlimentos={alimentosAtual.length}
                    pontos={usuarioAtual.stats?.experiencePoints ?? 0}
                    missoes={usuarioAtual.stats?.completedMissions ?? 0}
                />

                <Busca value={busca} onChange={setBusca} />
                <Listaalimentos alimentos={alimentosAtual} busca={busca} />
            </main>

            <BottomNav active="home" />
        </div>
    )
}