import type { FC } from "react";
import ph from "../../../public/assets/lgo (2).png"
import { CalendarDays, Copyright, Mail, Phone } from "lucide-react";
import p1 from "../../../public/assets/1.jpg"
import p2 from "../../../public/assets/2.jpg"
import p3 from "../../../public/assets/3.jpg"
import p4 from "../../../public/assets/4.jpg"
import p5 from "../../../public/assets/5.jpg"
import p6 from "../../../public/assets/6.jpg"


export const Footer: FC = () => {
    return <>
        {/* <div className="bg-slate-900 w-full">
            <div className="flex">
                <div className=" flex items-center p-16">
                    <img src={ph.src} alt="photo" className="w-36 h-20"></img>
                </div>
                <div className="text-white w-[1250px]  p-16 text-2xl">
                    Based in Utah, USA, Wanderland is a blog by Markus Thompson, His posts explore outdoor experience through photos and diaries with tips & tricks.
                </div>
            </div>
            <div className=" flex w-[40rem] p-6 ">
                <div className="bg-blue-300 flex flex-col">
                    <div className="flex mb-5 text-xl passion-one-bold">
                        ABOUT THE BLOG
                    </div>
                    <div className="flex">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae cumque delectus
                    </div>
                </div>
                <div className="bg-orange-600 flex flex-col text-center w-fit
                 ">
                    <div className="flex mb-5 text-xl passion-one-bold">
                        RECENT NEWS
                    </div>
                    <div className="flex flex-col">
                        <div><CalendarDays></CalendarDays><span className="text-green-500">October 2, 2019</span> Trip to Iceland</div>
                        <div><CalendarDays></CalendarDays><span className="text-green-500">October 2, 2019</span> On the shores of a Vanishing Island in India</div>
                        <div><CalendarDays></CalendarDays><span className="text-green-500">October 2, 2019</span> Visiting Robot</div>

                    </div>
                </div>
                <div className="bg-pink-500">haduiahdaad</div>

            </div>
        </div> */}

        <div className="bg-zinc-700 flex justify-center">
            <div className=" p-5 ">
                <div className="flex w-full mb-16 items-center">
                    <div className="w-[30vw] p-3" ><img src={ph.src} alt="" className="w-52 justify-center" /></div>
                    <div className="w-[60vw] items-center justify-center align-middle flex text-2xl text-white playwrite-gb ">Based in Utah, USA, Wanderland is a blog by Markus Thompson, His posts explore outdoor experience through photos and diaries with tips & tricks.</div>
                </div>
                <div className=" grid grid-cols-3 lg:grid-cols-4  w-[90vw] mx-auto gap-x-10 ">
                    <div className="w-fit">
                        <div className="text-white ml-4 text-3xl mb-4 passion-one-bold ">ABOUT THE BLOG</div>
                        <div className="text-xl ml-4 text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis beatae cumque delectus</div>
                    </div>
                    <div className="w-full  flex justify-center   lg:col-span-2 ">
                        <div className="flex   ml-20">
                            <div className="flex flex-col w-fit gap-y-3  ">
                                <div className="text-white passion-one-bold text-3xl mb-4">RECENT NEWS</div>
                                <div className="flex flex-row gap-3">
                                    <div className="flex">
                                        <CalendarDays className="text-white"></CalendarDays>
                                    </div>
                                    <div className="flex">
                                        <span className="text-green-300">October 2, 2019</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-white">Trip to Iceland</span>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-3">
                                    <div className="flex">
                                        <CalendarDays className="text-white"></CalendarDays>
                                    </div>
                                    <div className="flex">
                                        <span className="text-green-300">October 2, 2019</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-white ">On the Shores of a<br></br> Vanishing Island in India</span>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-3">
                                    <div className="flex">
                                        <CalendarDays className="text-white"></CalendarDays>
                                    </div>
                                    <div className="flex">
                                        <span className=" text-green-300">October 2, 2019</span>
                                    </div>
                                    <div className="flex">
                                        <span className="text-white">Visiting Robot</span>
                                    </div>
                                </div>


                            </div>

                            <div>

                            </div>
                        </div>
                    </div>
                    <div className="flex w-fit flex-col">
                        <div className="text-3xl passion-one-bold text-white mb-4">INSTAGRAM FEED</div>
                        <div className=" grid grid-cols-3 gap-2">
                            <div className="bg-yellow-50"><img className=" max-W-[50px] aspect-square" src={p1.src} alt="" /></div>
                            <div className="bg-yellow-50"><img className=" max-W-[50px] aspect-square" src={p2.src} alt="" /></div>
                            <div className="bg-yellow-50"><img className=" max-W-[50px] aspect-square" src={p3.src} alt="" /></div>
                            <div className="bg-yellow-50"><img className=" max-W-[50px] aspect-square" src={p4.src} alt="" /></div>
                            <div className="bg-yellow-50"><img className=" max-W-[50px] aspect-square" src={p5.src} alt="" /></div>
                            <div className="bg-yellow-50"><img className=" max-W-[50px] aspect-square" src={p6.src} alt="" /> </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </>
}
