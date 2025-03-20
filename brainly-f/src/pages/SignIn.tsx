import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/CreateContentModal";
import { BACK_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export function SignIn(){

  const usernamesRef = useRef<any>("");
  const passwordsRef = useRef<any>("");
  const navigate = useNavigate();

  async function signin(){
    const username = usernamesRef.current.value;
    const password = passwordsRef.current.value;

    const response = await axios.post(BACK_URL+"/api/v1/signin",{
      username,
      password
    })

    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } else if (response.data.message) {
      alert(response.data.message); 
    }
  }


  return(
    <div className="w-screen h-screen flex flex-row justify-center items-center">
      <div className="h-56 w-72 bg-red-300 pt-2 rounded-md ">

         <Input reference={usernamesRef} placeholder="username"/>
         <Input reference={passwordsRef} placeholder="password"/>

          <div className="flex justify-center pt-4">
          <Button onClick={signin} variant="primary" text="Sign In" /> 
          </div>

      </div>
    </div>
  )
}