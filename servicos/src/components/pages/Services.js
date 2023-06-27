import { useLocation } from "react-router-dom"
import Message from "../layout/Message"

function Services(){

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    return (
        <div>
            <h1>Meus Serviços</h1>
            {message && <Message msg={message} type="success"/>}
        </div>
        
    )
}
export default Services