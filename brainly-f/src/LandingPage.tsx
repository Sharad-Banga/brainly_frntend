import { useNavigate } from "react-router-dom";

export const LandingPage =()=>{

  const navigate = useNavigate();

  function handleButton(){
    navigate('/signin');
  }



  return(
    <>
        <div className="h-screen w-screen bg-[url('./images/bg-2.png')] pt-[10%] flex-col flex ">

              <div className="mt-40 sm:mt-0 h-[70%] w-full flex-col justify-center">

                  <h1 className="flex justify-center pt-[5%] tracking-normal  items-center text-5xl sm:text-7xl md:text-8xl select-none " >
                    <div className="text-white font-cmoon ">ARISTOL</div>
                  </h1>



                  <h1 className="text-[13px] font-nunito mt-2 mb-8 sm:mt-0  sm:text-xl md:text-[21px] tracking-wide flex justify-center pt-1 select-none text-[#e4e4fc]">
                    <div className=" font-nunito"
                    >
                      ADD SECONDARY MEMORY TO YOUR BRAIN
                    </div>
                  </h1>



                  <div className=" flex justify-center mt-[2%]">
                        <div onClick={handleButton} className="select-none flex cursor-pointer justify-center items-center h-14 w-32 
               bg-[#2AB7B1] text-white font-bold font-roboto rounded-lg
               shadow-md transition-all duration-300
               hover:bg-[#239e9a] hover:scale-105
               active:scale-95 active:bg-[#1e8682]"
               >
                          Get Started
                        </div>
                  </div>


              </div>





              <div className="mt-auto p-4 text-center text-white text-sm">
                Developed and Designed By <a className="text-[#2AB7B1] hover:text-[#1e8682] transition-colors duration-300" href="https://x.com/sharad_banga" target="_blank" rel="noopener noreferrer">sharad banga</a>
              </div>

        </div>
    </>
  )
}