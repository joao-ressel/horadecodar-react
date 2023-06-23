import { useState } from "react"

function Condicional(){

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault()
        setUserEmail(email)
    }
    function limparEmail(e){
        setUserEmail('')
    }

    return(

        <div>
            <h2>Cadastre os seu e-mail:</h2>
            <form>
                <input 
                type="email" 
                placeholder="Digite o seu e-mail..."
                onChange={(e)=> setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>Enviar</button>
                {/* Renderização condicional a contecendo */}
                {userEmail && (
                    <div>
                        <p>O email do usuário é: {userEmail}</p>
                        <button type="submit" onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
            </form>
        </div>
    )
}
export default Condicional