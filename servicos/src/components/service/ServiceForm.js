
import { useEffect, useState } from "react"
import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"


function ServiceForm({btnText}){

    const [categories, setCategories] = useState([])

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


    return (
        <form>
            <Input 
                type='text' 
                text='Nome do Serviço' 
                name='name' 
                placeholder='Insira o nome do serviço'
            />
             <Input 
                type='text' 
                text='Nome do Serviço' 
                name='name' 
                placeholder='Insira o orçamento do serviço'
                />
            <Select name='category_id' text='Selecione a categoria' options={categories}/>
            <SubmitButton text={btnText}/>

        </form>
    )
}
export default ServiceForm