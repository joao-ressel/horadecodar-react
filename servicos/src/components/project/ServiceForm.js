import Input from "../form/Input"
import Select from "../form/Select"
import SubmitButton from "../form/SubmitButton"
function ProjectForm({btnText}){
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
            <Select name='category_id' text='Selecione a categoria'/>
            <SubmitButton text={btnText}/>

        </form>
    )
}
export default ProjectForm