import { useEffect, useState } from "react"
import styles from "./Message.module.css"

function Message({type, msg}){
    const [visible, setVisible] = useState(false)

    useEffect(()=> {
        if(!msg){//se nao tem mensagem, não aparece
            setVisible(false)
            return
        }
        setVisible(true)

        const timer = setTimeout(()=>{
            setVisible(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [msg])

    return (
        <>
            {visible && (
                <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
            )}
        </>
    )
}
export default Message