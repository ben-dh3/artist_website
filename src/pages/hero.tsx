import Navbar from "../components/Navbar"
import HeroImage from "../assets/heroImage.webp"

export default function Hero() {
    return(
        <div className="flex flex-col mt-40">
            <Navbar />
            <div className="flex flex-col items-center">
                <div className="text-colour text-5xl font-AzeretMonoItalic">ART BY</div>
                <img className="z-0 drop-shadow-lg w-full md:h-96 h-58" src={HeroImage} alt="Hero Image" />
            </div>
            
        </div>
    )
}