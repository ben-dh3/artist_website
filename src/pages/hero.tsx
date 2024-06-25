import Navbar from "../components/Navbar"
import HeroImage from "../assets/hero-image.webp"

export default function Hero() {
    return(
        <div className="flex flex-col">
            <Navbar />
            <div className="font-AzeretMonoItalic">ART BY</div>
            <img className="h-80 w-auto" src={HeroImage} alt="Hero Image" />
        </div>
    )
}