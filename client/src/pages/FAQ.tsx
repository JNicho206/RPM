import React from "react";
import { FAQEntry, FAQEntryProps } from "../components/FAQEntry";
import { AdviceEntry, AdviceEntryProps } from "../components/AdviceEntry";
import questions from "../assets/data/faq/questions.json";
import advice from "../assets/data/faq/teacher-advice.json";

export const FAQ: React.FC = () =>
{


    return (
        <div className="flex flex-col items-center mx-20">
            <div className="flex flex-col">
                <h1>FAQ</h1>
                <div>
                    {questions.map((q) => (
                        <FAQEntry></FAQEntry>
                    ))}
                </div>
            </div>

            <div>
                <h1>Advice From Teachers</h1>
                <div>
                    {advice.map((a) => (
                        <AdviceEntry></AdviceEntry>
                    ))}
                </div>
            </div>
        </div>
    )
}