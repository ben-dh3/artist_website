import Navbar from "../../components/Navbar"
import HeroImage from "../../assets/hero-image.webp"
import "./hero.scss";

export default function Hero() {
    return(
        <div>
            <Navbar />
            <img src={HeroImage} alt="Hero Image" />
        </div>
    )
}