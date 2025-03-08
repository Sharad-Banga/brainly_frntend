import { TwitterIcon } from "../icons/TwitterIcon";
import { YtIcon } from "../icons/YtIcon";
import { SidebarItem } from "./SidebarItem";

export function Sidebar(){
  return(
    <>
      <div className="h-screen pt-4 bg-purple-300 border-r w-72 fixed left-0 top-0">

        <div className="flex  text-3xl text-gray-800 font-mono font-bold mb-8 pl-8 mt-5">
          ARISTOLE
        </div>
        
     <hr />
      <div className="mt-8">

        <SidebarItem text="Twitter" icon={<TwitterIcon/>} />
        <SidebarItem text="Youtube" icon={<YtIcon/>} />

      </div>









      </div>
    </>
  )
}