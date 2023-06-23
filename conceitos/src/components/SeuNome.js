function SeuNome({setNome}){//passando props via metodo
    return(
        <div>
            <p>Digite o seu nome:</p>
            <input type="text" placeholder="Qual seu nome?" onChange={(e) =>setNome(e.target.value)}/> 
        </div>
    )   
}
export default SeuNome