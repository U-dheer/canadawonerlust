import type { FC } from "react";
import { HeroSection } from "./hero-section";
import img1 from "../../../../public/assets/c (1).png"
import img2 from "../../../../public/assets/c (2).png"
import img3 from "../../../../public/assets/c (3).png"
import img4 from "../../../../public/assets/c (4).png"
import img5 from "../../../../public/assets/c (5).png"
import img6 from "../../../../public/assets/c (6).png"
import { BlogPost } from "./blog-post";

import { ContactUs } from "./contact-us";
import { FeaturedSection } from "./featured-section";
import { blogPosts } from "../../../../data";
import { TraverEssentials } from "./travel-essentials";
import { Places } from "./places";


export const HomePage: FC = () => {

    return <div>
        <HeroSection />

        <div className=" mt-28 ">
            <div className="grid grid-cols-2 lg:grid-cols-6 w-[70vw] mx-auto gap-y-14 lg:gap-y-0 ">
                <div className=" flex flex-col justify-center w-full items-center ">
                    <img src={img3.src} alt="" className="max-w-32" />
                    <div className="">1 Destinations</div>
                    <div className="passion-one-bold text-xl">ADVENTURE</div>
                </div>

                <div className=" flex flex-col justify-center items-center">
                    <img src={img2.src} alt="" className="max-w-32" />
                    <div className="">3 Destinations</div>
                    <div className="passion-one-bold text-xl">BRACHES</div>
                </div>

                <div className=" flex flex-col  justify-center items-center">
                    <img src={img6.src} alt="" className="max-w-32" />
                    <div className="">2 Destinations</div>
                    <div className="passion-one-bold text-xl">CAMPING</div>
                </div>

                <div className=" flex flex-col justify-center items-center">
                    <img src={img5.src} alt="" className="max-w-32" />
                    <div className="">1 Destinations</div>
                    <div className="passion-one-bold text-xl">FRIENDLY</div>
                </div>

                <div className=" flex flex-col  justify-center items-center">
                    <img src={img1.src} alt="" className="max-w-32" />
                    <div className="">9 Destinations</div>
                    <div className="passion-one-bold text-xl">LOW BUDGET</div>
                </div>
                <div className=" flex flex-col justify-center items-center">
                    <img src={img4.src} alt="" className="max-w-32" />
                    <div className="">4 Destinations</div>
                    <div className="passion-one-bold text-xl">POPULAR</div>
                </div>
            </div>
        </div>
        <div className="mt-9">
            <div className="passion-one-bold text-xl ">
                <div className="flex items-center justify-center font-medium mb-10 playwrite-gb">
                    <span>Lorem ipsum dolor</span>
                </div>
                <div className="flex items-center justify-center font-medium">
                    <h1 className="text-[80px]">TRAVEL ESSENTIALS <span className="text-green-800">TIPS</span></h1>
                </div>

            </div>
        </div>
        
        {blogPosts.slice(0, 2).map((blog, index) => (
            <BlogPost key={`blog-${index}`} blog={blog} left={index % 2 == 0} />
        ))}

        <ContactUs />
        <FeaturedSection />
        {/* <TraverEssentials /> */}
        <Places />
    </div>
}