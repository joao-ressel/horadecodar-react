import styles from '../service/ServiceCard.module.css'
import {BsFillTrashFill} from 'react-icons/bs'
function TaskCard({id, name, cost, description, handleRemove}){

    const remove = (e) =>{
        e.preventDefault()
        handleRemove(id)
    }
    return(
        <div className={styles.service_card}>
            <h4>{name}</h4>
            <p>
                <span>Custo total:</span> R${cost}
            </p>
            <p>{description}</p>
            <div className={styles.service_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill/> Excluir
                </button>
            </div>
        </div>
    )
}
export default TaskCard