import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../service/ServiceForm.module.css'

function TaskForm({handleSubmit, btnText, serviceData}){

    const [task, setTask] = useState([])

    function submit(e){
        e.preventDefault()
        serviceData.tasks.push(task)
        handleSubmit(serviceData)
    }

    //alterando os estados
    function handleOnChange(e){
        //pegando os names e transformando em cada input e pegando cada valor nos inputs
        setTask({...task, [e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text"
                text="Nova Tarefa"
                name="name"
                placeholder="Insira o nome da Tarefa"
                handleOnChange={handleOnChange}
            />
            <Input 
                type="number"
                text="Custo da tarefa"
                name="cost"
                placeholder="Insira o valor total"
                handleOnChange={handleOnChange}
            />
            <Input 
                type="text"
                text="Descrição da tarefa"
                name="description"
                placeholder="Descreva Tarefa"
                handleOnChange={handleOnChange}
            />
            <SubmitButton text={btnText}/>
        </form>
    )
}
export default TaskForm