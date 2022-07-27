
import {LeftMemuBox} from "../atoms/LeftMemuBox"
import {LeftMemuText} from "../atoms/LeftMenuText"
import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};
export const Menu = ()=>{
    return (
        <LeftMemuBox>
            <LeftMemuText link="none">test</LeftMemuText>
            <LeftMemuText link="/">TOP</LeftMemuText>
            <LeftMemuText link="/about">ABOUT</LeftMemuText>

        </LeftMemuBox>
    )
}  