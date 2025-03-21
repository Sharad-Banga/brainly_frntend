import { useRef, useState } from "react"
import { Button } from "./Button";
import axios from "axios";
import { BACK_URL } from "../config";



 enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
  Link = "Link"
 }

export function CreateContentModal({open , onClose}){

// const [itemCountInc ,setItemCountInc] = useState(0);


  const titleRef = useRef<any>("");
  const linkRef = useRef<any>("");
  const [type , setType] = useState(ContentType.Youtube);

  async function addContent(){
    const title = titleRef.current.value;
    const link = linkRef.current.value;

    await axios.post(`${BACK_URL}/api/v1/content`,{
      title,
      link,
      type
    },{
      headers:{
        "Authorization": localStorage.getItem("token")
      }
    })
    onClose();
    // setItemCountInc(r=>r+1);
    window.location.reload();
    console.log("hehehehehe",type);
    
  }



    return(
    <>
      <div className="flex justify-center">

        {open && <div className="w-screen h-screen   fixed top-0 left-0 flex justify-center items-center">

            <div className="flex flex-col justify-center  opacity-100">
              <span className=" bg-purple-400   bottom-2 h-98 border-purple-700 border-4 rounded-lg w-80 p-2 " >
                  <div className="flex cursor-pointer text-white justify-end" onClick={onClose}>
                      X
                  </div>

                  <div className="w-72">
                    <Input reference={titleRef} type="text" placeholder="title" />
                    <Input reference={linkRef} type="text" placeholder="link"/>
                  
                  </div>

                  <div className="flex justify-center mt-4">
                  <h1>Type</h1>
                  </div>
                  <div className="flex justify-center gap-8 mt-2">
                    <Button text="Youtube" variant={type === ContentType.Youtube?"primary":"secondary"} onClick={()=>setType(ContentType.Youtube)} />
                    <Button text="Twitter" variant={type === ContentType.Twitter?"primary":"secondary"} onClick={()=>setType(ContentType.Twitter)} />
                    <Button text="Link" variant={type === ContentType.Link?"primary":"secondary"} onClick={()=>setType(ContentType.Link)} />
                  </div>

                  <div className="flex justify-center mt-3" >
                  <Button onClick={addContent} variant="primary" text="Submit"  />

                  </div>

              </span>
            </div>


        </div>  }

      </div>
    </>
  )
}


export function Input({reference,placeholder,type,widthh}:{ placeholder:string; type:string; reference:any}){
  return(
    <input ref={reference}  placeholder={placeholder} type={type} className={`p-3 m-3 w${widthh} outline-none  w-64`}/>
  )
}