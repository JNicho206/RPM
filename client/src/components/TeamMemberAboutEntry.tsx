import React from "react";

export interface TeamMemberAboutEntryProps {
    name: string,
    bio: string,
    img: string
};

export const TeamMemberAboutEntry: React.FC<TeamMemberAboutEntryProps> = ({name, bio, img}) => {

    return (
        <div className="flex gap-8">
            <img className="h-[200px] w-[150px]" src={img}></img>
            <p className="self-center">{bio}</p>
        </div>
    )
}