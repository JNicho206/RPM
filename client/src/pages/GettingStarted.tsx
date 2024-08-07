import React from "react";


export const GettingStarted: React.FC = () => {
    return (
        <div className="flex flex-col items-center my-20 gap-4">
            <h1 className="section-header">Getting Started</h1>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col items-center">
                    <a href="/how-to-use" className="hov-underline-anim max-w-fit">
                        <div className="flex justify-center items-center gap-4">
                            <h3>How To Use</h3>
                        </div>
                    </a>
                    <p className="text-2xl">Check out training videos from our team, detailed materials lists and session guides, and learn how to monitor progress.</p>
                </div>
                <div className="flex flex-col items-center items-center">
                    <a href="/books" className="hov-underline-anim max-w-fit">
                        <div className="flex justify-center items-center gap-4">
                            <h3>Books</h3>
                        </div>
                    </a>
                    <p className="text-2xl">Check out all 6 books used in the Read Play Math program.</p>
                </div>
                <div className="flex flex-col items-center">
                    <a href="/about" className="hov-underline-anim max-w-fit">
                        <div className="flex justify-center items-center gap-4">
                            <h3>About</h3>
                        </div>
                    </a>
                    <p className="text-2xl">Meet our team and learn about what they do and explore the research and evidence backing up Read Play Math.</p>
                </div>
                <div className="flex flex-col items-center">
                    <a href="/faq" className="hov-underline-anim max-w-fit">
                        <div className="flex justify-center items-center gap-4">
                            <h3>FAQ</h3>
                        </div>
                    </a>
                    <p className="text-2xl">Read through helpful advice from teachers experienced with this program and access answers to common questions from users.</p>
                </div>
            </div>
        </div>
    )};