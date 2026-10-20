import PerfilHeader from '../../components/PerfilHeader'
import Notificacoes from '../../components/Notificacoes'
import Aparencia from '../../components/Aparencia'
import ConfiguracoesPerfil from '../../components/ConfiguracoesPerfil'
import BottomNav from '../../components/BottomNav'
import './index.css'

export default function Perfil() {
    return (
        <div className="perfil-page">
            <PerfilHeader />

            <main className="perfil-content">
                <Notificacoes />
                <Aparencia />
                <ConfiguracoesPerfil />
            </main>

            <BottomNav />
        </div>
    )
}