import { TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { backEndSkills, database, frontEndSkills, versionControl } from "@/utils/data";
import { transition, variants } from "@/utils/framer_variants";
import { MotionButton, MotionDiv, MotionImage, MotionTabs } from "@/utils/motionTags";
;

export default function Resume() {
    return(
        <div className="max-w-4xl mx-auto min-h-screen pt-32 2xl:pt-40 pb-4 px-1 sm:px-4 lg:px-0">
            <div className="flex flex-col md:flex-row items-center justify-between gap-7 md:gap-0 w-full">
            
            <div className="flex flex-col md:flex-row gap-x-7 gap-y-4 sm:gap-y-0 items-center">
                <MotionImage 
                    initial="initial" 
                    animate="animate" 
                    variants={variants.scale}
                    transition={transition.scale}
                    src={"/profile1.jpg"}
                    width={155}
                    height={155}
                    alt="profile"
                    className="w-28 md:w-36"
                />
                <MotionDiv
                    initial="initial" 
                    animate="animate" 
                    variants={variants.moveDown}
                    transition={transition.moveDown}
                    className="text-center sm:text-left"
                >
                    <h3 className="mb-2">Sabarinathan <span>V</span></h3>
                    <h5 className="text-gray-500">Theni, Tamilnadu</h5>
                </MotionDiv>
            </div>

            <MotionButton
                initial="initial"
                animate="animate"
                variants={variants.moveDown}
                transition={transition.moveDown}
                variant="outline"
                size="lg"
                className="bg-gray-500 text-white"
            >
                Software Developer
            </MotionButton>
            </div>

            <MotionTabs
                initial="initial"
                animate="animate"
                variants={variants.moveUp}
                transition={transition.moveUp}
                className="leading-7 mt-10"
                defaultValue="about"
            >
                <TabsList>
                    <TabsTrigger value="about">
                        About
                    </TabsTrigger>
                    <TabsTrigger value="skills">
                        Skills
                    </TabsTrigger>
                    <TabsTrigger value="experience">
                        Experience
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="about">
                    <h6>Who I&apos;m</h6>
                    <p className="text-accent-foreground mt-2">
                    As a Full Stack Developer, I specialize in React and Node.js, creating scalable web applications and efficient RESTful APIs. I excel in collaborative environments, focusing on problem-solving and delivering high-quality solutions that improve user experiences and meet business goals
                    </p>                       
                </TabsContent>

                <TabsContent value="skills">
                    <h6>Experienced with</h6> 
                    <div className="mb-2">
                        <p className="text-accent-foreground mt-2 mb-2 font-semibold">Front-End Technologies:</p>
                        <div className='flex gap-2 flex-wrap'>
                        {
                            frontEndSkills.map(item => (
                                <div key={item.id} className="flex flex-row gap-2 px-2 py-1 rounded-md bg-background items-center text-black">
                                    <img src={item.image} className="w-5 h-5" />
                                    <p className='text-center'>{item.name}</p>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    <div className="mb-2">
                        <p className="text-accent-foreground mt-2 mb-2 font-semibold">Back-End Technologies:</p>
                        <div className='flex gap-2 flex-wrap'>
                        {
                            backEndSkills.map(item => (
                                <div key={item.id} className="flex flex-row gap-2 px-2 py-1 rounded-md bg-background items-center text-black">
                                    <img src={item.image} className="w-5 h-5" />
                                    <p className='text-center'>{item.name}</p>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    <div className="mb-2">
                        <p className="text-accent-foreground mt-2 mb-2 font-semibold">Databases:</p>
                        <div className='flex gap-2 flex-wrap'>
                        {
                            database.map(item => (
                                <div key={item.id} className="flex flex-row gap-2 px-2 py-1 rounded-md bg-background items-center text-black">
                                    <img src={item.image} className="w-5 h-5" />
                                    <p className='text-center'>{item.name}</p>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                    <div className="mb-2">
                        <p className="text-accent-foreground mt-2 mb-2 font-semibold">Version Control:</p>
                        <div className='flex gap-2 flex-wrap'>
                        {
                            versionControl.map(item => (
                                <div key={item.id} className="flex flex-row gap-2 px-2 py-1 rounded-md bg-background items-center text-black">
                                    <img src={item.image} className="w-5 h-5" />
                                    <p className='text-center'>{item.name}</p>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="experience">
                    <h6>My Work</h6>
                    <p className="text-accent-foreground mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum commodi unde deleniti dignissimos. Molestiae, magnam dolorem enim minus atque doloribus, ut, facere ipsam nostrum illo possimus in provident suscipit.</p>
                    <p className="text-accent-foreground mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores laborum commodi unde deleniti dignissimos. Molestiae, magnam dolorem enim minus atque doloribus, ut, facere ipsam nostrum illo possimus in provident suscipit.</p>
                     
                </TabsContent>

            </MotionTabs>
        </div>
    )
}