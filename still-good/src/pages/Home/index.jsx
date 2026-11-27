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

function buscarAlimentosPertoDeVencer(alimentos) {
    const hoje = new Date()
    const hojeEmUtc = Date.UTC(hoje.getFullYear(), hoje.getMonth(), hoje.getDate())

    return alimentos
        .filter((alimento) => {
            const partesData = /^(\d{4})-(\d{2})-(\d{2})$/.exec(alimento.validade ?? '')
            if (!partesData) return false

            const [, ano, mes, dia] = partesData
            const validadeEmUtc = Date.UTC(Number(ano), Number(mes) - 1, Number(dia))
            const dataValidade = new Date(validadeEmUtc)
            const dataValida =
                dataValidade.getUTCFullYear() === Number(ano) &&
                dataValidade.getUTCMonth() === Number(mes) - 1 &&
                dataValidade.getUTCDate() === Number(dia)
            const diasAteVencer = (validadeEmUtc - hojeEmUtc) / 86_400_000

            return dataValida && diasAteVencer >= 0 && diasAteVencer <= 7
        })
        .sort((alimentoA, alimentoB) => alimentoA.validade.localeCompare(alimentoB.validade))
}

export default function Home() {
    const [busca, setBusca] = useState('')
    const [formAberto, setFormAberto] = useState(false)
    const [alimentoEmEdicao, setAlimentoEmEdicao] = useState(null)

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

    useEffect(() => {
        if (!alimentoEmEdicao) return

        function fecharComEscape(event) {
            if (event.key === 'Escape') setAlimentoEmEdicao(null)
        }

        window.addEventListener('keydown', fecharComEscape)
        return () => window.removeEventListener('keydown', fecharComEscape)
    }, [alimentoEmEdicao])

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

    function removerAlimento(id) {
        setAlimentos((atuais) => atuais.filter((alimento) => alimento.id !== id))
    }

    function iniciarEdicao(alimento) {
        setFormAberto(false)
        setAlimentoEmEdicao(alimento)
    }

    function editarAlimento(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)

        setAlimentos((atuais) =>
            atuais.map((alimento) =>
                alimento.id === alimentoEmEdicao.id
                    ? {
                        ...alimento,
                        nome: formData.get('nome').trim(),
                        local: formData.get('local'),
                        validade: formData.get('validade')
                    }
                    : alimento
            )
        )
        setAlimentoEmEdicao(null)
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
                    alimentosPertoDeVencer={buscarAlimentosPertoDeVencer(alimentos)}
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

                {alimentoEmEdicao && (
                    <div
                        className="food-modal-backdrop"
                        onMouseDown={(event) => {
                            if (event.target === event.currentTarget) setAlimentoEmEdicao(null)
                        }}
                    >
                        <form
                            className="food-modal"
                            onSubmit={editarAlimento}
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="edit-food-title"
                        >
                            <h2 id="edit-food-title">Editar alimento</h2>
                            <label>
                                Nome do alimento
                                <input name="nome" type="text" defaultValue={alimentoEmEdicao.nome} required autoFocus />
                            </label>
                            <label>
                                Local de armazenamento
                                <select name="local" defaultValue={alimentoEmEdicao.local} required>
                                    <option value="Despensa">Despensa</option>
                                    <option value="Geladeira">Geladeira</option>
                                    <option value="Freezer">Freezer</option>
                                </select>
                            </label>
                            <label>
                                Validade
                                <input name="validade" type="date" defaultValue={alimentoEmEdicao.validade} required />
                            </label>
                            <div className="edit-food-actions">
                                <button className="save-food-button" type="submit">Salvar alterações</button>
                                <button
                                    className="cancel-food-button"
                                    type="button"
                                    onClick={() => setAlimentoEmEdicao(null)}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                <Listaalimentos
                    alimentos={alimentos}
                    busca={busca}
                    onEditar={iniciarEdicao}
                    onRemover={removerAlimento}
                />
            </main>

            <BottomNav active="home" />
        </div>
    )
}