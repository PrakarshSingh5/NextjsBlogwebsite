"use client"
import React from 'react'
import styles from './adminUserForm.module.css'
import {useFormState} from 'react-dom'
import { addUser } from '@/lib/action'
const AdminUserForm = ({userId}) => {
  const [state, formAction]=useFormState(addUser, undefined);
  
  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
  
      <input type='text' name='username' placeholder='username'/>
      <input type='email' name='email' placeholder='email'/>
      <input type='password' name='password' placeholder='password'/>
      <input type='text' name='img' placeholder='img'/>
      <select name='isAdmin'>
        <option value="false">isAdmin?</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select>
      <button>Add</button>
      {state && state.error}
    </form>
  )
}

export default AdminUserForm
