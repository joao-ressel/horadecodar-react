import { useLocation } from "react-router-dom"
import Message from "../layout/Message"
import styles from './Services.module.css'
import LinkButton from "../layout/LinkButton"
import Container from "../layout/Container"
import ServiceCard from "../service/ServiceCard"
import { useEffect, useState } from "react"

function Services(){

    const [services, setServices] = useState([])

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(()=>{
        fetch('http://localhost:5000/services', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp)=> resp.json())
        .then((data)=>{
            setServices(data)
        })
        .catch((err)=> console.log(err))
    },[])

    return (
        <div className={styles.service_container}>
            <div className={styles.title_container}>
                <h1>Meus Serviços</h1>
                <LinkButton to="/newservice" text='Criar Serviço'/>
            </div>
            {message && <Message msg={message} type="success"/>}
            <Container customClass="start">
                {services.length > 0 &&
                    services.map((service)=>(
                        <ServiceCard 
                            id={service.id}
                            name={service.name}
                            budget={service.budget}
                            category={service.category.name}
                            key={service.id}
                            />
                            ))}
            </Container>
        </div>
        
    )
}
export default Services