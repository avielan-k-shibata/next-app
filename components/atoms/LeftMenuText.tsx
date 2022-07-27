import { ReactNode } from 'react';
import Link from 'next/link';
type Props = {
    link: string,

    children?: ReactNode;
};
export const LeftMemuText = ({link, children}: Props) => {
    switch(link){
        case "none":
            return <li className="menu-title"><span>{children}</span></li>
        default:
            return (
                <li>
                    <Link href={link} className="flex gap-4"><a><span className="flex-1">{children}</span></a></Link>
                </li>
            )
    }
}  