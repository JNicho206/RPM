import React from "react";
import { FAQEntry, FAQEntryProps } from "../components/FAQEntry";
import { AdviceEntry, AdviceEntryProps } from "../components/AdviceEntry";
import questions from "../assets/data/faq/questions.json";
import advice from "../assets/data/faq/teacher-advice.json";
import { Separator } from "../components/Separator";

export const FAQ: React.FC = () =>
{


    return (
        <div className="flex flex-col items-center mx-20 my-20 gap-10">
            <div className="flex flex-col items-center">
                <h1 className="section-header">FAQ</h1>
                <div className="flex flex-col items-center gap-4">
                    {questions.map((q) => (
                        <FAQEntry question="How do I use this website?" answer="Check out our how to use page. This page covers materials you may need, and best practices."></FAQEntry>
                    ))}
                </div>
            </div>

            <div className="flex flex-col items-center w-[850px]">
                <h1 className="section-header">Advice From Teachers</h1>
                <div className="flex flex-col gap-4 items-center">
                    {advice.map((a, i) => (
                        <div>
                            <AdviceEntry advice={a.advice}></AdviceEntry>
                            {i < advice.length - 1 && <Separator type="icon" n={3} />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}