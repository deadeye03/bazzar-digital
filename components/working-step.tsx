'use client'

import { steps } from "@/data";
import { motion } from "framer-motion";
import Image from "next/image";



const gradientTitle={
    hidden:{opacity:0,x:-100},
    visible:(i:number)=>({
        opacity:1,
        x:0,
        transition:{duration:0.3,delay:0.5+i*0.2,ease:[0.25,0.4,0.25,1]}
    })
}


export default function WorkingStep() {
    return (
        <section className="px-4 md:px-12 pb-8">
            <div className="py-12 md:20 flex flex-col items-center justify-center  gap-4 md:gap-8">
                <p className="text-xl text-pink-600 font-bold">Working Step</p>
                <h1 className="font-bold gradient-title text-3xl sm:text-4xl md:text-5xl ">How Bazzar Digital work behind the scenes</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
                <div className="max-w-4xl mx-auto ">
                    <div className="space-y-8">
                        {steps.map((step, index) => (
                            <motion.div
                            custom={index} 
                            variants={gradientTitle}
                            initial="hidden"
                            whileInView="visible"
                              key={index} className="flex items-start gap-6" >
                                <div className="flex-shrink-0">
                                    <div
                                        className={`text-4xl font-bold leading-none gradient-title text-transparent`}
                                    >
                                        {step.number}
                                    </div>
                                </div>
                                <div className="">
                                    <h2 className="text-3xl font-bold gradient-title mb-1 ">{step.title}</h2>
                                    <p className="text-gray-600 text-lg">{step.description}</p>
                                </div>
                            </motion.div >
                        ))}
                    </div>
                </div>

                <div className="relative h-full w-full">
                    <Image src='/banner1.webp' alt="Huly App Interface" width={1200} height={800} className="w-full h-auto rounded-md" />
                </div>
            </div>
        </section>
    )
}