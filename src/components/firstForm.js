import { useState } from "react"

import axios from 'axios';

const App = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('email не может быть пуст')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пуст')

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('Пароль должен быть от 3 до 8 символов')
            if (!e.target.value) {
                setPasswordError('Пароль не может быть пуст')
            }
        } else {
            setPasswordError('')
        }
    }


    const blurhandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'passord':
                setPasswordDirty(true)
                break
        }
    }

    const onSubmitEvent = (e) => {
        e.preventDefault();
    }

    const fetchData = (e) => {
        axios.post("http://localhost:3000/api/auth/register", {
            login: email,
            password: password
        })
    }

    return (
        <div className="app">
            <form className="regForm">
                <h1>Регистрация</h1>
                {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
                <input className="inputForm" onChange={e => emailHandler(e)} value={email} onBlur={e => blurhandler(e)} name='email' type='text' placeholder='Enter your email' />
                {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
                <input className="inputForm" onChange={e => passwordHandler(e)} value={password} onBlur={e => blurhandler(e)} name='pasword' type='password' placeholder='Enter your password' />
                <div className="buttonBox">
                    <button onSubmit={() => onSubmitEvent()} className="formButton" type='submit'>Вход</button>
                    <button className="formButton" type='submit'>Registration</button></div>
            </form>
        </div>
    )
}

export default App