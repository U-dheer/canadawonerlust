import { useEffect, useState, type FC } from "react";
import banner_01 from '../../../../public/assets/1 (1).jpg';
import banner_02 from '../../../../public/assets/1 (2).jpg';
import banner_03 from '../../../../public/assets/1 (3).jpg';
import brushStroke from '../../../../public/assets/bottom.png';
import { Calendar, MoveLeft, MoveRight, Pencil } from "lucide-react";

export const HeroSection: FC = () => {

    const bannerImages = [{
        title: "Everyday urban concrete jubgle",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
        date: new Date(),
        author: "Uditha",
        image: banner_01
    }, {
        title: "Amazon Rainforest experience",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
        date: new Date(),
        author: "Nalin",
        image: banner_02
    }, {
        title: "Climbing in the swis apls",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero",
        date: new Date(),
        author: "Nishan",
        image: banner_03
    }];

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


    return (
        <header className="w-full relative">
            <img key={selectedImage} src={bannerImages[selectedImage].image.src} alt={bannerImages[selectedImage].author} className="object-cover object-center c-fade-in" />

            <div className="absolute h-10 bottom-0 left-0 right-0">
                <img src={brushStroke.src} alt={brushStroke.src} className="absolute z-10 bottom-0 left-0 right-0 w-full transition-transform duration-300" width={1920} height={'auto'} />
            </div>

            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                <div className="absolute left-0 top-0 bottom-0 flex items-center p-4 text-white">
                    <button onClick={handleNextImage}><MoveLeft className="size-6 hover:scale-105 transition-transform" /></button>
                </div>
                <div key={selectedImage} className="text-white from-bottom flex flex-col items-center">
                    <div className="flex justify-center space-x-8 mb-2">
                        <p className="playwrite-gb flex items-center"><Calendar className="size-4 mr-2" />{Intl.DateTimeFormat("en-LK", { dateStyle: "long" }).format(bannerImages[selectedImage].date)}</p>
                        <p className="playwrite-gb flex items-center"><Pencil className="size-4 mr-2" />{`By ${bannerImages[selectedImage].author}`}</p>
                    </div>
                    <h1 className="text-6xl lg:text-7xl tracking-wider text-center uppercase passion-one-bold">{bannerImages[selectedImage].title}</h1>
                    <p className="font-bold w-[70%] text-center mx-auto text-base lg:text-lg">{bannerImages[selectedImage].description}</p>
                    <button key={selectedImage} className="from-bottom-late mt-4 hover:bg-green-600 transition-colors duration-300 py-4 px-8 bg-green-800 text-white uppercase">
                        readmore
                    </button>
                </div>
                <div className="absolute right-0 top-0 bottom-0 flex items-center p-4 text-white">
                    <button onClick={handlePrevImage}><MoveRight className="size-6 hover:scale-105 transition-transform" /></button>
                </div>
            </div>
        </header>
    );
}
