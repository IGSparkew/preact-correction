import { AuthForm } from "../components/authForm";

export function Register(props) {
    return(
        <div>
            <h1>Register</h1>
            <AuthForm isAuthLogin={false} />
        </div>
    )
}