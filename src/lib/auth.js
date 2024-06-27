import NextAuth from "next-auth";
import Github from "next-auth/providers/github"
import { User } from "./models";
import { connectToDb } from "./utils";
import bcrypt from 'bcryptjs';
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";

const login = async(credentials)=>{
  try{
connectToDb();
const user=await User.findOne({username:credentials.username});
if(!user){
  throw new Error("username not found");
}
const isPasswordCorrect=await bcrypt.compare(credentials.password, user.password);
if(!isPasswordCorrect){
  throw new Error("password is incorrect");
}
return user;
  }catch(err){
    console.log(err);
    throw new Error("Failed to login");
  }
}

  export const {
    handlers:{GET,POST} ,
    auth, signIn, signOut} = NextAuth({
      ...authConfig,
    providers:[
        Github({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
          CredentialsProvider({
            async authorize(credentials){
                    try{
                      const user= login(credentials);
                      return user;
                    }catch(err){
                      return null;
                    }
            }
          })
    ],
    callbacks:{
      async signIn({user, account, profile}){
       

          if(account.provider==="github"){
            
            await connectToDb();
            try{
              const user=await User.findOne({email:profile.email});
              if(!user){
                const newuser=new User({
                  username:profile.login,
                  email:profile.email,
                  image:profile.avatar_url,
                });
                await newuser.save();
              }
            }catch(err){
              console.log(err);
              return false;
            }
             
          }
          return true;
      },
      ...authConfig.callbacks,
    }
  })