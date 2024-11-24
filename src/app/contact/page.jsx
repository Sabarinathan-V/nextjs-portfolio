import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv } from "@/utils/motionTags";
import Image from "next/image";
import ContactForm from "../components/containers/ContactForm";

export default function page() {
    return(
        <div className="container grid place-items-center h-scree pt-20 2xl:pt-0 bg-accent">

            <div className="absolute left-0 right-0 bottom-0 top-[85px] sm:top-[80px] bg-accent">
                <Image
                    src={"/map.png"}
                    alt="map"
                    width={1200}
                    height={500}
                    className="w-full h-full object-contain absolute"
                />
            </div>

            <MotionDiv
                className="z-10 mb-12"
                initial="initial"
                animate="animate"
                variants={variants.moveUp}
                transition={transition.moveUp}
            >
                <div className="text-center mt-4">
                    <h3>
                        Looking for a Developer? <br /><span className="text-white">Let’s Connect</span>
                    </h3>
                    <p className="text-accent-foreground mt-5 w-3/4 mx-auto">Innovative ideas, efficient solutions, and a focus on user experience. Let&apos;s work together now!</p>
                </div>  

                <ContactForm  /> 

            </MotionDiv>
        </div>
    )
}