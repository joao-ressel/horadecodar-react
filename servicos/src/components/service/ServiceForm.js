
import { useEffect, useState } from "react"
import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
import styles from './ServiceForm.module.css'
 

function ServiceForm({ handleSubmit, btnText, serviceData}){

    const [categories, setCategories] = useState([])
    const [service, setService] = useState(serviceData || {})

    useEffect(()=>{
        fetch("http://localhost:5000/categories",{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json',
        },
        })
        .then((resp) => resp.json())
        .then((data)=>{
            setCategories(data)
        })
        .catch((err) => console.log(err))
    }, [])

    const submit = (e) =>{
        e.preventDefault()
        handleSubmit(service)
    }

    function handleChange(e){
        setService({...service, [e.target.name]: e.target.value})//vai mudando o valor de acordo com as alterações feitas no input
    }
    function handleCategory(e){
        setService({
            ...service,
            category:{//inserindo como se fosse um docmento de banco nao relacional
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type='text' 
                text='Nome' 
                name='name' 
                placeholder='Insira o nome do serviço'
                handleOnChange={handleChange}
                value={service.name ? service.name : ''}
            />
             <Input 
                type='number' 
                text='Orçamento' 
                name='budget' 
                placeholder='Insira o orçamento do serviço'
                handleOnChange={handleChange}
                value={service.budget ? service.budget : ''}
                />
            <Select 
            name='category_id' 
            text='Selecione a categoria' 
            options={categories}
            handleOnChange={handleCategory}
            value={service.category ? service.category.id : ''}/>
            <SubmitButton text={btnText}/>

        </form>
    )
}
export default ServiceForm