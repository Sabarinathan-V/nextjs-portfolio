"use client";

import { Button } from "@/components/ui/button"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { cn } from "@/lib/utils"
import { ROUTES } from "@/utils/data"
import { transition, variants } from "@/utils/framer_variants";
import { MotionButton } from "@/utils/motionTags";
import { Menu } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function MobileMenu({pathName}){

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    useEffect(() => {
        setOpen(false)
    }, [pathName]);

    return (
            <Drawer open={open}>
                <DrawerTrigger asChild className="md:hidden bg-white" onClick={handleOpen}>
                    <Button variant="outline">
                        <Menu />
                    </Button>
                </DrawerTrigger>
                <DrawerContent>
                    <div className="max-w-sm mx-auto w-full">
                        <DrawerHeader>                        
                            <DrawerTitle></DrawerTitle>
                            <DrawerDescription></DrawerDescription>
                            <div className={"list-none space-y-6"}>
                                {
                                    ROUTES?.map((route) => (
                                        <li key={route.id}>
                                            <Link href={route.path} className={cn(
                                                "hover:text-primary",
                                                pathName === route.path && "text-primary"
                                            )}>
                                                {route.name}
                                            </Link>
                                        </li>
                                    ))
                                }                                
                            </div>
                        </DrawerHeader>                        
                        <DrawerFooter className="pb-4">
                            <Link
                                href="mailto:sabarivanam@gmail.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='text-center mx-auto'
                            >
                                <MotionButton 
                                    initial="initial"
                                    animate="animate"
                                    variants={variants.moveUp}
                                    transition={transition.moveUp}
                                    variant="outline" 
                                    className="inline-block bg-white"
                                >
                                    Get in touch
                                </MotionButton>
                            </Link>
                            <DrawerClose onClick={handleOpen} className="w-full text-center pt-4 text-popover">Close Menu</DrawerClose>
                        </DrawerFooter>
                    </div>
                </DrawerContent>
            </Drawer>
    )
};

