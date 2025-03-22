import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/CreateContentModal";
import axios from "axios";
import { BACK_URL } from "../config";
import {  useNavigate } from "react-router-dom";


export function Signup(){

  const usernameRef = useRef<any>("");
  const passwordRef = useRef<any>("");

  const navigate = useNavigate();
  
  

  async function signup() {
    try {
      const username = usernameRef.current?.value;
      const password = passwordRef.current?.value;

      if (!username || !password) {
        alert("Please fill in all fields");
        return;
      }

      const response = await axios.post(`${BACK_URL}/api/v1/signup`, {
        username,
        password,
      });
      console.log(response);
      

      alert("Signed up successfully");
      navigate("/signin");
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
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
                      Sign Up
                    </div>

                    <div className="flex justify-center font-nunito mt-1 text-[15px] text-white/60">
                    <span>Create your profile</span>
                    </div>
                    
                    <br />
                      <div>
                        <div className="text-sm mt-3 text-white font-nunito font-medium">
                          Username :
                        </div>
                      <Input reference={usernameRef} placeholder="username"/>
                      </div>

                      

                      <div className="mt-2">
                      <div className="text-sm text-white font-nunito font-medium">
                          Password :
                        </div>
                      <Input type="password" reference={passwordRef} placeholder="password"/>
                        
                      </div>

                      {/* <div className="text-white/60">
                      Don't have an account yet? <span className="text-orange-500"><Link  to="/signup">Sign Up</Link></span>
                      </div> */}

                      <div className="flex justify-center pt-4">
                      <Button onClick={signup} variant="sign" text="Sign Up" /> 
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