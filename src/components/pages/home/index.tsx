import type { FC } from "react";
import { HeroSection } from "./hero-section";
import img1 from "../../../../public/assets/h1-clients-img-01.png"
import img2 from "../../../../public/assets/h1-clients-img-02.png"
import img3 from "../../../../public/assets/h1-clients-img-03.png"
import img4 from "../../../../public/assets/h1-clients-img-04.png"
import img5 from "../../../../public/assets/h1-clients-img-05.png"
import { BlogPost } from "./blog-post";
import Blogphoto from "../../../../public/assets/blogga.jpg"
import Bp from "../../../../public/assets/blogp (1).jpg";
import Bp1 from "../../../../public/assets/blogp (2).jpg"
import Bp2 from "../../../../public/assets/blogp (3).jpg"
import Bp3 from "../../../../public/assets/blogp (4).jpg"
import type { BlogPostType } from "../../../../types";
import { ContactUs } from "./contact-us";


export const HomePage: FC = () => {


    const blogPosts: BlogPostType[] = [{
        title: "Everyday urban concrete jubgle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
        date: new Date(),
        author: "Uditha",
        image: Blogphoto
    }, {
        title: "Amazon Rainforest experience",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
        date: new Date(),
        author: "Nalin",
        image: Bp
    }, {
        title: "Climbing in the swis apls",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
        date: new Date(),
        author: "Nishan",
        image: Bp1
    }, {
        title: "Climbing in the swis apls",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
        date: new Date(),
        author: "Nishan",
        image: Bp2
    }, {
        title: "Climbing in the swis apls",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, liberoLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
        date: new Date(),
        author: "Nishan",
        image: Bp3
    }];

    return <div>
        <HeroSection />

        <div className="">
            <div className="grid grid-cols-2 lg:grid-cols-5 w-full gap-y-14 lg:gap-y-0 ">
                <div className=" flex justify-center">
                    <img src={img1.src} alt=""></img>
                </div>

                <div className=" flex justify-center">
                    <img src={img2.src} alt=""></img>
                </div>

                <div className=" flex justify-center">
                    <img src={img3.src} alt=""></img>
                </div>

                <div className=" flex justify-center">
                    <img src={img4.src} alt=""></img>
                </div>

                <div className=" flex justify-center">
                    <img src={img5.src} alt=""></img>
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
        {blogPosts.map((blog, index) => (
            <BlogPost key={`blog-${index}`} blog={blog} left={index % 2 == 0} />
        ))}

        <ContactUs />
    </div>
}