import { useInView } from 'react-intersection-observer';

import {DrawerMenuBtn} from "../atoms/DrawerMenuBtn"
export const Header = () => {
    const { ref, inView } = useInView({
        /* Optional options */
        threshold: 0,
    });
    return (
        <>
            
            <div className={inView? "w-full sticky top-0 z-40 bg-white h-[60px] duration-300": "w-full sticky top-0 z-40 bg-white h-[60px] duration-300 shadow-sm"}>
                <div className='flex'>

                </div>
                 <DrawerMenuBtn />
            </div>
            <div className="w-full h-[0px]" ref={ref}></div>
        </>
    )
}  