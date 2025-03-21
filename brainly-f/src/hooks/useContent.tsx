import { useEffect, useState } from "react";
import { BACK_URL } from "../config";
import axios from "axios";


export function useContent(){
  const [contents , setContents] = useState([]);

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