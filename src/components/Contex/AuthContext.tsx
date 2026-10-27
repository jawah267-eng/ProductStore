import { createContext, type ReactNode } from "react";

interface User{}
interface AuthContextType{
    user :User| null;
    login:(email:string , password :string)=>Promis<void>
    
}
const data={

}
const AuthContextType= createContext<AuthContextType | null>(null);
export function  AuthProvider({children}:{children :ReactNode}){
    const login=({email}){
        const user={
            id:data.id;
            username:data.username;
            email:data.email;

        }
        const token
    }
return (
  <AuthContext/>
)
}