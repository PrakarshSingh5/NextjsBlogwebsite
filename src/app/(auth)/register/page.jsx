
import styles from './register.module.css';
import RegisterForm from '@/components/registerform/RegisterForm'

const About=()=>{
    return (
        <div className={styles.container}>
             <div className={styles.wrapper}>
              <RegisterForm/>
             </div>
        </div>
    )
}
export default About