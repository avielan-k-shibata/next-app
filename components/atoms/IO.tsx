import { ReactNode } from 'react';
import { useInView, InView  } from 'react-intersection-observer';
type Props = {
    c_name: string;
    children?: ReactNode;
};

export const IO = ({c_name, children}: Props)=>{
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true,
    });
    const p_class = `${c_name} inview`
    return inView? <span className={p_class} ref={ref}>{children}</span>:<span className={c_name} ref={ref}>{children}</span>
}  