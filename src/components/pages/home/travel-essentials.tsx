import type { FC } from "react";
import photo from "../../../../public/assets/conatct.jpg"
import p1 from "../../../../public/assets/test-img-02.png"
import p2 from "../../../../public/assets/shop-img-15.png"
import p3 from "../../../../public/assets/shop-img-16.png"
import p4 from "../../../../public/assets/shop-img-17.png"
import p5 from "../../../../public/assets/shop-img-18.png"
import { ArrowUpRight } from "lucide-react";
import type { ItemType } from "../../../../types/items";
import { TravelItems } from "./travel-iteams";
import { travelEssentials } from "../../../../data";

export const TraverEssentials: FC = () => {
    return <>
        <div className="w-full min-h-fit relative">
            <div className=" w-full h-full flex items-center justify-center">
                <div className=" absolute top-0 mt-9 text-3xl playwrite-gb text-slate-500">
                    Lorem ipsum dolor
                </div>
                <div className="absolute top-0 mt-24 passion-one-bold text-5xl" >TRAVEL ESSENTIALS <span className="text-green-800">ITEMS</span></div>
                <div className=" flex items-center justify-around max-w-[90vw] mx-auto space-x-4">

                    {travelEssentials.map((essential, index) => (
                        <TravelItems key={`essentials-data-${index}`} item={essential} />
                    ))}
                </div>
            </div>
        </div>


    </>
}