"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const qna = [
    {
      question: "What is the capital of Bangladesh?",
      option: [
        { opt: "Chittagong", ans: false },
        { opt: "Khulna", ans: false },
        { opt: "Dhaka", ans: true },
        { opt: "Sylhet", ans: false },
      ],
    },
    {
      question: "In which year did Bangladesh gain independence?",
      option: [
        { opt: "1947", ans: false },
        { opt: "1971", ans: true },
        { opt: "1952", ans: false },
        { opt: "1991", ans: false },
      ],
    },
    {
      question: "What is the national language of Bangladesh?",
      option: [
        { opt: "Bengali", ans: true },
        { opt: "Hindi", ans: false },
        { opt: "Urdu", ans: false },
        { opt: "English", ans: false },
      ],
    },
    {
      question: "Which river is the longest in Bangladesh?",
      option: [
        { opt: "Brahmaputra", ans: true },
        { opt: "Jamuna", ans: false },
        { opt: "Meghna", ans: false },
        { opt: "Padma", ans: false },
      ],
    },
    {
      question: "What is the national bird of Bangladesh?",
      option: [
        { opt: "Kingfisher", ans: false },
        { opt: "Doyel", ans: true },
        { opt: "Parrot", ans: false },
        { opt: "Peacock", ans: false },
      ],
    },
    {
      question: "Who is known as the Father of the Nation in Bangladesh?",
      option: [
        { opt: "Ziaur Rahman", ans: false },
        { opt: "Sheikh Hasina", ans: false },
        { opt: "Hussain Muhammad Ershad", ans: false },
        { opt: "Sheikh Mujibur Rahman", ans: true },
      ],
    },
    {
      question: "Which city is known as the 'City of Mosques' in Bangladesh?",
      option: [
        { opt: "Dhaka", ans: false },
        { opt: "Chittagong", ans: false },
        { opt: "Bogra", ans: false },
        { opt: "Bagerhat", ans: true },
      ],
    },
    {
      question: "What is the highest peak in Bangladesh?",
      option: [
        { opt: "Saka Haphong", ans: false },
        { opt: "Mowdok Mual", ans: true },
        { opt: "Keokradong", ans: false },
        { opt: "Tanguar Haor", ans: false },
      ],
    },
    {
      question:
        "Which Bangladeshi film won the National Film Award for Best Feature Film in 2020?",
      option: [
        { opt: "Jodi Ekdin", ans: false },
        { opt: "Dulove Maya", ans: false },
        { opt: "Chandrabati Kotha", ans: true },
        { opt: "Maya", ans: false },
      ],
    },
    {
      question: "Which UNESCO World Heritage Site is located in Bangladesh?",
      option: [
        { opt: "Sundarbans", ans: true },
        { opt: "Madhabkunda Waterfall", ans: false },
        { opt: "Kuakata Beach", ans: false },
        { opt: "Ratargul Swamp Forest", ans: false },
      ],
    },
    {
      question: "What is the primary currency used in Bangladesh?",
      option: [
        { opt: "Taka", ans: true },
        { opt: "Rupee", ans: false },
        { opt: "Dollar", ans: false },
        { opt: "Euro", ans: false },
      ],
    },
    {
      question: "Who was the first Prime Minister of Bangladesh?",
      option: [
        { opt: "Khaleda Zia", ans: false },
        { opt: "Sheikh Hasina", ans: false },
        { opt: "Muhammad Ali Jinnah", ans: false },
        { opt: "Tajuddin Ahmad", ans: true },
      ],
    },
    {
      question:
        "Which festival is celebrated in Bangladesh to mark the end of Ramadan?",
      option: [
        { opt: "Durga Puja", ans: false },
        { opt: "Eid-ul-Fitr", ans: true },
        { opt: "Pohela Boishakh", ans: false },
        { opt: "Eid-ul-Adha", ans: false },
      ],
    },
    {
      question:
        "What is the name of the largest river delta in the world, located in Bangladesh?",
      option: [
        { opt: "Ganges-Brahmaputra Delta", ans: true },
        { opt: "Amazon Delta", ans: false },
        { opt: "Nile Delta", ans: false },
        { opt: "Mississippi Delta", ans: false },
      ],
    },
    {
      question:
        "Which notable poet from Bangladesh won the Nobel Prize in Literature?",
      option: [
        { opt: "Kazi Nazrul Islam", ans: false },
        { opt: "Jibanananda Das", ans: false },
        { opt: "Rabindranath Tagore", ans: true },
        { opt: "Michael Madhusudan Dutt", ans: false },
      ],
    },
    {
      question: "Which of the following is a traditional dish from Bangladesh?",
      option: [
        { opt: "Sushi", ans: false },
        { opt: "Tandoori Chicken", ans: false },
        { opt: "Panta Ilish", ans: true },
        { opt: "Paella", ans: false },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [newQuestion, setNewQuestion] = useState(0);
  const [timeing, setTimeing] = useState(15);
  const [button, setButton] = useState("Next");
  const [showResult, setShowResult] = useState(false);
  const [showWrong, setShowWrong] = useState<
    { qidex: number; opidex: number; isWrong: boolean }[]
  >([]);
  const [count, setCount] = useState(0);

  const handleTimeing = () => {
    setTimeing((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(handleTimeing, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleActive = (optIdx: number, quesIdx: number) => {
    if (activeIndex === null && timeing > 0) {
      setActiveIndex(optIdx);

      const isWrong = !qna[quesIdx].option[optIdx].ans;
      setShowWrong((prevArray) => [
        ...prevArray,
        { qidex: quesIdx, opidex: optIdx, isWrong },
      ]);
    }
    if (qna[quesIdx].option[optIdx].ans === true) {
      setCount(count + 1);
    }
  };

  const handleNewQuestion = () => {
    if (newQuestion < qna.length - 1) {
      setNewQuestion((prevQuestion) => prevQuestion + 1);
      setActiveIndex(null);
      setTimeing(15);
    }
    if (newQuestion === qna.length - 2) {
      setButton("Finish");
    }
    if (newQuestion === qna.length - 1) {
      setShowResult(true);
    }
  };

  useEffect(() => {
    if (timeing === 0) {
      handleNewQuestion();
    }
  }, [timeing]);

  return (
    <main className="flex justify-center h-[100%]">
      <div className="max-w-[500px] w-[100%] h-[100%] flex flex-col">
        <div className="h-[8%] bg-[#2b4059] pr-6 flex items-center justify-end">
          <p className="text-white text-[15px]">{timeing}</p>
        </div>
        <div className="h-[92%] p-6 flex flex-col justify-between">
          <div className="mt-5">
            <h2 className="text-[23px] font-bold text-neutral-300 mb-8">
              {newQuestion + 1}
              {". "}
              {qna[newQuestion]?.question}
            </h2>
            <div>
              {qna[newQuestion]?.option.map((item, idx) => (
                <div
                  key={idx}
                  className={`bg-[#cbd7e3] h-14 font-semibold rounded-full ${
                    activeIndex === idx
                      ? " bg-[#e78230] text-white"
                      : "text-neutral-700"
                  } flex pl-4 items-center cursor-pointer mb-4 text-[14px]`}
                  onClick={() => handleActive(idx, newQuestion)}
                >
                  {item.opt}
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button
              className="bg-[#3f3d55] hover:bg-[#3d3a51] transition-all h-10 w-24 text-white text-[14px] rounded-xl"
              onClick={handleNewQuestion}
            >
              {button}
            </button>
          </div>
        </div>
      </div>

      <div
        className={` p-6 max-w-[500px] w-[100%] h-[auto] ${
          showResult ? "flex" : "hidden"
        } flex-col absolute bg-[#242a40]`}
      >
        <div className="w-[100%] flex items-center justify-center">
          <img
            src="/images/imagetwo.jpg"
            className="w-[100%] rounded-xl"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center justify-center h-[300px]">
          <p className="text-neutral-300 font-bold text-[23px]">
            congratulation
          </p>
          <h3 className="text-neutral-300 font-normal text-[14px]">
            You got {count} out of {qna.length}
          </h3>
        </div>

        <div>
          {qna.map((itemq, idxq) => (
            <div className="mt-16" key={idxq}>
              <h2 className="text-[23px] font-bold text-neutral-300 mb-8">
                {idxq + 1}
                {".  "}
                {itemq.question}
              </h2>
              <div>
                {itemq.option.map((item, idx) => (
                  <div
                    key={idx}
                    className={`h-14 rounded-full bg-[#cbd7e3] font-semibold text-neutral-700 flex pl-4 items-center mb-4 text-[14px] ${
                      item.ans
                        ? "bg-[#e78230] text-white"
                        : showWrong.find(
                            (wrong) =>
                              wrong.qidex === idxq &&
                              wrong.opidex === idx &&
                              wrong.isWrong
                          )
                        ? "border-[#FF6363] bg-[#ff3434fd]"
                        : ""
                    }`}
                  >
                    {item.opt}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
