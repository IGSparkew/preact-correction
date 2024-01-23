import { AuthForm } from "../components/authForm";

export function Login(props) {
    return(
        <div>
            <h1>Login</h1>
            <AuthForm isAuthLogin={true} />
        </div>
    )
}