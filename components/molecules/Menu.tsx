
import {LeftMemuBox} from "../atoms/LeftMemuBox"
import {LeftMemuText} from "../atoms/LeftMenuText"

export const Menu = ()=>{

    return (
        <LeftMemuBox>
            <LeftMemuText link="none">test</LeftMemuText>
            <LeftMemuText link="/">TOP</LeftMemuText>
            <LeftMemuText link="/about">ABOUT</LeftMemuText>
            <LeftMemuText link="/items">ITEMS</LeftMemuText>

        </LeftMemuBox>
    )
}  