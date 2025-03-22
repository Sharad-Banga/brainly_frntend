


export interface ButtonProps{
  variant : "primary" | "secondary"|"sign"|"nclicked"|"clicked"|"submit";
  size? : "sm"|"md"|"lg";
  text : string;
  startIcon? : any;
  endIcon? : any;
  onClick : ()=> void;
}

const variantStyles = {
  "primary":"bg-[#1e8682] text-white",
  "secondary":"bg-[#41c0b6] text-black",
  "sign" : "bg-[#1e8682] w-full flex justify-center text-white",
  "clicked" : "bg-white border-2 border-white/50 p-2 h-2 text-black text-[13px]",
  "nclicked" : "bg-black border-2 border-white/50 text-[12px] h-2 p-2 text-white",
  "submit" : "bg-red-500 w-[85%] flex justify-center h-[10%] mb-4"
}

const sizeStyles = {
  "sm":"p-2",
  "md":"p-4",
  "lg":"p-6"

}

const defaultStyles = "rounded-md p-4";

export const Button = (props :ButtonProps) =>{
  return(
    <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size || 'md']} flex items-center gap-2 `}
     onClick={props.onClick} > {props.startIcon} {props.text} </button>
  )
}

