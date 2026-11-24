import { useEffect, useState } from 'react'
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
    const [formAberto, setFormAberto] = useState(false)

    const usuarioLogadoId = localStorage.getItem('usuarioLogadoId') || usuarios[0]?.id
    const usuarioAtual = usuarios.find((usuario) => usuario.id === usuarioLogadoId) || usuarios[0]
    const alimentosIniciais = usuarioAtual?.alimentos ?? dados.alimentos ?? []
    const chaveAlimentos = `still-good-alimentos-${usuarioAtual?.id}`
    const [alimentos, setAlimentos] = useState(() => {
        const alimentosSalvos = localStorage.getItem(chaveAlimentos)
        return alimentosSalvos ? JSON.parse(alimentosSalvos) : alimentosIniciais
    })

    useEffect(() => {
        localStorage.setItem(chaveAlimentos, JSON.stringify(alimentos))
    }, [alimentos, chaveAlimentos])

    function adicionarAlimento(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const nome = formData.get('nome').trim()

        setAlimentos((atuais) => [
            ...atuais,
            {
                id: `alimento-${Date.now()}`,
                nome,
                local: formData.get('local'),
                validade: formData.get('validade')
            }
        ])
        event.currentTarget.reset()
        setFormAberto(false)
    }

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
                    totalAlimentos={alimentos.length}
                    pontos={usuarioAtual.stats?.experiencePoints ?? 0}
                    missoes={usuarioAtual.stats?.completedMissions ?? 0}
                />

                <Busca value={busca} onChange={setBusca} />
                <div className="add-food-actions">
                    <button
                        className="add-food-button"
                        type="button"
                        aria-expanded={formAberto}
                        aria-controls="add-food-form"
                        onClick={() => setFormAberto((aberto) => !aberto)}
                    >
                        {formAberto ? 'Cancelar' : '+ Adicionar alimento'}
                    </button>
                </div>

                {formAberto && (
                    <form id="add-food-form" className="add-food-form" onSubmit={adicionarAlimento}>
                        <h2>Adicionar alimento</h2>
                        <label>
                            Nome do alimento
                            <input name="nome" type="text" required autoFocus />
                        </label>
                        <label>
                            Local de armazenamento
                            <select name="local" defaultValue="" required>
                                <option value="" disabled>Selecione um local</option>
                                <option value="Despensa">Despensa</option>
                                <option value="Geladeira">Geladeira</option>
                                <option value="Freezer">Freezer</option>
                            </select>
                        </label>
                        <label>
                            Validade
                            <input name="validade" type="date" required />
                        </label>
                        <button className="save-food-button" type="submit">Salvar alimento</button>
                    </form>
                )}

                <Listaalimentos alimentos={alimentos} busca={busca} />
            </main>

            <BottomNav active="home" />
        </div>
    )
}