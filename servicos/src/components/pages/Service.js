import { useParams } from 'react-router-dom'
import styles from './Service.module.css'
import { useEffect, useState } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ServiceForm from '../service/ServiceForm'
import Message from '../layout/Message'
function Service(){

    const {id}= useParams()

    const [service, setService] = useState([])
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [showTaskForm, setShowTaskForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()

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

    function editPost(service){
        if(service.budget < service.cost){
            //mensagem
        }
        fetch(`http://localhost:5000/services/${service.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(service),
        })
        .then((resp)=> resp.json())
            .then((data)=>{
                setService(data)
                setShowServiceForm(false)
                setMessage('Serviço Atualizado!')
                setType('success')
            })
            .catch((err)=> console.log(err))
    }

    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }
    function toggleTaskForm(){
        setShowTaskForm(!showServiceForm)
    }
    
    return(
        <>
            {service.name ? (
            <div className={styles.service_details}>
                <Container customClass="column">
                    {message && <Message type={type} msg={message}/>}
                    <div className={styles.details_container}>
                        <h1>Serviço: {service.name}</h1>
                        <button 
                        className={styles.btn} 
                        onClick={toggleServiceForm}>
                            {!showServiceForm ? 'Editar serviço': 'Fechar serviço'}
                        </button>
                        {!showServiceForm ? (
                        <div className={styles.service_info}>
                            <p><span>Categoria:</span>{service.category.name}</p>
                            <p><span>Total de Orçamento:</span>R${service.budget}</p>
                            <p><span>Total de Utilizado:</span>R${service.cost}</p>
                        </div>) : (
                            <div className={styles.service_info}>
                                <ServiceForm handleSubmit={editPost} btnText="Salvar" serviceData={service}/>
                            </div>
                        )}
                    </div>
                    <div className={styles.tasks_form_container}>
                            <h2>Adicione uma Tarefa:</h2>
                            <button 
                            className={styles.btn} 
                            onClick={toggleTaskForm}>
                                {!showTaskForm ? 'Adicionar Tarefa': 'Fechar'}
                            </button>
                            <div className={styles.service_info}>
                                {showTaskForm && <div>Formulário</div>}
                            </div>
                    </div>
                        <h2>Tarefas</h2>
                        <Container customClass='start'>
                            <p>Itens de Tarefas</p>
                        </Container>
                </Container>
            </div>
           ) :( <Loading/>
            )}   
        </>    
    )
    
}
export default Service