import { ArrowUpRight, Calendar, Grid, Pencil } from "lucide-react";
import type { FC } from "react";
import contact1 from "../../../../public/assets/contactbanner.jpg"
import contact2 from "../../../../public/assets/h1-img-01.png"

export const ContactUs: FC = () => {

    return <>
        <div className="w-full">
            <div className="w-full h-full flex justify-center relative p-0">
                <img src={contact1.src} alt="" className="hidden lg:block aspect-video object-cover object-top" />
                <img src={contact1.src} alt="" className="block lg:hidden aspect-video object-cover object-top" />

                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">

                    <div className="flex flex-col lg:flex-row w-[90vw] ">
                        <div className="  justify-center w-full lg:w-[40%] flex h-fit">
                            <img src={contact2.src} className="object-contain p-4" />
                        </div>
                        <div className="flex-1  flex justify-center items-center ">
                            <div>
                                <div className=" flex playwrite-gb p-4 justify-center">Lorem, ipsum dolor</div>
                                <p className=" passion-one-black p-4 justify-center text-5xl ">FINDING THE PERFECT TRAILS TO HIKE IS EASY WITH<span className="text-green-700 "> NEWSLECTER</span></p>
                                <div className=" flex line-clamp-2 p-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque nulla vero soluta, vel nihil Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, dolor voluptatum architecto iste nesciunt totam. Dolorem odio </div>
                                <div className="grid grid-cols-3 items-center gap-4">
                                    <div>
                                        <input type="text" id="fname" name="fname" className="ml-5 p-3 playwrite-gb" placeholder="Name" />
                                    </div>
                                    <div>
                                        <input type="text" id="fname" name="fname" placeholder="E-mail" className="p-3 playwrite-gb" />
                                    </div>
                                    <div className="hover:text-white hover:bg-green-800 w-fit">
                                        <button className="transition-colors duration-300 p-2 passion-one-regular bg-green-800">
                                            <span className=" flex items-center"> <ArrowUpRight className=" size-6 ml-1" />SUBSCRIBE</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
}