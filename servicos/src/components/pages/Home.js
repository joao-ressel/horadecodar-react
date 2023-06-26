import LinkButton from '../layout/LinkButton'
import styles from './Home.module.css'

function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Our Services</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newservice" text='Criar Serviço'/>
        </section>
    )
}
export default Home