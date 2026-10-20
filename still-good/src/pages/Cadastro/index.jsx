import LoginHeader from '../../components/LoginHeader'
import LoginInput from '../../components/LoginInput'
import SocialLogin from '../../components/SocialLogin'
import { FaUser, FaLock  } from "react-icons/fa";
import './index.css'

function authenticate(email, password) {
    return email.trim() !== '' && password.trim() !== ''
}

export default function Cadastro() {
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
        <div className="cadastro-page">

            <LoginHeader />

            <main className="cadastro-content">

               <form className="cadastro-form" onSubmit={handleSubmit}>

   <LoginInput
    icon={FaUser}
    type="email"
    name="email"
    placeholder="Exemplo123@gmail.com"
/>

<LoginInput
    icon={FaLock}
    type="password"
    name="password"
    placeholder="********"
/>

    <a href="#" className="cadastro-forgot">
        Esqueci minha senha
    </a>

    <button
        type="submit"
        className="cadastro-button"
    >
        Criar conta
    </button>
<button
    type="button"
    className="entrar-button"
    onClick={() => window.location.href = "/login"}
>
    Conta já existente
</button>
</form>

                <SocialLogin />

            </main>

        </div>
    )
}