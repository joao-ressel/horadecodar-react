import { useParams } from 'react-router-dom'
import styles from './Service.module.css'
import { useEffect, useState } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
function Service(){

    const {id}= useParams()
    console.log(id)

    const [service, setService] = useState([])
    const [showServiceForm, setShowServiceForm] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            fetch(`http://localhost:5000/services/${id}`,{
                method:'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((resp)=> resp.json())
            .then((data)=>{
                setService(data)
            })
            .catch((err)=> console.log(err))
            }, 1000)
    },[id])

    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }
    
    return(
        <>
            {service.name ? (
            <div className={styles.service_details}>
                <Container customClass="column">
                    <div className={styles.details_container}>
                        <h1>Serviço: {service.name}</h1>
                        <button className={styles.btn} onClick={toggleServiceForm}>{!showServiceForm ? 'Editar serviço': 'Fechar serviço'}</button>
                        {!showServiceForm ? (
                        <div className={styles.service_info}>
                            <p><span>Categoria:</span>{service.category.name}</p>
                            <p><span>Total de Orçamento:</span>R${service.budget}</p>
                            <p><span>Total de Utilizado:</span>R${service.cost}</p>
                        </div>) : (
                            <div className={styles.service_info}>
                                <p>Formulário</p>
                            </div>
                        )}
                    </div>
                </Container>
            </div>
           ) :( <Loading/>
            )}   
        </>    
    )
    
}
export default Service