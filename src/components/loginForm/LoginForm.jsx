"use client"

import styles from './loginForm.module.css'
import {useFormState} from 'react-dom';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { login } from '@/lib/action';

const LoginForm=()=>{
    const [state, fromAction]=useFormState(login, undefined);

    const router=useRouter();
        useEffect(()=>{
            state?.success && router.push("/login");
        },[state?.success,router]);
    return (
             <form className={styles.form} action={fromAction}>
                <input type="text" placeholder="username" name="username"/>
                <input type="text" placeholder="password" name="password"/>
                <button>Login</button>
                {state?.error}
                <Link href="/register">If you have no account? <b>SignUp</b></Link>
            </form>
        
    )

}
export default LoginForm;