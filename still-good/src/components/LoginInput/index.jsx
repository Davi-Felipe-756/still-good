import './index.css'

export default function LoginInput({ icon: Icon, type, name, placeholder, required }) {
    return (
        <div className="login-input">
            <Icon size={28} strokeWidth={3} />

            <input
                type={type}
                name={name}
                placeholder={placeholder}
                required={required}
            />
        </div>
    )
}