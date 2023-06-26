import styles from './Newservice.module.css'
import ServiceForm from '../service/ServiceForm'
function NewService(){
    return (
        <div className={styles.newservice_container}>
            <h1 >Criar Seviço</h1>
            <ServiceForm btnText='Criar Serviço'/>
        </div>
    )
}
export default NewService