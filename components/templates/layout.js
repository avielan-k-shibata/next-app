
import {Header} from "../organisms/Header"

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div>{children}</div>
        </>
    );
}