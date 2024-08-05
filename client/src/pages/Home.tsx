import React from "react";
import logo from "../assets/tmp.jpg"
import { FaArrowCircleRight } from "react-icons/fa";

export const Home: React.FC = () =>
{
    const goalInfo = [
        {
            n: 1,
            title: "Mathematical Language",
            description: "Provide children with knowledge and understanding of key quantitative mathematical language terms and concepts that build the foundation of mathematics development."
        },
        {
            n: 2,
            title: "Dialogic Reading",
            description: "Support children with the ability to apply this knowledge in hands-on and meaningful ways that extend into the classroom."
        },
        {
            n: 3,
            title: "Guided Play",
            description: "Show children that mathematics can be used to solve real world challenges and help them better understand their world."
        },
        {
            n: 4,
            title: "Attending to Linguistic and Culture",
            description: "Enhance students’ and teachers’ love of mathematics through intentional learning experiences that fit naturally into a typical preschool classroom."
        }
    ]

    return (
        // RPL Picture 35 --> Description 65

        // Goals

        // Goal info
        <div className="flex w-full h-full flex-col mb-20">
            <div className="flex w-full h-30">
                <div className="w-35 h-full">
                    <img src={logo} alt="Read Play Math Logo" className="w-full h-full"></img>
                </div>
                <div className="w-65 h-full flex items-center justify-center text-center mx-20 my-5">
                    <p className="text-2xl text-center">Read. Play. Math. Is an online learning platform designed to help children strengthen their math skills by ...</p>
                </div>
            </div>
            <div className="flex w-full h-70 mt-5">{/* Goals */}
                {goalInfo.map((goal) => (
                    <Goal key={goal.n} n={goal.n} title={goal.title} description={goal.description}></Goal>
                ))}
            </div>
            <div className="my-20 flex justify-center">
                <a href="#" className="nav-link max-w-fit">
                    <div className="flex justify-center items-center gap-4">
                        <span className="text-2xl">Get Started</span>
                        <FaArrowCircleRight />
                    </div>
                    
                </a>
            </div>
        </div>
    )
}



interface GoalProps
{
    n: number,
    title: string,
    description: string
}

const Goal: React.FC<GoalProps> = ({n, title, description}) =>
{

    return(
        <div className="flex flex-col border-r-2 border-black border-solid flex-1 items-center p-5">
            <h1 className="text-center">{n}</h1>
            <div className="flex flex-col gap-4">
                <h4 className="text-center">{title}</h4>
                <p className="text-center">{description}</p>
            </div>
        </div>
    )
}