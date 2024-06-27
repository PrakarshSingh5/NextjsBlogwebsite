"use server";
import { connectToDb } from "./utils";
import { signIn ,signOut} from "./auth";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import bcrypt, { genSalt } from 'bcryptjs'

export const addPost =async(previousState,formdata)=>{
   


    const {title,desc,slug,userId}=Object.fromEntries(formdata);
    try{
        connectToDb();
        const newPost=new Post({
            title,
            desc,
            slug,
            userId,
        });
            await newPost.save();
         
            console.log("saved to db");
            revalidatePath("/blog");
            revalidatePath("/admin");
    }catch(err){
        console.log(err);
        return {error:"something went wrong"};
    }
};

//delete the post
export const deletePost =async(formdata)=>{
  
    const {id}=Object.fromEntries(formdata);
    try{
        connectToDb();
           
            await Post.findByIdAndDelete(id);
           
            console.log("deleted succefully");
            revalidatePath("/blog");
            revalidatePath("/admin");
    }catch(err){
        console.log(err);
        return {error:"something went wrong"};
    }
};

//add the user
export const addUser =async(previousState, formdata)=>{

    const {username, email, password, img}=Object.fromEntries(formdata);
    try{
        connectToDb();
        const newUser=new User({
           username,email,password,img
        });
            await newUser.save();
         
            // console.log("saved to db");
            revalidatePath("/admin");
    }catch(err){
        console.log(err);
        return {error:"something went wrong"};
    }
};

//delete the user
export const deleteUser =async(formdata)=>{
  
    const {id}=Object.fromEntries(formdata);
    try{
        connectToDb();
           
            await Post.deleteMany({userId:id});
            await User.findByIdAndDelete(id);
            console.log("deleted succefully");
            revalidatePath("/admin");
    }catch(err){
        console.log(err);
        return {error:"something went wrong"};
    }
};

//github login
export const handleGithubLogin=async(e)=>{
  
   await signIn("github");
}
//github logout
export const handleLogout=async(e)=>{
    await signOut()
}
//register

export const register=async(previousState, formData)=>{
        const {username,email, password,img, passwordRepeat}=Object.fromEntries(formData);
        if(password!==passwordRepeat){
            return {error:"Password doesn't match"};
        }
        try{
            connectToDb();
            const user=await User.findOne({username});
            if(user){
                return {error:"user does not exist"};
            }
            const salt=await genSalt();
            const hashedPassword=await bcrypt.hash(password, salt);
            const newUser=new User({
                username,
                email,
                password:hashedPassword,
                img
            });
            await newUser.save();
            return {success:true}
            
        }catch(err){
            console.log(err);
            return {error: "something went wrong"};
        }
}

//login
export const login=async(previousState,formData)=>{
    const {username,password}=Object.fromEntries(formData);
    try{
       await signIn("credentials", {username, password});

    }catch(err){
        console.log(err);
        if(err.message.includes("CredentialsSignin")){
            return {error:"Invalid username or password"};
        }
       throw err;
    }
}
