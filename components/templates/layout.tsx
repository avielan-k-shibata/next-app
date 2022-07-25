
import {Header} from "../organisms/Header"
import {Footer} from "../organisms/Footer"
import {LeftMenu} from "../organisms/LeftMenu"
// import {IO} from "../atoms/IO"

import { ReactNode } from 'react';

type Props = {
    children?: ReactNode;
};

export default function Layout({ children} :Props) {
    return (
        <div className="flex flex-wrap">
            <Header />
            <LeftMenu />
            <div className="md:w-[calc(100%_-_240px)] w-full">{children}</div>

            <Footer />

        </div>
    );
}