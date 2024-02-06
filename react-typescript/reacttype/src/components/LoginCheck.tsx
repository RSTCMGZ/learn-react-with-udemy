import React, { useState } from 'react'

type UserType = {
    name: string,
    email: string,
    phone: string,
}


function LoginCheck() {

    const [user, setUser] = useState<UserType | null>(null)

    const handleLogin = () => {
        setUser({
            name: 'Rst',
            email: 'rstcmgz@hotmail.com',
            phone: '555555555',
        })
    }

    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Giriş yap</button>
            <button onClick={handleLogout}>Çıkış yap</button>
            <div>
                <p>{user?.name}</p>
            </div>
            <div>{user?.email}</div>
            <div>{user?.phone}</div>
        </div>
    )
}

export default LoginCheck