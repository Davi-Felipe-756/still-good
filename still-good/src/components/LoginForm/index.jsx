import { FaUser, FaLock } from "react-icons/fa";
import LoginInput from '../LoginInput'
import dados from '../../services/db.json'
import './index.css'

function authenticate(email, password) {
    const contas = Array.isArray(dados.usuarios)
        ? dados.usuarios
        : [dados.usuario, dados.usuario2].filter(Boolean)

    return contas.some((conta) => {
        const emailValido = String(conta.email ?? '').trim().toLowerCase() === String(email ?? '').trim().toLowerCase()
        const senhaValida = String(conta.senha ?? '').trim() === String(password ?? '').trim()
        return emailValido && senhaValida
    })
}

export default function LoginForm() {
    function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = String(formData.get('email') ?? '')
        const password = String(formData.get('password') ?? '')

        if (authenticate(email, password)) {
            const contas = Array.isArray(dados.usuarios)
                ? dados.usuarios
                : [dados.usuario, dados.usuario2].filter(Boolean)

            const conta = contas.find((usuario) => {
                return (
                    String(usuario.email ?? '').trim().toLowerCase() === email.trim().toLowerCase() &&
                    String(usuario.senha ?? '').trim() === password.trim()
                )
            })

            if (conta) {
                localStorage.setItem('usuarioLogadoId', conta.id)
                window.location.href = "/home"
                return
            }
        }

        console.log('erro login')
    }

    return (
        <form className="login-form" onSubmit={handleSubmit}>
            <LoginInput
                icon={FaUser}
                type="email"
                name="email"
                placeholder="Exemplo123@gmail.com"
                required
            />

            <LoginInput
                icon={FaLock}
                type="password"
                name="password"
                placeholder="********"
                required
            />

            <a href="#" className="forgot-password">
                Esqueci minha senha
            </a>

            <button type="submit" className="login-button">
                Entrar
            </button>

            <button
                type="button"
                className="entrar-button"
                onClick={() => window.location.href = "/Cadastro"}
            >
                Criar conta
            </button>
        </form>
    )
}