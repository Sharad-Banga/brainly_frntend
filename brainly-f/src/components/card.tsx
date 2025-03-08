import { ShareIcon } from "../icons/ShareIcon"


interface CardProps {
  title : string;
  link : string;
  type: "twitter" | "youtube";
}

export const Card = ({title,link,type}:CardProps) =>{
  return(
    <>
    
        <div className="p-4 bg-slate-300 rounded-md  border-gray-300 max-w-72 border-2 h-full">
                  <div className="flex justify-between flex-row items-center ">
                            <div className="flex">
                              <div className="pr-2">
                                <ShareIcon/>
                              </div>
                              
                              {title}
                            </div>

                              <div className="flex">

                                  <div className="pr-2 text-gray-500">

                                    <a href={link}>
                                      <ShareIcon/>
                                      </a>
                                  </div>
                                  <div className="text-gray-500">
                                    <ShareIcon/>
                                  </div>

                              </div>

                              
                  </div>


                <div className="pt-5">
                  { type=="youtube" &&    <iframe className="w-full h-full" width="560" height="315" src={link.replace("youtu.be","www.youtube.com/embed")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  }
                 
                      
                { type=="twitter" &&    <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com","twitter.com")}></a> 
                </blockquote>}

                

                  </div>  


















                  
        </div>
    </>
  )
}