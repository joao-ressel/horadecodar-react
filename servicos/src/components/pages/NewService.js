import styles from './Newservice.module.css'
import ServiceForm from '../service/ServiceForm'
import { useNavigate } from 'react-router-dom';
function NewService(){

    const navigate = useNavigate();

    function createPost(service){

        // initialize cost and services
        service.cost = 0
        service.task = []

        fetch("http://localhost:5000/services", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(service),
        })
        .then((resp) => resp.json())
        .then((data)=>{
            console.log(data)
            // redirect
            navigate('/services',{state: {message: "Serviço criado com sucesso"}})
        })
        .catch((err) => console.log(err))
    }

    return (
        <div className={styles.newservice_container}>
            <h1 >Criar Seviço</h1>
            <ServiceForm handleSubmit={createPost} btnText='Criar Serviço'/>
        </div>
    )
}
export default NewService