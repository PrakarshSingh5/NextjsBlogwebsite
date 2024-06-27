import Image from "next/image"
import styles from './aboutpage.module.css'



export const metadata = {
    title: "About",
    description: 'About Page',
  }

const About=()=>{
    return (
     <div className={styles.container}>
        <div className={styles.textcontainer}>
            <h2 className={styles.subtitle}>About Agency</h2>
            <h1 className={styles.title}>We create Digital idea that are bigger, bolder braver and better</h1>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid explicabo, fugit ad neque suscipit accusamus dolorem minus optio earum consequuntur vero temporibus quo praesentium veniam at corporis ipsa libero a?</p>
            <div className={styles.boxes}>
                <div className={styles.box}>
                <h1>10 K+</h1>
                <p>Years of experience</p>
                </div>
                <div className={styles.box}>
                <h1>10 K+</h1>
                <p>Years of experience</p>
                </div>
                <div className={styles.box}>
                <h1>10 K+</h1>
                <p>Years of experience</p>
                </div>
                
            </div>
        </div>
        <div className={styles.imgContainer}>
            <Image className={styles.img} src="/about.png" alt="About" fill />
        </div>
    </div>
    )
}
export default About