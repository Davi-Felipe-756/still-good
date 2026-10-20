import './index.css'
export default function LoginInput({
    icon: Icon,
    type,
    name,
    placeholder
}) {
    return (
        <div className="login-input">
            <Icon size={28} />

            <input
                type={type}
                name={name}
                placeholder={placeholder}
            />
        </div>
    )
}