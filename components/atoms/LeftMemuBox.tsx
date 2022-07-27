
import { ReactNode } from 'react';
type Props = {
    children?: ReactNode;
};
export const LeftMemuBox = ({children}: Props) => {
    return (
        <ul className="menu menu-compact flex flex-col p-0 px-4">
            {children}
        </ul>
        
    )
}  