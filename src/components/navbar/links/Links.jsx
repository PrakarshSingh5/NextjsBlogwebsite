"use client"

import {useState} from 'react'
import styles from "./links.module.css"
import NavLink from "./navbarlinks/navlink"
import {handleLogout} from '@/lib/action'
import Image from 'next/image'
const links=[
    {
            title:"Home",
            path:"/"
    },
    {
        title:"About",
        path:"/about"
    },{
                 title:"Contact",
        path:"/contact"
    },{
        title:"Blog",
path:"/blog"
}
];

const Links=({session})=>{
    const [open, setOpen]=useState(false)

    return (
        <div className={styles.container}>
            
       <div className={styles.link}>
     {links.map(link=>(
         <NavLink item={link} key={link.title} />
        )
    )}
     
     {session?.user ?(
         <>{
            
             session.user?.isAdmin &&  <NavLink item={{title:"Admin", path:"/admin"}}/>}
             <form action={handleLogout}>
                     <button className={styles.logout} >Logout</button>      
             </form>
          
            
        </>
     ):(
         <NavLink item={{title:"Login", path:"/login"}}/>
        )}
       </div>
       {/* <button className={styles.menubtn} }>Menu</button> */}
       <Image src="/menu.png" alt="" width={30} height={30} onClick={()=>setOpen((prev)=>!prev)} className={styles.menubtn}/>
      {open && (<div className={styles.mobileLinks}>
        {links.map((link)=>(
            <NavLink item={link} key={link.title}/>
        ))}
      </div>)}
        </div>
      
    )
}
export default Links