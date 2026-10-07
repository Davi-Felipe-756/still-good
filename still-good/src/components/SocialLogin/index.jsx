import { FaGoogle, FaApple } from "react-icons/fa";
import './index.css';

export default function SocialLogin() {
    return (
        <section className="other-methods">
            <a href="#" className="other-methods-link">
                Outros métodos
            </a>

            <div className="social-login">
                <button
                    type="button"
                    aria-label="Entrar com Google"
                    className="google-button"
                >
                    <FaGoogle size={34} fill="black" color="black" />
                </button>

                <span className="or-text">OU</span>

                <button
                    type="button"
                    aria-label="Entrar com Apple"
                    className="apple-button"
                >
                    <FaApple size={34} fill="black" color="black" />
                </button>
            </div>
        </section>
    )
}