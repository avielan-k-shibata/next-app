import {Menu} from "../molecules/Menu"

export const LeftMenu = ()=>{
    return (
        <>
            <div className="hidden md:block w-[312px] bg-base-200">
                <div className="h-4"></div>
                <Menu/>
            </div>
        </>
    )
}  