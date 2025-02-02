import Image from "next/image";
import styles from './singlepost.module.css'
import Postuser from "@/components/postuser/Postuser";
import { getPost } from "@/lib/data";
import { Suspense } from 'react';
// FETCH DATA WITH AN API
const getData=async (slug)=>{
  const res=await fetch(`http://localhost:3000/api/blog/${slug}`);
  if(!res.ok){
    throw new Error("something went wrong");
  }
  return res.json();
};


export const generateMetadata=async({params})=>{
  const {slug}=params;

  const post=await getPost(slug);
  return {
    title:post.title,
    description:post.desc,
  }
}

const SinglePostPage = async ({ params }) => {
 const {slug}=params;
//  const post=await getPost(slug);
  // const post=await getBinaryMetadata(slug);
  const post=await getData(slug);

  return (
    <div className={styles.container}>
    
        <div className={styles.imgContainer}>
          {/* <Image src={post.img} alt="" fill className={styles.img} /> */}
          <Image src={post.img} alt="" fill className={styles.img}/>
        </div>
    
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          { post&& (
            <Suspense fallback={<div>Loading...</div>}>
              <Postuser userId={post.userId}/>
            </Suspense>
          )
           }
       
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4,16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;