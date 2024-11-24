

import { cn } from "@/lib/utils";
import { SOCIAL_MEDIA } from "@/utils/data";
import { transition, variants } from "@/utils/framer_variants";
import { MotionButton, MotionDiv, MotionImage } from "@/utils/motionTags";
import { DownloadIcon } from "lucide-react";
import { Luckiest_Guy } from 'next/font/google';
import Link from 'next/link';

const luck =  Luckiest_Guy({
  subsets: ['latin'],
  weight: ["400"],
  variable: '--font-luckiest-guy',
});

export default function Home() {
  return (
    <div className="h-dvh flex overflow-hidden flex-col md:flex-row md:gap-2 items-center justify-between pt-5 w-full">
      

      <div className="flex-1 flex flex-col h-full justify-center space-y-0 items-center md:items-end relative max-w-xl md:ml-auto lg:mr-10">
        <MotionDiv 
          initial="initial"
          animate="animate"
          variants={variants.rise} 
          transition={transition.rise}
          className="absolute flex items-center gap-x-4 -rotate-90 -left-16 md:-left-32 top-96 md:top-auto text-accent-foreground"
        >
          <MotionDiv
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.1 }}
            transition={{
              repeat: Infinity,
              duration: 1,
              repeatType: "reverse",
            }}
            className="border-4 size-14 rounded-full grid place-items-center border-primary"
          >
            <div className="size-3 rounded-full text-accent-foreground bg-primary"></div>
          </MotionDiv>
          <h4 className="text-2xl text-primary">Developer</h4>
        </MotionDiv>

        <MotionDiv 
          className={cn("text-center md:text-right", luck.className)}
          initial="initial"
          animate="animate"
          variants={variants.moveRight} 
          transition={transition.moveRight}
        >
          <h1 className="">Sabarinathan <span>V</span></h1>
        </MotionDiv>

        <br />

        <Link href="sabarinathan_resume.pdf" target="_blank" download="sabarinathan_resume.pdf">
            <MotionButton
            whileHover={{ scale: 0.9 }}
            initial="initial"
            animate="animate"
            variants={variants.moveUp}
            transition={transition.moveUp}
            className="hover:bg-accent text-white"
            >
            <DownloadIcon className="mr-2" />
            Download CV
            </MotionButton>
        </Link>

        <br />

        <div className="flex items-center gap-x-3 md:absolute bottom-8 left-2">
          {SOCIAL_MEDIA.map((item, index) => {
            return (
              <Link href={item?.href} target="_blank" key={item?.id} >
                <MotionImage                 
                  src={item?.icon} 
                  alt={item?.name} 
                  whileHover={{ scale: 1.1 }}
                  initial="initial"
                  animate="animate"
                  variants={variants.moveUp}
                  transition={{...transition.moveUp, delay: index * 0.3}}
                  height={25}
                  width={25}
                  className="object-cover cusrsor-pointer max-h-full items-end self-end"
                />
              </Link>
            )
          })}
        </div>
      </div>

      {/* <div className="flex max-w-ld md:max-w-[50%]">
        <MotionImage 
          src={"/hero.png"} 
          alt="profile" 
          width={200} 
          height={320} 
          className="object-cover max-h-full"
          initial="initial"
          animate="animate"
          variants={variants.moveLeft}
          transition={{...variants.moveLeft, delay: 1.5}}
        />
      </div> */}

    </div>
  )
}