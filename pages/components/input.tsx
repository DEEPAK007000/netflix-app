import React from "react";


interface inputprops {
id: string;
onchange: any;
value: string;
Label:string;
type?: string;


}
 
const input: React.FC<inputprops> = ({
  id,
  onchange,
  value,
  Label,
  type

}) => {
return ( 
  <div className="relative">
<input
onChange={onchange}
value={value}
type={type}

    id="email"
     className="
    block
    rounded-md
    px-6
    pt-6
    pb-1
    w-full
    text-md
    text-white
    bg-natural-700
    apperence-none
    focus:outline-none
    focus:ring-0
    peer
"
placeholder=""
/>
<Label 
className="
absoulate
text-md
text-zinc-400
duration-150
transfrom
-translate-y-3
scale-75
top-4
z-10
origin-[0]
left-6
peer-placeholder-shown:scale-100
peer-placeholder-shown:translate-y-0
peer-focus:scale-75
peer-focus:-translate-y-3
"

htmlFor={id}>
  {<Lable}
</Label>
</div>
)

}

export default input; 