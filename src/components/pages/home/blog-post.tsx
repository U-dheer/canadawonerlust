import type { FC } from "react";
import type { BlogPostType } from "../../../../types";
import { ArrowUpRight, Calendar, Mail, Pencil, Phone } from "lucide-react";



export const BlogPost: FC<{ blog: BlogPostType, left: boolean; }> = ({ blog: { author, date, description, image, title }, left }) => {
    return <>
        {/* <div className=" mt-10 shadow-md rounded-lg overflow-hidden">
            <img className="w-full h- object-cover p-11 rounded-3xl" src={image.src} alt="Blog Post Image" />

            <div className="p-6">
                <h1 className="text-3xl font-bold mb-4">{title}</h1>

                <p className="   mb-6">{description}</p>


                <div className="prose prose-lg max-w-none text-gray-800">
                </div>
            </div>
        </div> */}

        {/* <div className="grid sm:grid-cols-2 " >

            {/* detail */}
        {/* <div className="flex w-[780px] justify-end">
                <img src={image.src} alt="" />
            </div>
            <div className=" flex flex-row  justify-center items-center w-full">
                <div className="flex bg-orange-200 flex-col">
                    <div className=" flex bg-blue-300 gap-7">
                        <span>
                            {Intl.DateTimeFormat("en-LK", { dateStyle: "long" }).format(date)}
                        </span>
                        <span>
                            {author}
                        </span>
                    </div>

                    <div className="flex">
                        <h1 className="text-3xl font-bold mb-4">{title}</h1>
                    </div>

                    <div className="flex">
                        <p className="   mb-6">{description}</p>
                    </div>

                </div>

            </div> */}


        {/* </div> */}


        <div className=" mt-20 w-[90vw] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-14">
            {left ? <>{/* photo ekat */}
                <div className="w-full h-full flex justify-center ">
                    <img src={image.src} alt="" className=" aspect-video object-cover object-top" />
                </div>

                {/* //deatails walat */}
                <div className="w-full h-full flex items-center p-4 ">
                    <div className=" w-full h-fit">

                        <div className="flex playwrite-gb text-xs text-stone-500 font-extrabold">
                            <div className="flex justify-center space-x-4">
                                <p className="playwrite-gb flex items-center"><Calendar className="size-4 mr-2" />{Intl.DateTimeFormat("en-LK", { dateStyle: "long" }).format(date)}</p>
                                <p className="playwrite-gb flex items-center"><Pencil className="size-4 mr-2" />{`By ${author}`}</p>
                            </div>
                        </div>

                        <h1 className="passion-one-regular text-5xl lg:text-6xl leading-8 mt-2">{title}</h1>

                        <p className=" mt-2 text-stone-500 line-clamp-6">{description}</p>

                        <button className=" hover:text-white hover:bg-green-800 transition-colors duration-300 p-2 passion-one-regular uppercase mt-4">
                            <span className=" flex items-center">read more <ArrowUpRight className=" size-6 ml-1" /></span>
                        </button>
                    </div>
                </div></> : <>

                {/* //deatails walat */}
                <div className="w-full h-full flex items-center p-4 ">
                    <div className=" w-full h-fit">

                        <div className="flex playwrite-gb text-xs text-stone-500 font-extrabold">
                            <div className="flex justify-center space-x-4">
                                <p className="playwrite-gb flex items-center"><Calendar className="size-4 mr-2" />{Intl.DateTimeFormat("en-LK", { dateStyle: "long" }).format(date)}</p>
                                <p className="playwrite-gb flex items-center"><Pencil className="size-4 mr-2" />{`By ${author}`}</p>
                            </div>
                        </div>

                        <h1 className="passion-one-regular text-5xl lg:text-6xl leading-8 mt-2">{title}</h1>

                        <p className=" mt-2 text-stone-500 line-clamp-6">{description}</p>

                        <button className=" hover:text-white hover:bg-green-800 transition-colors duration-300 p-2 passion-one-regular uppercase mt-4">
                            <span className=" flex items-center">read more <ArrowUpRight className=" size-6 ml-1" /></span>
                        </button>
                    </div>
                </div>
                {/* photo ekat */}
                <div className="w-full h-full flex justify-center ">
                    <img src={image.src} alt="" className=" aspect-video object-cover object-top" />
                </div></>}
        </div>



    </>
}