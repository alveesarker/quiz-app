import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <main className="flex items-center justify-center h-[100%]">
            <div className="max-w-[500px] w-[100%] h-[100%] flex flex-col justify-between p-6">
                <div>
                    <h1 className="text-[23px] font-bold text-[#e1e1e1] mb-10">Rules for the quiz</h1>
                    <ol className='list-decimal ml-4'>
                        <li className="text-[14px] text-neutral-200 mb-4">Each question must be answered within 15 seconds. If the time expires, the question will automatically move to the next one.</li>
                        <li className="text-[14px] text-neutral-200 mb-4">Once an answer for a question is selected, it cannot be deselected or changed.</li>
                        <li className="text-[14px] text-neutral-200 mb-4">You cannot go back to previous questions once they have moved forward.</li>
                        <li className="text-[14px] text-neutral-200 mb-4">The quiz can only be submitted once all questions have been answered or the time limit for the entire quiz has been reached.</li>
                        <li className="text-[14px] text-neutral-200 mb-4">You will navigate through the quiz in a linear fashion.</li>
                        <li className="text-[14px] text-neutral-200 mb-4">You will receive feedback on their answers only after all questions have been answered.</li>
                        <li className="text-[14px] text-neutral-200 mb-4">Scores are calculated based on the number of correct answers and displayed at the end of the quiz.</li>
                        <li className="text-[14px] text-neutral-200 mb-4">Answers are recorded in real-time, and no progress is lost if you navigate to the next question or submit the quiz.</li>
                    </ol>
                </div>
                <div className="flex items-center justify-between">
                    <Link href='/'><button className="bg-[#3f3d55] hover:bg-[#3d3a51] transition-all h-10 w-24 text-white text-[14px] rounded-xl">Back</button></Link>
                    <Link href='/question'><button className="bg-[#3f3d55] hover:bg-[#3d3a51] transition-all h-10 w-24 text-white text-[14px] rounded-xl">Start Quiz</button></Link>
                </div>
            </div>
        </main>
    )
}

export default page
