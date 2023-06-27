import { useLocation } from "react-router-dom"
import Message from "../layout/Message"
import styles from './Services.module.css'
import LinkButton from "../layout/LinkButton"
import Container from "../layout/Container"
import ServiceCard from "../service/ServiceCard"
import Loading from '../layout/Loading'
import { useEffect, useState } from "react"

function Services(){

    const [services, setServices] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [serviceMessage, setServiceMessage] = useState('')

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(()=>{
        setTimeout(()=>{//exibir loader
            fetch('http://localhost:5000/services', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            })
        .then((resp)=> resp.json())
        .then((data)=>{
            setServices(data)
            setRemoveLoading(true)
        })
        .catch((err)=> console.log(err))
        }, 1000)
    },[])

    function removeService(id){
        fetch(`http://localhost:5000/services/${id}`, {
            method: 'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
        .then(data =>{
            setServices(services.filter((service) => service.id !== id))
            setServiceMessage('Serviço removido com Sucesso!')
        })
        .catch(err => console.log(err))
    }

    return (
        
        <div className={styles.service_container}>
            <div className={styles.title_container}>
                <h1>Meus Serviços</h1>
                <LinkButton to="/newservice" text='Criar Serviço'/>
            </div>
            {message && <Message msg={message} type="success"/>}
            {serviceMessage && <Message type="success" msg={serviceMessage}/>}
            <Container customClass="start">
                {services.length > 0 && services.map((service)=>(
                    <ServiceCard 
                        id={service.id}
                        name={service.name}
                        budget={service.budget}
                        category={service.category.name}
                        key={service.id}
                        handleRemove={removeService}/>
                ))}
                {!removeLoading && <Loading/>}
                {removeLoading && services.length ===0 &&
                    <p>Não há serviços cadastrados</p>
                }
            </Container>
        </div>
        
    )
}
export default Services