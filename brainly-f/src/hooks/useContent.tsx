import { useEffect, useState } from "react";
import { BACK_URL } from "../config";
import axios from "axios";


interface Content {
  _id: string;
  type: string;
  link: string;
  title: string;
}


export function useContent(){
  const [contents , setContents] = useState<Content[]>([]);

  useEffect(()=>{

      axios.get(`${BACK_URL}/api/v1/content`,{
        headers:{
          "Authorization":localStorage.getItem("token")
        }
      })
          .then((response)=>{
            setContents(response.data.content)
          })



  },[])

  console.log(contents);
  

  return {contents,setContents};
}