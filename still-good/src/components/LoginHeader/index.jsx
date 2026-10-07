import logo from '../../../public/assets/still good.png'
import './index.css'

export default function LoginHeader() {
    return (
        <header className="login-header">
            <img src={logo} alt="StillGood" />
        </header>
    )
}