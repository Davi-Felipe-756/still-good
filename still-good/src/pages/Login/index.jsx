import LoginHeader from '../../components/LoginHeader'
import LoginForm from '../../components/LoginForm'
import SocialLogin from '../../components/SocialLogin'
import './index.css'

export default function Login() {
    return (
        <div className="login-page">
            <LoginHeader />

            <main className="login-content">
                <LoginForm />
                <SocialLogin />
            </main>
        </div>
    )
}