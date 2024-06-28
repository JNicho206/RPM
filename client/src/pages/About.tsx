import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import mock from "../assets/data/about/our-team/photos/mock.jpg";
import memberData from "../assets/data/about/our-team/team-info.json";
import { TeamMemberAboutEntry, TeamMemberAboutEntryProps } from "../components/TeamMemberAboutEntry";


export const About: React.FC = () =>
{

    return (
        <div className="my-20">
            <Routes>
                <Route path="research" Component={Research}></Route>
                <Route path="our-team" Component={OurTeam}></Route>
            </Routes>
        </div>
    )
}

export const Research: React.FC = () =>
{
    const publicationsInfo = {

    }

    return (
        <div className="flex flex-col justify-center items-center gap-4">
            {/* Evidence */}
            <div className="flex flex-col gap-4 items-center"> 
                <h1 className="text-center border-b-4 border-black border-solid w-min px-8">Evidence</h1>
                <p className="mx-72">
                Derecho de autor 2024 Caroline Byrd Hornburg, David J. Purpura, El consejo de administración de la Universidad de Purdue. ",
                "Derechos reservados. Ninguna parte de esta publicación puede ser reproducida, distribuida o transmitida en cualquier forma o por cualquier medio, incluyendo fotocopias, grabaciones u otros medios electrónicos o mecánicos, ",
                "sin el permiso previo del editor, excepto en el caso de citas breves incorporadas en revisiones críticas y ciertos otros usos no comerciales permitidos por la ley de derechos de autor. ",
                "Para solicitar permiso escriba al Dr. David Purpura, purpura@purdue.edu 1202 Mitch Daniels Bulevar Suite 310 West Lafayette, Indiana 4 7 9 0 7 ",
                "El desarrollo de este libro fue financiado por Advanced Education Research y Development Fund's (AERDF) EF+Math Program, patrocinado fiscalmente por NewSchools Venture Fund. ",
                "El equipo de Nuestro Mundo Matemático (Our Mathematical World) reconoce las contribuciones de los educadores y el personal del distrito escolar de la ciudad de Middletown y Hubbard Media Arts Academy. ",
                "Publicado por: David J. Purpura, West Lafayette, Indiana 4 7 9 0 7
                </p>
            </div>
            {/* Publications*/}
            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-center border-b-4 border-black border-solid w-min px-8">Publications</h1>
                <p className="mx-72">
                Derecho de autor 2024 Caroline Byrd Hornburg, David J. Purpura, El consejo de administración de la Universidad de Purdue. ",
                "Derechos reservados. Ninguna parte de esta publicación puede ser reproducida, distribuida o transmitida en cualquier forma o por cualquier medio, incluyendo fotocopias, grabaciones u otros medios electrónicos o mecánicos, ",
                "sin el permiso previo del editor, excepto en el caso de citas breves incorporadas en revisiones críticas y ciertos otros usos no comerciales permitidos por la ley de derechos de autor. ",
                "Para solicitar permiso escriba al Dr. David Purpura, purpura@purdue.edu 1202 Mitch Daniels Bulevar Suite 310 West Lafayette, Indiana 4 7 9 0 7 ",
                "El desarrollo de este libro fue financiado por Advanced Education Research y Development Fund's (AERDF) EF+Math Program, patrocinado fiscalmente por NewSchools Venture Fund. ",
                "El equipo de Nuestro Mundo Matemático (Our Mathematical World) reconoce las contribuciones de los educadores y el personal del distrito escolar de la ciudad de Middletown y Hubbard Media Arts Academy. ",
                "Publicado por: David J. Purpura, West Lafayette, Indiana 4 7 9 0 7
                </p>
            </div>
            {/* Maybe a copyright notice */}
        </div>
    )
}

export const OurTeam: React.FC = () =>
{

    return (
        // Probably load this from a file
        <div className="flex flex-col items-center gap-14 mx-96 mt-20 mb-20">
            <h1 className="font-bold text-5xl border-b-4 border-black border-solid px-4">Our Team</h1>
            <div className="flex flex-col items-center gap-10">
                {memberData.map((member) => (
                    <TeamMemberAboutEntry name={member.name as string} bio={member.bio as string} img={mock as string}></TeamMemberAboutEntry>
                ))}
            </div>
        </div>
    )
}