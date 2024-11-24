"use client";

import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/utils/data";
import { transition, variants } from "@/utils/framer_variants";
import { MotionDiv } from "@/utils/motionTags";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight, ExternalLink, } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function page() {

    const [swiper, setSwiper] = useState(null);
    const [currentProject, setCurrentProject] = useState(PROJECTS[0]);

    const onSlideChange = (item) => {
        setCurrentProject(PROJECTS[item?.activeIndex])
    }

    const index = PROJECTS.findIndex((project) => (project.title === currentProject.title)) + 1;

    const nextTo = () => {
        swiper.slideNext();
    }

    const prev = () => {
        swiper.slidePrev();
    }

    return (
        <div className="grid place-items-center lg:pt-0 pt-20 min-h-screen container">
            <div className="mt-12">
                <MotionDiv 
                    className="text-center mb-10"
                    initial="initial"
                    animate="animate"
                    variants={variants.moveUp}
                    transition={transition.moveUp}
                >
                    <h3>My <span>Projects</span></h3>
                </MotionDiv>

                <MotionDiv
                    initial="initial"
                    animate="animate"
                    variants={variants.moveDown}
                    transition={transition.moveDown}
                    className="flex lg:flex-row flex-col-reverse lg:gap-0 gap-10 lg:pb-0 pb-7 items-center w-full"
                >
                    <div className="flex-1 space-y-3">
                        <h2 className="text-6xl font-semibold text-primary">
                            {index < 10 ? `0${index}`: index}
                        </h2>
                        <h3>{currentProject?.title}</h3>
                        <p className="w-10/12 text-popover">{currentProject?.description}</p>
                        <div className="text-primary mt-2 font-semibold tracking-wider space-x-2">
                            {
                                currentProject?.stack?.map((stack,i) => {
                                    return(
                                        <Badge
                                            key={i}
                                            variant={"outline"} className="text-primary text-base"
                                        >
                                            {stack}
                                        </Badge>
                                    )
                                })
                            }
                            
                        </div>
                        <br />
                        <div className="flex gap-x-3">
                            <TooltipProvider delayDuration={200}>
                                <Tooltip>
                                <TooltipTrigger asChild>
                                    <button className="bg-accent p-2.5 rounded-full">
                                        {/* <Image
                                            src={"/github-mark.png"}
                                            alt="github"
                                            width={40}
                                            height={40}
                                         /> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> 
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>GitHub</p>
                                </TooltipContent>
                                </Tooltip>

                                <Tooltip>
                                <TooltipTrigger asChild>
                                    <button className="bg-accent p-2.5 rounded-full">
                                        {/* <Image
                                            src={"/open.png"}
                                            alt="Live Preview"
                                            width={40}
                                            height={40}
                                         /> */}
                                         <ExternalLink width={40}
                                            height={40} />
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Live Preview</p>
                                </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>

                    <div className="flex-1 flex items-center flex-col">
                    <Swiper
                        spaceBetween={20}
                        onSlideChange={onSlideChange}
                        onSwiper={(swiper) => {setSwiper(swiper)}}
                        breakpoints={{
                            499: {
                                slidesPerView: 1,
                            },
                            999: {
                                slidesPerView: 1.4,
                            }

                        }}
                        className="w-full md:max-w-lg max-w-[250px]"
                    >
                        {
                            PROJECTS.map((project, i) => {
                                return(
                                    <SwiperSlide 
                                        key={project.id}
                                        className={cn(index - 1 !== index && "opacity-45")}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            width={300}
                                            height={300}
                                            className="object-contain"
                                        />
                                    </SwiperSlide>
                                )
                            })
                        }
                        
                    </Swiper>
                    <div className="flex ml-6 mt-4 gap-x-4">
                        <button className="border-2 p-2 rounded-lg" onClick={prev} disabled={index === 1} >
                            <ChevronLeft  width={55} height={55}/>
                        </button>
                        <button className="border-2 p-2 rounded-lg" onClick={nextTo} disabled={index === PROJECTS.length} >
                            <ChevronRight width={55} height={55} />
                        </button>
                       
                    </div>
                    </div>

                </MotionDiv>
            </div>
        </div>
    )
}