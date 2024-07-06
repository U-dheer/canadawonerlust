import type { FC } from "react";
import logo2 from "../../../public/assets/logo2.png";
import { ImageOff, Import, Mail, Phone } from "lucide-react";
import Youtube from "../../../public/assets/youtube.svg"
import Twitter from "../../../public/assets/twitter.svg";
import Facebook from "../../../public/assets/facebook.svg";
import Instagram from "../../../public/assets/instagram.svg";

export const NavigationHeader: FC = () => {


    return (
        <div className=" absolute top-0 left-0 z-20  w-full">
            <div>
                <nav className="opacity-1">
                    <div className=" flex flex-col items-center justify-between sm:items-stretch sm:justify-start p-4 ">

                        <div className=" flex items-center justify-between">
                            <div className="flex gap-6 pb-4 playwrite-gb">
                                <span className="text-white flex items-center ">
                                    <Phone className=" size-4 mr-2" />
                                    +123 45677 789
                                </span>
                                <span className="flex text-white items-center" >
                                    <Mail className=" size-4 mr-2 translate-y-[2px]" />
                                    wanderland@qodeinteractive.com
                                </span>
                            </div>

                            <div className="flex pb-4 items-center space-x-2">
                                <img src={Youtube.src} alt="" className="size-4 cursor-pointer " />
                                <img src={Facebook.src} alt="" className="size-4 cursor-pointer " />
                                <img src={Twitter.src} alt="" className="size-4 cursor-pointer " />
                                <img src={Instagram.src} alt="" className="size-4 cursor-pointer " />



                            </div>
                        </div>

                        <div className="flex w-full border-b border-t py-6">
                            <div className="flex">
                                <img src={logo2.src} className="h-12"></img>
                            </div>

                            <div className=" flex justify-center w-full items-center gap-4">
                                <div className="flex justify-center passion-one-bold text-xl 
                                gap-4">

                                    <div className="flex">
                                        <a href="#" className=" text-white  hover:text-white px-3 py-2 rounded-md font-medium">HOME</a>
                                    </div>
                                    <div className="flex">
                                        <a href="#" className=" text-white hover:text-white px-3 py-2 rounded-md font-medium">PAGES</a>
                                    </div>
                                    <div className="flex">
                                        <a href="#" className=" text-white  hover:text-white px-3 py-2 rounded-md font-medium">DESTINATION</a>
                                    </div>
                                    <div className="flex"></div>

                                </div>
                                <div className="flex">
                                    <img src={logo2.src} className="h-12"></img>
                                </div>
                                <div className="flex justify-center passion-one-bold text-xl   gap-4">

                                    <div className="flex ">
                                        <a href="#" className=" text-white  hover:text-white px-3 py-2 rounded-md font-medium">BLOG</a>
                                    </div>
                                    <div className="flex">
                                        <a href="#" className=" text-white hover:text-white px-3 py-2 rounded-md font-medium">SHOP</a>
                                    </div>
                                    <div className="flex">
                                        <a href="#" className=" text-white  hover:text-white px-3 py-2 rounded-md font-medium">LANDING</a>
                                    </div>
                                    <div className="flex"></div>

                                </div>
                            </div>

                            <div className="flex">
                                <img src={logo2.src} className="h-12"></img>
                            </div>
                        </div>

                    </div>



                    <div className="sm:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            <a href="#" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Dashboard</a>
                            <a href="#" className=" text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>
                            <a href="#" className=" text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>
                            <a href="#" className=" text-white hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
                        </div>
                    </div>
                </nav>


            </div>
        </div>
    )

}