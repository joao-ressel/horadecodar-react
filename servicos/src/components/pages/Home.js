import LinkButton from '../layout/LinkButton'
import styles from './Home.module.css'
import img from '../../img/Ativo.png'
function Home(){
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo ao <span>Our Services</span></h1>
            <p>Comece a gerenciar os seus serviços agora mesmo!</p>
            <LinkButton to="/newservice" text='Criar Serviço'/>
            <img src={img} alt='Money'/>
        </section>
    )
}
export default Home