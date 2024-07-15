import { useEffect, useState, type FC } from "react";
import { placesDats } from "../../../../data";
import brushStroke from "../../../../public/assets/2.jpg"
import { ArrowUpRight, Calendar, MoveLeft, MoveRight, Pencil } from "lucide-react";
import br from "../../../../public/assets/udith brst.png"

export const Places: FC = () => {
    const [selectedImage, setSelectedImage] = useState<number>(0);

    const handleNextImage = () => {
        setSelectedImage((prev) => (prev < 2 ? prev + 1 : 0));
    }

    const handlePrevImage = () => {
        setSelectedImage((prev) => (prev > 0 ? prev - 1 : 2));
    }

    useEffect(() => {
        setInterval(() => handleNextImage(), 10000)
    }, [])



    return <>
        <div className="w-[80vw] mx-auto aspect-video relative my-10">
            <img key={selectedImage} src={placesDats[selectedImage].image.src} alt={placesDats[selectedImage].category} className="object-cover object-center c-fade-in w-full h-full" />

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end translate-x-[-10%]">




                <div className="absolute left-0 top-0 bottom-0 flex items-center p-4 text-white z-50">
                    <button onClick={handlePrevImage}><MoveLeft className="size-6 hover:scale-105 transition-transform" /></button>
                </div>

                <div key={selectedImage} className="text-black from-bottom flex flex-col items-center relative max-w-[600px]">
                    <img src={br.src} alt="" className=" absolute top-0 left-0 w-fit h-[140%] object-fill -z-10 translate-y-[-15%]" />
                    <div className="flex justify-center space-x-8 mb-2">
                        <p className="playwrite-gb flex items-center">{` ${placesDats[selectedImage].category}`}</p>
                    </div>
                    <h1 className="text-6xl lg:text-7xl tracking-wider text-center uppercase passion-one-bold">{placesDats[selectedImage].title}</h1>
                    <p className="font-bold w-[70%] text-center mx-auto text-base lg:text-lg line-clamp-3 playwrite-gb">{placesDats[selectedImage].description}</p>
                    <button key={selectedImage} className="from-bottom-late mt-4 hover:bg-green-600 transition-colors duration-300 py-4 px-8 bg-green-800 text-white uppercase">
                        readmore
                    </button>

                </div>
                <div className="absolute right-0 top-0 bottom-0 flex items-center p-4 text-white">
                    <button onClick={handleNextImage}><MoveRight className="size-6 hover:scale-105 transition-transform" /></button>
                </div>
            </div>
        </div>
    </>
}