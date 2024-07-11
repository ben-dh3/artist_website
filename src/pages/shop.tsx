import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ShopItems } from "../components/ShopItems";

export default function Shop() {
    const [width, setWidth] = useState(0);
    const carousel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (carousel.current) {
            setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
        }
    }, []);

    return(
        <div id="shop" className="flex flex-col space-y-40 bg-black mt-20 w-full">
            <h1 className="mx-auto p-1 rounded-3xl bg-green-100 mt-10 text-center text-5xl text-colour font-AzeretMonoItalic">Shop</h1>
            <motion.div ref={carousel} className="carousel flex justify-center" whileTap={{cursor: "grabbing"}}>
                <motion.div 
                    drag="x" 
                    dragConstraints={{ right:0, left: -width}}
                    className="inner-carousel"
                >
                    {ShopItems.map((item, index) => {
                        return(
                            <motion.div className="item" key={index}>
                                <img src={item.image} alt={item.title} />
                                {item.button}
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}