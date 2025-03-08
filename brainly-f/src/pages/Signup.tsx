import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/CreateContentModal";
import axios from "axios";
import { BACK_URL } from "../config";


export function Signup(){

  const usernameRef = useRef<any>("");
  const passwordRef = useRef<any>("");

  
  

  async function signup(){
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;7
    console.log(username);
    
    await axios.post(BACK_URL+"/api/v1/signup" ,{
        username,
        password
      
    })

      alert("signed up");
  }



  return(
    <div className="bg-purple-800 w-screen h-screen flex flex-row justify-center items-center">
      <div className="h-56 w-72 bg-purple-300 pt-2 rounded-md ">

         <Input type="text" reference={usernameRef} placeholder="username"/>
         <Input type="password" reference={passwordRef} placeholder="password"/>

          <div className="flex justify-center pt-4">
          <Button onClick={()=>signup()} variant="primary" text="Sign Up" /> 
          </div>

      </div>
    </div>
  )
}