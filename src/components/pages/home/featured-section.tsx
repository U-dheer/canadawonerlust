import type { FC } from "react"
import photo from "../../../../public/assets/featuredphoto.jpg"
import { ArrowUpRight } from "lucide-react"
import React, { useEffect, useRef } from 'react';
import Slider from 'react';
import type { BlogPostType } from "../../../../types";
import p1 from "../../../../public/assets/blog-post-img-03-768x916.jpg"
import p2 from "../../../../public/assets/blog-post-img-04-768x916.jpg"
import p3 from "../../../../public/assets/blog-post-img-05-768x916.jpg"
import p4 from "../../../../public/assets/blog-post-img-45-768x916.jpg"
import { BlogPostCard } from "./blog-card";
import { blogPosts } from "../../../../data";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../../components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'





export const FeaturedSection: FC = () => {

    return <>

        <div className=" my-20 w-full mx-auto pb-6">
            {/* <div ref={slider} className=" grid grid-flow-col gap-4 w-fit  transition-transform duration-300">
                {blogPosts.map((blog, index) => (
                    <BlogPostCard key={`blog-${index}`} blog={blog} />
                ))}
            </div> */}

            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full max-w-[80vw] mx-auto lg:max-w-[60vw]"
            >
                <CarouselContent>
                    {blogPosts.map((blog, index) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <BlogPostCard key={`blog-${index}`} blog={blog} />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

    </>
}