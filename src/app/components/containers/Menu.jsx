"use client";

import { cn } from "@/lib/utils";
import { ROUTES } from "@/utils/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { MotionButton, MotionImage, MotionList } from "@/utils/motionTags";
import { transition, variants } from "@/utils/framer_variants";

export default function Menu(){

    const pathName = usePathname();

    return(
        <header className={cn("fixed z-50 left-0 top-0 right-0", pathName != "/" && "bg-background border-b border-border/25")}>
            <nav className={"container py-4 flex justify-between items-center"}>

                <Link href={"/"}>
                    <MotionImage
                        initial="initial"
                        animate="animate"
                        variants={variants.scale}
                        transition={transition.scale}
                        className="w-auto"
                        src={"/logo.png"} 
                        alt={"Logo"}
                        width={40} 
                        height={45}
                    />
                </Link>

                <ul className="hidden md:flex items-center gap-6 font-medium text-[17px]">
                    {
                        ROUTES.map((route, index) => (
                            <MotionList 
                                key={route.id}
                                initial="initial"
                                animate="animate"
                                variants={variants.moveDown}
                                transition={{...transition.moveDown, delay: index*0.3}}
                            >
                                <Link href={route.path} className={cn(
                                    "hover:text-primary",
                                    pathName === route.path && "text-primary"
                                )}>
                                    {route.name}
                                </Link>
                            </MotionList>
                        ))
                    }
                </ul>

                <Link
                    href="mailto:sabarivanam@gmail.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <MotionButton 
                        initial="initial"
                        animate="animate"
                        variants={variants.moveLeft}
                        transition={transition.moveLeft}
                        variant="outline" 
                        className="hidden md:inline-block bg-white"
                    >
                        Get in touch
                    </MotionButton>
                </Link>

                <MobileMenu pathName={pathName} />
            </nav>
        </header>
    )
}