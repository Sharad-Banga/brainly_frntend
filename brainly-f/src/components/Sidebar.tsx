import { TwitterIcon } from "../icons/TwitterIcon";
import { YtIcon } from "../icons/YtIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
  return(
    <>
      <div className="h-screen pt-4 bg-white/5 backdrop-blur-3xl
       border-r border-white/5 w-72 fixed left-0 top-0">

        <div className="flex  text-3xl text-white justify-center font-mono font-bold mb-8  mt-5">
          ARISTOLE
        </div>
        
     <div className="">
      <hr />
     </div>
      <div className="mt-8 text-white flex-col justify-center ">

        <SidebarItem  text="Twitter" icon={<TwitterIcon/>} />
        <SidebarItem text="Youtube" icon={<YtIcon/>} />

      </div>









      </div>
    </>
  )
}