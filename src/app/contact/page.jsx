import Image from 'next/image';
import styles from './contact.module.css'
export const metadata = {
    title: ' Contact',
    description: 'Contact Page',
  }
const ContactPage=()=>{
    return (
        <div className={styles.container}>
            <div className={styles.imgcontainer}>
                 <Image className={styles.img} src="/contact.png" alt="" fill/>
            </div>
            <div className={styles.textcontainer}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name and Surname"/>
                    <input type="text" placeholder="Email Address"/>
                    <input type="text" placeholder="Phone Number (Optional)"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Message">

                    </textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage;