import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { v4 as uuidv4} from 'uuid'
import styles from './Service.module.css'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import Message from '../layout/Message'

import TaskForm from '../task/TaskForm'
import TaskCard from '../task/TaskCard'

import ServiceForm from '../service/ServiceForm'
function Service(){

    const {id}= useParams()

    const [service, setService] = useState([])
    const [tasks, setTasks] = useState([])
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
                setTasks(data.tasks)
            })
            .catch((err)=> console.log(err))
            }, 300)
    },[id])

    function editPost(service){
        setMessage('')
        if(service.budget < service.cost){
            setMessage('O orçamento não pode ser menor que o custo do serviço!')    
            setType('error')
            return false


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

    function createTask(service){
        //pegar ultima tarefa
        const lastTask = service.tasks[service.tasks.length - 1]
        lastTask.id = uuidv4()

        const lastTaskCost = lastTask.cost

        const newCost = parseFloat(service.cost) + parseFloat(lastTaskCost)

        //valor maximo da tarefa com validação
        if(newCost > parseFloat(service.budget)){
            setMessage('Orçamento ultrapassado, verifique o valor do serviço')
            setType('error')
            service.tasks.pop()
            return false
        }

        //adicionar custo da tarefa no serviço
        service.cost = newCost

        //update do serviço
        fetch(`http://localhost:5000/services/${service.id}`, {
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(service),
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            setShowTaskForm(false)
        })
        .catch((err)=> console.log(err))
    }

    function removeTask(id, cost){
        const tasksUpdate = service.tasks.filter(
            (task) => task.id !== id
        )
        const serviceUpdate = service

        serviceUpdate.tasks = tasksUpdate
        serviceUpdate.cost = parseFloat(serviceUpdate.cost) + parseFloat(cost)

        fetch(`http://localhost:5000/services/${serviceUpdate.id}`,{
            method: 'PATCH',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceUpdate)
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            setService(serviceUpdate)
            setTasks(tasksUpdate)
            setMessage('Tarefa removida com sucesso!')
        })
        .catch((err)=> console.log(err))
    }

    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }
    function toggleTaskForm(){
        setShowTaskForm(!showTaskForm)
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
                            <p><span>Categoria: </span>{service.category.name}</p>
                            <p><span>Total de Orçamento: </span>R${service.budget}</p>
                            <p><span>Total Utilizado: </span>R${service.cost}</p>
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
                                {showTaskForm && (<TaskForm
                                    handleSubmit={createTask}
                                    btnText="Salvar Tarefa" 
                                    serviceData={service}   
                                />)}
                            </div>
                    </div>
                        <h2>Tarefas</h2>
                        <Container customClass='start'>
                            {tasks.length > 0 &&
                                tasks.map((task) =>(
                                    <TaskCard
                                    id={task.id}
                                    name={task.name}
                                    cost={task.cost}
                                    description={task.description}
                                    key={task.id}
                                    handleRemove={removeTask}
                                    />
                                ))}
                            {tasks.length === 0 && <p> Não há tarefas cadastradas</p>}
                        </Container>
                </Container>
            </div>
           ) :( <Loading/>
            )}   
        </>    
    )
    
}
export default Service