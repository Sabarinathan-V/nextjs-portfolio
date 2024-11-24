"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {

    const pathName = usePathname();

    if(pathName == "/"){
        return <></>
    }

    return (
        <footer className="border-t">
            <div className="flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-5 justify-between container py-3">
                <Image src="/logo.png" width={40} height={40} alt="logo" />
                <h3 className="text-xl sm:text-2xl">
                    Discover a <span>gateway</span> to unparalleled <br />
                    <span>design</span> creativity.
                </h3>
            </div>
            <div className="bg-accent text-center py-8 text-accent-foreground">
                <p>copyright @ 2024-2025. All rights reserved.</p>
            </div>
        </footer>
    )
}