import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaArrowLeft, FaClock, FaHeart, FaRegHeart, FaUtensils } from 'react-icons/fa'
import BottomNav from '../../components/BottomNav/index.jsx'
import './index.css'

const receitas = [
    {
        id: 'bolo-de-milho', nome: 'Bolo de milho', categoria: 'Para o café', tempo: '50 min',
        imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85',
        ingredientes: ['2 xícaras de milho verde', '1 xícara de leite', '3 ovos', '1½ xícara de açúcar', '½ xícara de óleo', '1 xícara de fubá', '1 colher (sopa) de fermento'],
        preparo: ['Preaqueça o forno a 180 °C e unte uma forma.', 'Bata no liquidificador o milho, o leite, os ovos, o açúcar e o óleo até ficar homogêneo.', 'Acrescente o fubá e bata rapidamente. Misture o fermento com uma espátula.', 'Despeje na forma e asse por cerca de 40 minutos, até dourar e passar no teste do palito.']
    },
    {
        id: 'bolo-de-chocolate', nome: 'Bolo de chocolate', categoria: 'Doce favorito', tempo: '55 min',
        imagem: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=1000&q=85',
        ingredientes: ['2 xícaras de farinha de trigo', '1 xícara de açúcar', '¾ xícara de chocolate em pó', '2 ovos', '1 xícara de leite', '½ xícara de óleo', '1 colher (sopa) de fermento'],
        preparo: ['Preaqueça o forno a 180 °C e unte uma forma.', 'Misture a farinha, o açúcar e o chocolate em uma tigela.', 'Junte os ovos, o leite e o óleo e mexa até obter uma massa lisa.', 'Incorpore o fermento delicadamente e asse por 35 a 40 minutos.']
    },
    {
        id: 'cuscuz-com-ovo', nome: 'Cuscuz com ovo', categoria: 'Rápido e caseiro', tempo: '20 min',
        imagem: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=1000&q=85',
        ingredientes: ['1 xícara de flocão de milho', '½ xícara de água', '1 pitada de sal', '2 ovos', '1 colher (chá) de manteiga'],
        preparo: ['Misture o flocão com a água e o sal. Deixe hidratar por 5 minutos.', 'Coloque a massa na cuscuzeira sem apertar e cozinhe no vapor por cerca de 10 minutos.', 'Aqueça a manteiga em uma frigideira e prepare os ovos como preferir.', 'Sirva o cuscuz ainda quente com os ovos por cima.']
    },
    {
        id: 'crepioca', nome: 'Crepioca', categoria: 'Leve e prática', tempo: '10 min',
        imagem: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=1000&q=85',
        ingredientes: ['1 ovo', '2 colheres (sopa) de goma de tapioca', '1 pitada de sal', 'Recheio a gosto'],
        preparo: ['Bata o ovo com a goma de tapioca e o sal até ficar uniforme.', 'Aqueça uma frigideira antiaderente em fogo baixo.', 'Despeje a mistura e doure por cerca de 2 minutos de cada lado.', 'Adicione o recheio, dobre ao meio e sirva.']
    },
    {
        id: 'pao-pizza', nome: 'Pão pizza', categoria: 'Para compartilhar', tempo: '1 h 30 min',
        imagem: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/Tasty_Pizza-Bread_-_49859086853.jpg/1280px-Tasty_Pizza-Bread_-_49859086853.jpg',
        ingredientes: ['3 xícaras de farinha de trigo', '10 g de fermento biológico seco', '1 xícara de água morna', '1 colher (sopa) de açúcar', '1 colher (chá) de sal', '2 colheres (sopa) de azeite', '½ xícara de molho de tomate', '200 g de muçarela', 'Orégano a gosto'],
        preparo: ['Misture o fermento, o açúcar e a água morna. Aguarde 5 minutos.', 'Acrescente a farinha, o sal e o azeite. Sove por cerca de 10 minutos, até a massa ficar lisa.', 'Cubra e deixe crescer por aproximadamente 1 hora, até dobrar de volume.', 'Abra a massa em uma assadeira, espalhe o molho e cubra com a muçarela e o orégano.', 'Asse em forno preaquecido a 200 °C por 20 a 25 minutos, até dourar.']
    },
    {
        id: 'batata-frita', nome: 'Batata frita', categoria: 'Acompanhamento', tempo: '35 min',
        imagem: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=1000&q=85',
        ingredientes: ['4 batatas médias', 'Óleo para fritar', 'Sal a gosto'],
        preparo: ['Descasque as batatas e corte em palitos de tamanho parecido.', 'Deixe de molho em água fria por 15 minutos e seque muito bem.', 'Frite em pequenas porções em óleo quente até ficarem douradas.', 'Escorra em papel-toalha e tempere com sal enquanto ainda estiverem quentes.']
    },
    {
        id: 'pao-caseiro', nome: 'Pão caseiro', categoria: 'Para o café', tempo: '2 h',
        imagem: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=85',
        ingredientes: ['500 g de farinha de trigo', '10 g de fermento biológico seco', '300 ml de água morna', '2 colheres (sopa) de açúcar', '1 colher (chá) de sal', '2 colheres (sopa) de óleo'],
        preparo: ['Misture o fermento, o açúcar e a água morna. Aguarde 5 minutos.', 'Junte a farinha, o sal e o óleo e sove até obter uma massa lisa.', 'Cubra e deixe crescer por cerca de 1 hora.', 'Modele o pão e asse em forno preaquecido a 180 °C por 35 a 40 minutos.']
    },
    {
        id: 'pizza', nome: 'Pizza', categoria: 'Para compartilhar', tempo: '1 h 20 min',
        imagem: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=85',
        ingredientes: ['2 xícaras de farinha de trigo', '1 colher (chá) de fermento biológico seco', '¾ xícara de água morna', '1 colher (sopa) de azeite', '½ xícara de molho de tomate', '200 g de muçarela', 'Orégano a gosto'],
        preparo: ['Misture a farinha, o fermento, a água e o azeite até formar uma massa.', 'Sove por 5 minutos e deixe descansar por 40 minutos.', 'Abra a massa, espalhe o molho e cubra com a muçarela e o orégano.', 'Asse em forno preaquecido a 220 °C por 15 a 20 minutos.']
    }
]

export default function Receitas() {
    const { id } = useParams()
    const navigate = useNavigate()
    const usuarioId = localStorage.getItem('usuarioLogadoId') || 'visitante'
    const chaveFavoritas = `still-good-favoritas:${usuarioId}`
    const [favoritas, setFavoritas] = useState(() => {
        try {
            const salvas = JSON.parse(localStorage.getItem(chaveFavoritas) || '[]')
            return Array.isArray(salvas) ? salvas : []
        } catch {
            return []
        }
    })
    const [categoriaAtiva, setCategoriaAtiva] = useState('Todas')
    const [categoriasAbertas, setCategoriasAbertas] = useState(false)
    const [receitaImproviso, setReceitaImproviso] = useState(null)
    const receita = receitas.find((item) => item.id === id)

    useEffect(() => {
        localStorage.setItem(chaveFavoritas, JSON.stringify(favoritas))
    }, [chaveFavoritas, favoritas])

    function alternarFavorita(receitaId) {
        setFavoritas((atuais) => atuais.includes(receitaId)
            ? atuais.filter((favoritaId) => favoritaId !== receitaId)
            : [...atuais, receitaId])
    }

    function escolherCategoria(categoria) {
        setCategoriaAtiva(categoria)
        if (categoria === 'Improviso') {
            const opcoes = receitas.filter((item) => item.id !== receitaImproviso?.id)
            setReceitaImproviso(opcoes[Math.floor(Math.random() * opcoes.length)])
        }
    }

    if (id) {
        if (!receita) {
            return (
                <main className="recipes-page recipes-not-found">
                    <button className="recipe-back" type="button" onClick={() => navigate('/receitas')}>
                        <FaArrowLeft aria-hidden="true" /> Voltar às receitas
                    </button>
                    <h1>Receita não encontrada</h1>
                </main>
            )
        }

        return (
            <main className="recipes-page">
                <div className="recipe-detail-shell">
                    <button className="recipe-back" type="button" onClick={() => navigate('/receitas')}>
                        <FaArrowLeft aria-hidden="true" /> Voltar às receitas
                    </button>
                    <article className="recipe-detail">
                        <img className="recipe-detail-image" src={receita.imagem} alt={receita.nome} />
                        <div className="recipe-detail-content">
                            <span className="recipe-kicker">{receita.categoria}</span>
                            <h1>{receita.nome}</h1>
                            <button
                                className={`recipe-favorite recipe-detail-favorite${favoritas.includes(receita.id) ? ' is-favorite' : ''}`}
                                type="button"
                                aria-label={favoritas.includes(receita.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                                aria-pressed={favoritas.includes(receita.id)}
                                onClick={() => alternarFavorita(receita.id)}
                            >
                                {favoritas.includes(receita.id) ? <FaHeart aria-hidden="true" /> : <FaRegHeart aria-hidden="true" />}
                                {favoritas.includes(receita.id) ? 'Favorita' : 'Adicionar aos favoritos'}
                            </button>
                            <p className="recipe-time"><FaClock aria-hidden="true" /> Preparo aproximado: {receita.tempo}</p>
                            <section className="recipe-section">
                                <h2>Ingredientes</h2>
                                <ul>{receita.ingredientes.map((ingrediente) => <li key={ingrediente}>{ingrediente}</li>)}</ul>
                            </section>
                            <section className="recipe-section">
                                <h2>Modo de preparo</h2>
                                <ol>{receita.preparo.map((passo) => <li key={passo}>{passo}</li>)}</ol>
                            </section>
                        </div>
                    </article>
                </div>
            </main>
        )
    }

    return (
        <div className="recipes-page">
            <main className="recipes-content">
                <header className="recipes-header">
                    <span className="recipes-eyebrow"><FaUtensils aria-hidden="true" /> Cozinha do dia a dia</span>
                    <h1>Receitas</h1>
                    <p>Escolha uma receita e descubra como preparar!</p>
                </header>
                <div className="recipe-category-control">
                    <button
                        className={`recipe-category-toggle${categoriasAbertas ? ' is-open' : ''}`}
                        type="button"
                        aria-expanded={categoriasAbertas}
                        aria-controls="recipe-categories"
                        onClick={() => setCategoriasAbertas((abertas) => !abertas)}
                    >
                        Categorias <span aria-hidden="true">{categoriasAbertas ? '−' : '+'}</span>
                    </button>
                    {categoriasAbertas && (
                        <div className="recipe-category-options" id="recipe-categories" aria-label="Categorias de receitas">
                            {['Todas', 'Favoritas', 'Improviso'].map((categoria) => (
                                <button
                                    className={`recipe-category-option${categoriaAtiva === categoria ? ' is-selected' : ''}`}
                                    type="button"
                                    key={categoria}
                                    aria-pressed={categoriaAtiva === categoria}
                                    onClick={() => escolherCategoria(categoria)}
                                >
                                    {categoria}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                {categoriaAtiva === 'Improviso' && receitaImproviso && (
                    <p className="recipe-improvise-message" aria-live="polite">Que tal preparar {receitaImproviso.nome}?</p>
                )}
                <section className="recipe-grid" aria-label={`Lista de receitas: ${categoriaAtiva}`}>
                    {(categoriaAtiva === 'Favoritas'
                        ? receitas.filter((item) => favoritas.includes(item.id))
                        : categoriaAtiva === 'Improviso'
                            ? (receitaImproviso ? [receitaImproviso] : [])
                            : receitas
                    ).map((item, index) => (
                        <article className="recipe-card" key={item.id} style={{ '--card-order': index }}>
                            <Link className="recipe-card-link" to={`/receitas/${item.id}`}>
                                <div className="recipe-card-image-wrap">
                                    <img src={item.imagem} alt={item.nome} loading={index > 2 ? 'lazy' : 'eager'} />
                                    <span className="recipe-card-time"><FaClock aria-hidden="true" /> {item.tempo}</span>
                                </div>
                                <div className="recipe-card-info">
                                    <span>{item.categoria}</span>
                                    <h2>{item.nome}</h2>
                                    <span className="recipe-card-action">Ver receita <span aria-hidden="true">↗</span></span>
                                </div>
                            </Link>
                            <button
                                className={`recipe-favorite recipe-card-favorite${favoritas.includes(item.id) ? ' is-favorite' : ''}`}
                                type="button"
                                aria-label={favoritas.includes(item.id) ? `Remover ${item.nome} dos favoritos` : `Adicionar ${item.nome} aos favoritos`}
                                aria-pressed={favoritas.includes(item.id)}
                                onClick={() => alternarFavorita(item.id)}
                            >
                                {favoritas.includes(item.id) ? <FaHeart aria-hidden="true" /> : <FaRegHeart aria-hidden="true" />}
                            </button>
                        </article>
                    ))}
                    {categoriaAtiva === 'Favoritas' && favoritas.length === 0 && (
                        <p className="recipe-empty-state">Você ainda não adicionou receitas aos favoritos.</p>
                    )}
                </section>
            </main>
            <BottomNav active="receitas" />
        </div>
    )
}