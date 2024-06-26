import Navbar from "../components/Navbar"
import HeroImage from "../assets/hero-image.webp"

export default function Hero() {
    return(
        <div className="flex flex-col mt-40 space-y-10">
            <Navbar />
            <div className="text-colour text-5xl font-AzeretMonoItalic">ART BY</div>
            <img className="h-96 w-auto" src={HeroImage} alt="Hero Image" />
        </div>
    )
}