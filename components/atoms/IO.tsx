import { ReactNode } from 'react';
import { useInView } from 'react-intersection-observer';
type Props = {
    c_name: string;
    as: string;
    children?: ReactNode;
};

export const IO = ({ c_name, as, children }: Props) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
        triggerOnce: true,
    });
    const p_class = `${c_name} inview`

    switch (as) {
        case "span":
            return inView ? <span className={p_class} ref={ref}>{children}</span> : <span className={c_name} ref={ref}>{children}</span>
        case "a":
            return inView ? <a className={p_class} ref={ref}>{children}</a> : <a className={c_name} ref={ref}>{children}</a>
        case "p":
            return inView ? <p className={p_class} ref={ref}>{children}</p> : <p className={c_name} ref={ref}>{children}</p>
        default:
            return inView ? <div className={p_class} ref={ref}>{children}</div> : <div className={c_name} ref={ref}>{children}</div>
    }

}  