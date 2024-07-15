import type { FC } from "react"
import type { ItemType } from "../../../../types/items"
import { CalendarDays, Currency, Pencil } from "lucide-react"


export const TravelItems: FC<{ item: ItemType }> = ({ item: { grade, image, price, title } }) => {
    return <>
        <div className="max-w-sm rounded flex flex-col">

            <img className="w-[300px] aspect-square object-cover object-center" src={image.src} alt="Card Image" />

            <div className="flex-1 items-center space-x-2 text-xs">
                <div className="playwrite-gb text-slate-700 text-center mb-4 justify-center flex  ">
                    {Intl.NumberFormat("en-US", { style: "currency", currency: 'USD' }).format(price)}
                </div>

                <div className="flex text-center justify-center passion-one-bold text-3xl mb-4">
                    {title}
                </div>
                <div className="playwrite-gb text-slate-700 flex justify-center">
                    {grade}
                </div>

            </div>

        </div>
    </>
}