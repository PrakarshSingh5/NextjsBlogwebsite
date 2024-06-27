import Image from 'next/image';
import styles from './home.module.css'
const Home=()=>{
    return <div className={styles.container}>
        <div className={styles.textcontainer}>
        <h1 className={styles.title}>Creative Thoughts Agency</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam numquam ullam corrupti, iste obcaecati eum consequuntur tenetur deserunt odio vitae rem, delectus quaerat?</p>
      <div className={styles.buttons}>

        <div className={styles.button}>Learn More</div>
        <div className={styles.button}>Contact</div>
        </div>
        <div className={styles.brands}>
            <Image src="/brands.png" alt="" fill className={styles.brandimage} />
           
        </div>
      </div>
        <div className={styles.imagecontainer}>
        <Image src="/hero.gif" alt="" fill className={styles.heroImg} />
        </div>
    </div>
}
export default Home;