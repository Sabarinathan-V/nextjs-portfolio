import { Button } from "@/components/ui/button";
import { SERVICES } from "@/utils/data";
import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv } from "@/utils/motionTags";
import Image from "next/image";

export default function page() {
    return (
        <div className="container min-h-screen grid place-items-center pb-7 pt-32">
            <div>
                <MotionDiv
                    className="text-center"
                    initial="initial"
                    animate="animate"
                    variants={variants.moveUp}
                    transition={transition.moveUp}
                >
                    <h3>
                        Services <span>Offered</span>
                    </h3>
                </MotionDiv>
                

                <div className="flex flex-wrap justify-center gap-8 mt-11">
                    {
                       SERVICES?.map((service, index) => (
                            <MotionDiv key={service.id}                                
                                initial="initial"
                                animate="animate"
                                variants={variants.moveRight}
                                transition={{...transition.moveRight, delay: index * 0.6}}
                                className="bg-accent p-5 cursor-pointer overflow-hidden group h-80 rounded-3xl w-64 flex flex-col justify-between"
                            >
                                <Image 
                                    src={service.icon} 
                                    alt={service.name} 
                                    width={55} 
                                    height={55} 
                                    className={""} 
                                />
                                <div className="">
                                    <h3>
                                        <span>{service.name.split(" ")[0]}</span>&nbsp;{service.name.split(" ")[1]}
                                    </h3>
                                    <small className="text-accent-foreground">
                                        {service.description}
                                    </small>
                                    <Button variant="plain" size="sm" className="block ml-auto mt-7">Learn More</Button>
                                </div>
                            </MotionDiv>
                       ))
                    }
                </div>
            </div>
        </div>
    )
}