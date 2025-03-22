import { useRef, useState } from "react"
import { Button } from "./Button";
import axios from "axios";
import { BACK_URL } from "../config";
import { CrossIcon } from "../icons/CrossIcon";



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
    const title = titleRef.current.valuz
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
      <div className="flex justify-center z-10">

        {open && <div className="w-screen h-screen z-20 bg-black/75 fixed top-0 left-0 flex justify-center items-center">

            <div className="flex flex-col justify-center  opacity-100">
              <span className=" bg-black/60 backdrop-blur-md   bottom-2 h-98 border-white/10 border-2 rounded-lg w-[120%] p-2 " >
                  <div className="flex cursor-pointer text-white justify-end" onClick={onClose}>
                      <CrossIcon/>
                  </div>

                  <div className="w-full ">


                    <div className="w-[83%] flex ml-[7%] ">
                        
                        <Input reference={titleRef} type="text" placeholder="title" />
                    </div>

                    <div className="w-[83%] flex ml-[7%] ">
                      <Input reference={linkRef} type="text" placeholder="link"/>

                    </div>

                  
                  </div>

                  <div className="flex justify-center  mt-5 text-[13px] mb-3 text-white/80">
                  <h1>Select Type</h1>
                  </div>
                  <div className="flex justify-center gap-4 mt-2">
                    <Button text="Youtube" variant={type === ContentType.Youtube?"clicked":"nclicked"} onClick={()=>setType(ContentType.Youtube)} />
                    <Button text="Twitter" variant={type === ContentType.Twitter?"clicked":"nclicked"} onClick={()=>setType(ContentType.Twitter)} />
                    <Button text="Link" variant={type === ContentType.Link?"clicked":"nclicked"} onClick={()=>setType(ContentType.Link)} />
                  </div>

                  <div className="flex justify-center mt-6" >
                  <Button onClick={addContent} variant="submit" text="Submit"  />

                  </div>

              </span>
            </div>


        </div>  }

      </div>
    </>
  )
}


export function Input({reference,placeholder,type,widthh}:{ placeholder:string; type?:string; reference:any,widthh?:any}){
  return(
    <input ref={reference}  placeholder={placeholder} type={type} className={`w-full p-2 mt-2 mb-2 rounded-md bg-black/30 text-white border border-white/10 w${widthh} outline-none  w-64`}/>
  )
}