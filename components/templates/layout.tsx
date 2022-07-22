
import {Header} from "../organisms/Header"
import {Footer} from "../organisms/Footer"
import {LeftMenu} from "../organisms/LeftMenu"
import {IO} from "../atoms/IO"

import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

export default function Layout({ children} :Props) {
    return (
        <div className="flex flex-wrap">
            <div className="w-full">
                <Header />
            </div>
            <div>{children}</div>
            <LeftMenu />
            <div className="w-full min-h-screen bg-black"></div>
            <div className="w-full min-h-screen bg-black"></div>

            <IO c_name="aa">test</IO>
            <Footer />

        </div>
    );
}