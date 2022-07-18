import React, { useState } from 'react'
import classes from './Form.module.css'
import axios from 'axios'

const Form: StorefrontFunctionComponent = () => {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    const handleNome = (e: React.ChangeEvent<any>) => {
        setNome(e.target.value)
    }

    const handleEmail = (e: React.ChangeEvent<any>) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<any>) => {
        e.preventDefault()
        axios.post('https://5ngovpktp9.execute-api.us-east-1.amazonaws.com/v1',{
          nome, email
        })
    }
  {/* escopo do form */}

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <div className={classes.form}>
                <label htmlFor="nome">
                    Nome
                </label>
                <input onChange={handleNome} value={nome} id="nome" />
            </div>
            <div>
                <label htmlFor="email">
                    E-mail
                </label>
                <input onChange={handleEmail} value={email} id="email" />
            </div>
            <button>Enviar</button>
        </form>
    )
}

export default Form
