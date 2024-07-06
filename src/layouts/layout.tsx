import { NavigationHeader } from "../components/layouts/header";
import "./index.css"
import type { FC, PropsWithChildren } from "react";

export const LayOut: FC<PropsWithChildren> = ({ children }) => {


    return (
        <main>
            <header>
                <NavigationHeader />
            </header>
            {children}
        </main>
    )
}