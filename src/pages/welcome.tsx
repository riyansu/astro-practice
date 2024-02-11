import { createSignal } from "solid-js";

const RepeatingComponent = () => {
    const [val,setVal] = createSignal(0)
    setInterval(()=>{
        setVal(c => c+1)
    },100)
    return (
        <div style={{"text-align":"center","font-size":`${val()*2+10}px`}}>{val()}</div>
    );
};
export default RepeatingComponent