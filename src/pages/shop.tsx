import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ShopItems } from "../components/shopItems";

export default function Shop() {
    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);

    return(
        <div id="shop" className="space-y-40 bg-black mt-20 w-full">
            <h1 className="mt-10 text-center text-5xl text-colour font-AzeretMonoItalic">Shop</h1>
            <motion.div ref={carousel} className="carousel flex justify-center" whileTap={{cursor: "grabbing"}}>
                <motion.div 
                    drag="x" 
                    dragConstraints={{ right:0, left: -width}}
                    className="inner-carousel"
                >
                    {ShopItems.map((item, index) => {
                        return(
                            <motion.div className="item" key={index}>
                                <img src={item.image} alt="" />
                                {item.button}
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}