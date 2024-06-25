import React from "react";


export const Home: React.FC = () =>
{
    const goalInfo = [
        {
            n: 1,
            title: "Mathematical Language",
            description: "Explain what is it and why it is important"
        },
        {
            n: 2,
            title: "Dialogic Reading",
            description: "Explain what is it and why it is important"
        },
        {
            n: 3,
            title: "Guided Play",
            description: "Explain what is it and why it is important"
        },
        {
            n: 4,
            title: "Attending to Linguisitc and Culture",
            description: "Explain what is it and why it is important"
        }
    ]

    return (
        // RPL Picture 35 --> Description 65

        // Goals

        // Goal info
        <div className="flex w-full h-full flex-col">
            <div className="flex w-full h-30">
                <div className="w-35 h-full">
                    <img></img>
                </div>
                <div className="w-65 h-full">

                </div>
            </div>
            <div className="flex w-full h-70">{/* Goals */}
                {goalInfo.map((goal) => (
                    <Goal n={goal.n} title={goal.title} description={goal.description}></Goal>
                ))}
            </div>
        </div>
    )
}



interface GoalProps
{
    n: number,
    title: string,
    description: string
};
const Goal: React.FC<GoalProps> = ({n, title, description}) =>
{

    return(
        <div className="flex flex-col ">
            <h4>{n}</h4>
            <div className="flex flex-col gap-4">
                <p>{title}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}