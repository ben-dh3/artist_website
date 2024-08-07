import HelloGIF from '../assets/hello.webp'
export default function About() {
    return(
        <div className="mt-20 text-center space-y-10" id="about">
            <div>
                <div className="text-3xl lg:text-8xl font-medium">SELF EXPRESSION FOR YOUR</div>
                <div className="text-3xl lg:text-8xl font-AzeretMonoItalic">EYE-NEEDS</div>
                <div className="text-2xl lg:text-4xl mt-10 mx-10 lg:mx-80 text-colour">
                    Ben Duffield-Harding, an artist from Stratford-Upon-Avon and based in London, England, is a creative with a fascination in many art mediums: painting, generative, animation.
                </div>
            </div>
            <img className="mx-auto hello_image_size" src={HelloGIF} alt="Hello" />
            <div className="text-2xl lg:text-4xl mx-10 lg:mx-80 space-y-10">    
                <div>
                    Bold honesty characterises Ben's work, displaying colours and patterns in a way that captures the energy of a subject.
                </div>
                <div>
                    A drive for adventure and curiosity of human nature. His far-reaching travels and varied career pursuits characterise a creative mind with a thirst for learning and discovery.
                </div>
            </div>  
        </div>
    )
}