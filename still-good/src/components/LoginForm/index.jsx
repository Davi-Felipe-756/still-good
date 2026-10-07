import { FaUser, FaLock  } from "react-icons/fa";
import LoginInput from '../LoginInput'
import './index.css'

function authenticate(email, password) {
    return email.trim() !== '' && password.trim() !== ''
}

export default function LoginForm() {
    function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = String(formData.get('email') ?? '')
        const password = String(formData.get('password') ?? '')

        if (authenticate(email, password)) {
            window.location.href = "/home";
        } else{
            console.log("erro login")
        }
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

            <button type="button" className="register-button">
                Criar conta
            </button>
        </form>
    )
}