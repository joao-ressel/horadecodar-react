function OutraLista({itens}){
    return(
        <>
            <h3>Lista de Coisas:</h3>
            {itens.length > 0 ?(//começa o if
                itens.map((item, index) =>( // usar o indice do elemento, mas o recomendado é sar o id do banco
                <p key={index}>{item}</p>
            ))):(// else if
                <p>Não há itens na lista!</p>
            )}
        </>
    )
}
export default OutraLista