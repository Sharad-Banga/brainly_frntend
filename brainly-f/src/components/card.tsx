import { ShareIcon } from "../icons/ShareIcon"


export const Card = () =>{
  return(
    <>
        <div className="p-4 bg-red rounded-md  border-gray-300 max-w-72 border-2">
                  <div className="flex justify-between flex-row items-center ">
                            <div className="flex">
                              <div className="pr-2">
                                <ShareIcon/>
                              </div>
                              
                              Project Ideas
                            </div>

                              <div className="flex">

                                  <div className="pr-2 text-gray-500">
                                    <ShareIcon/>
                                  </div>
                                  <div className="text-gray-500">
                                    <ShareIcon/>
                                  </div>

                              </div>
                  </div>























                  
        </div>
    </>
  )
}