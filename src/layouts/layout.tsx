import { Footer } from "../components/layouts/footer";
import { NavigationHeader } from "../components/layouts/header";
import "./index.css"
import type { FC, PropsWithChildren } from "react";
import Youtube from "../../public/assets/youtube.svg"
import Twitter from "../../public/assets/twitter.svg";
import Facebook from "../../public/assets/facebook.svg";
import Instagram from "../../public/assets/instagram.svg";
import { Copyright } from "lucide-react";

export const LayOut: FC<PropsWithChildren> = ({ children }) => {


    return (
        <main className="nunito-regular">
            <header>
                <NavigationHeader />
            </header>
            {children}
            <Footer />
            <div className=" flex items-center justify-between w-full px-[5vw] bg-black  align-middle py-2">
                <div className="flex space-x-6  ml-4 align-middle items-center justify-center  ">
                    <span className="text-white passion-one-bold">SOCIALS</span>
                    <img src={Youtube.src} alt="" className="size-4 cursor-pointer " />
                    <img src={Facebook.src} alt="" className="size-4 cursor-pointer " />
                    <img src={Twitter.src} alt="" className="size-4 cursor-pointer " />
                    <img src={Instagram.src} alt="" className="size-4 cursor-pointer " />
                </div>

                <div className="flex items-center space-x-2 text-white">

                    <Copyright className="mr-3" /> 2020 Qode Interactive,All Rights Reserved


                </div>

            </div>
        </main>
    )
}