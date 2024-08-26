"use client"
import React, { useState } from 'react'
import Link from 'next/link'



const page = () => {

    const [active, setActive] = useState(false)

    const handleActive = () => {
        setActive(true)
    }


    return (
        <main className="flex items-center justify-center h-[100%]">
            <div className="max-w-[400px] w-[100%] h-[100%] flex flex-col">
                <div className='h-[8%] bg-[#3f3d55] pr-6 flex items-center justify-end'>
                    <p className='text-white text-[15px]'>1</p>
                </div>
                <div className='h-[92%] p-6 flex flex-col justify-between'>
                <div className='mt-5'>
                    <h2 className="text-[23px] font-bold text-[#3f3d55] mb-8">
                        shdklsdjf dsklfj shfdk?
                    </h2>
                    <div>
                        <div className={`h-14 border-[4px] rounded-xl ${active?'border-[#63FF70] bg-[#63ff703e]':''} text-neutral-700 flex pl-4 items-center cursor-pointer mb-4 text-[14px]`} onClick={handleActive}>
                            hello
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-end">
                    <Link href='/question'><button className="bg-[#3f3d55] hover:bg-[#2f2d3f] transition-all h-10 w-24 text-white text-[15px] rounded-xl">Next</button></Link>
                </div>
                </div>
            </div>
        </main>
    )
}

export default page
