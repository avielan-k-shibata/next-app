
import {IO} from "../atoms/IO"

export const Footer = ()=>{
    const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        console.log(event);
      };
    return <>
    <IO as="span" c_name="ddd">aaaaa</IO>
    <button onClick={handleClick}>Click</button>
    </>
}  