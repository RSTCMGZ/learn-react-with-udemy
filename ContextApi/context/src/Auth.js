import { useContext } from "react"
import authContext from "./context/auth-context"

function Auth() {
    const { status, login } = useContext(authContext)
    return (
        <div>
            <h1>Giriş yaptın mı?</h1>
            {status ? <p>Ohoo Çooktaann</p> : <p>Hayır</p>}
            <button onClick={login}>Giriş Yap</button>
        </div>
    )
}

export default Auth