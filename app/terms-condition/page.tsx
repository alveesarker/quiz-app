import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <main className="flex items-center justify-center h-[100%]">
            <div className="max-w-[400px] w-[100%] h-[100%] flex flex-col justify-between p-6">
                <div>
                    <h1 className="text-[23px] font-bold text-[#3f3d55] mb-10">Rules for the quiz</h1>
                    <ol className='list-decimal ml-4'>
                        <li className="text-[15px] text-neutral-600 mb-2">Lorem ipsum dolor sit.</li>
                        <li className="text-[15px] text-neutral-600 mb-2">Lorem ipsum dolor sit.</li>
                        <li className="text-[15px] text-neutral-600 mb-2">Lorem ipsum dolor sit.</li>
                        <li className="text-[15px] text-neutral-600 mb-2">Lorem ipsum dolor sit.</li>
                        <li className="text-[15px] text-neutral-600 mb-2">Lorem ipsum dolor sit.</li>
                        <li className="text-[15px] text-neutral-600 mb-2">Lorem ipsum dolor sit.</li>
                        <li className="text-[15px] text-neutral-600 mb-2">Lorem ipsum dolor sit.</li>
                        <li className="text-[15px] text-neutral-600 mb-2">Lorem ipsum dolor sit.</li>
                    </ol>
                </div>
                <div className="flex items-center justify-between">
                    <Link href='/'><button className="bg-[#3f3d55] hover:bg-[#2f2d3f] transition-all h-10 w-24 text-white text-[15px] rounded-xl">Back</button></Link>
                    <Link href='/question'><button className="bg-[#3f3d55] hover:bg-[#2f2d3f] transition-all h-10 w-24 text-white text-[15px] rounded-xl">Start Quiz</button></Link>
                </div>
            </div>
        </main>
    )
}

export default page
