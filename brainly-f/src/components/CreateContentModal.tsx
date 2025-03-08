import { useState } from "react"



export function CreateContentModal({open , onClose}){
  const [modalOpen , setModalOpen] = useState(false);
    return(
    <>
      <div>

        {open && <div className="w-screen h-screen   fixed top-0 left-0 flex justify-center items-center">

            <div className="flex flex-col justify-center bg-red-900 opacity-100">
              <span className=" bg-red-950  border-black bottom-2 h-96 w-80 p-2" >
                  <div className="flex cursor-pointer text-white justify-end" onClick={onClose}>
                      X
                  </div>

                  <div>
                    <Input placeholder="title" />
                    <Input placeholder="link"/>

                  </div>

              </span>
            </div>


        </div>  }

      </div>
    </>
  )
}


function Input({onChange ,placeholder}:{onChange: ()=> void}){
  return(
    <input placeholder={placeholder} type="text" className="px-4 py-2" onChange={onChange} />
  )
}