import { useCallback, useState } from "preact/hooks";

function useAuthForm(isAuthLogin) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isAuthLogin) {
            // do some login stuff
        } else {
            // do some register stuff
        }

        console.log(email, password);
    }

    const handleChangeEmail = useCallback((event) => {
        setEmail(event.target.value);
    }, [email]);

    const handleChangePassword = useCallback((event) => {
        setPassword(event.target.value);
    }, [password]);

    return { email, password, handleChangeEmail, handleChangePassword, handleSubmit };

}


export function AuthForm({isAuthLogin}) {

    const { email, password, handleChangeEmail, handleChangePassword, handleSubmit } = useAuthForm(isAuthLogin);

    return (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleChangeEmail} required />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={handleChangePassword} required />
          </label>
          <button type="submit">Submit</button>
        </form>
      );

}