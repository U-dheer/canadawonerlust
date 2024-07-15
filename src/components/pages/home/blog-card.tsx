import type { FC } from "react"
import type { BlogPostType } from "../../../../types"
import { CalendarDays, Pencil } from "lucide-react"

export const BlogPostCard: FC<{ blog: BlogPostType }> = ({ blog: { author, date, image, title } }) => {
    return <>
        <div className="max-w-sm rounded shadow-lg bg-white">
            <img className="w-full aspect-[2/2.3] lg:aspect-[2/2.3] object-cover object-center" src={image.src} alt="Card Image" />
            <div className="px-6 py-4">
                <div className="flex items-center space-x-2 text-xs">
                    <span className="playwrite-gb text-slate-700"><CalendarDays></CalendarDays></span>
                    <span className="font-bold uppercase playwrite-gb text-slate-700">{Intl.DateTimeFormat("en-LK", { dateStyle: "long" }).format(date)}</span>
                    <span className="text-slate-700"> <Pencil></Pencil></span>
                    <span className="playwrite-gb text-slate-700">{author}</span>
                </div>
                <div className="text-gray-900 passion-one-regular text-4xl mb-2 w-[90%]">{title}</div>
            </div>
        </div>
    </>
}