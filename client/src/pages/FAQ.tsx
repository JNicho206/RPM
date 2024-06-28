import React from "react";
import { FAQEntry, FAQEntryProps } from "../components/FAQEntry";
import { AdviceEntry, AdviceEntryProps } from "../components/AdviceEntry";
import questions from "../assets/data/faq/questions.json";
import advice from "../assets/data/faq/teacher-advice.json";

export const FAQ: React.FC = () =>
{


    return (
        <div className="flex flex-col items-center mx-20 my-20 gap-10">
            <div className="flex flex-col">
                <h1 className="text-center border-b-4 border-black border-solid w-min px-8">FAQ</h1>
                <div>
                    {questions.map((q) => (
                        <FAQEntry></FAQEntry>
                    ))}
                </div>
            </div>

            <div>
                <h1 className="border-b-4 border-black border-solid w-fit px-8">Advice From Teachers</h1>
                <div>
                    {advice.map((a) => (
                        <AdviceEntry></AdviceEntry>
                    ))}
                </div>
            </div>
        </div>
    )
}