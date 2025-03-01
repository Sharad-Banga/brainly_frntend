


export interface ButtonProps{
  variant : "primary" | "secondary";
  size : "sm"|"md"|"lg";
  text : string;
  startIcon : any;
  endIcon? : any;
  onClick : ()=> void;
}

const variantStyles = {
  "primary":"bg-purple-600 text-white",
  "secondary":"bg-purple-300 text-purple-700"

}

const sizeStyles = {
  "sm":"p-2",
  "md":"p-4",
  "lg":"p-6"

}

const defaultStyles = "rounded-md p-4";

export const Button = (props :ButtonProps) =>{
  return(
    <button className={`${variantStyles[props.variant]} ${defaultStyles} ${sizeStyles[props.size]} flex items-center gap-2 `}
     onClick={props.onClick} > {props.startIcon} {props.text} </button>
  )
}

