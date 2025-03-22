import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/CreateContentModal";
import { BACK_URL } from "../config";
import axios from "axios";
import { Link,  useNavigate } from "react-router-dom";


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
    <div className="w-screen h-screen flex-col  bg-[url('./images/bg-2.png')]  flex">

      <div className="text-white h-[15%] sm:h-[20%] text-[150%] font-cmoon flex items-center justify-center ">
        ARISTOL
      </div>


            <div className=" h-[60%] pt-[12%] sm:pt-[4%]">
                  <div className="  flex justify-center  h-[400px]">

                  <div className="p-6 pt-6 h-[55vh] sm:h-full w-[90%] sm:w-[45%] bg-black/30 backdrop-blur-2xl rounded-md flex-col border border-white/10">

                    <div className="flex justify-center font-nunito font-bold text-white text-2xl">
                      Sign In
                    </div>

                    <div className="flex justify-center font-nunito mt-1 text-[15px] text-white/60">
                    <span>Log in to your profile</span>
                    </div>
                    
                    <br />
                      <div>
                        <div className="text-sm mt-3 text-white font-nunito font-medium">
                          Username :
                        </div>
                      <Input reference={usernamesRef} placeholder="username"/>
                      </div>

                      

                      <div className="mt-2">
                      <div className="text-sm text-white font-nunito font-medium">
                          Password :
                        </div>
                      <Input type="password" reference={passwordsRef} placeholder="password"/>
                        
                      </div>

                      <div className="text-white/60">
                      Don't have an account yet? <span className="text-orange-500"><Link  to="/signup">Sign Up</Link></span>
                      </div>

                      <div className="flex justify-center pt-4">
                      <Button onClick={signin} variant="sign" text="Sign In" /> 
                      </div>

                  </div>
                  </div>
            </div>

      <div className="mt-auto p-4 text-center text-white text-sm">
                Developed and Designed By <a className="text-[#2AB7B1] hover:text-[#1e8682] transition-colors duration-300" href="https://x.com/sharad_banga" target="_blank" rel="noopener noreferrer">sharad banga</a>
              </div>


    </div>
  )
}