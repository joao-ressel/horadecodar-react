function Evento({numero}){
    function meuEvento(){
        console.log(`Não era pra clicar ${numero}`)
    }

    return (
        <div>
            <button onClick={meuEvento}>Não Clique no Botão!</button>
        </div>
    )
}
export default Evento