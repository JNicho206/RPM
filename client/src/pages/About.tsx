import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import mock from "../assets/data/about/our-team/photos/mock.jpg";
import memberData from "../assets/data/about/our-team/team-info.json";
import { TeamMemberAboutEntry, TeamMemberAboutEntryProps } from "../components/TeamMemberAboutEntry";
import Card from "react-bootstrap/Card";
import { RouteButton } from "../components/RouteButton";
import { Link } from "react-router-dom";


export const About: React.FC = () =>
{

    return (
        <div className="my-20">
            <Routes>
                <Route path="/" element={<Default/>}></Route>
                <Route path="research" element={<Research/>}></Route>
                <Route path="our-team" element={<OurTeam/>}></Route>
            </Routes>
        </div>
    )
}

const Default: React.FC = () => {
    const [researchBg, setResearchBg] = useState("secondary");
    const [ourTeamBg, setOurTeamBg] = useState("secondary");

    const handleResearchEnter = () => {
        setResearchBg("info");
    }
    const handleResearchLeave = () => {
        setResearchBg("secondary");
    }

    const handleOurTeamEnter = () => {
        setOurTeamBg("info");
    }
    const handleOurTeamLeave = () => {
        setOurTeamBg("secondary");
    }

    return (
        <div className="flex flex-col items-center mx-20">
            <h1>About</h1>
            <div className="flex gap-10">
                <Link to="research">
                    <Card bg={researchBg} text="white" style={{ width: '25rem', height: "350px", cursor: "pointer"}} onMouseEnter={handleResearchEnter} onMouseLeave={handleResearchLeave}>
                        <Card.Body>
                            <Card.Title>Research</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Publications and Evidence for RPM</Card.Subtitle>
                            <Card.Text>
                            Here you can view publications from our researchers about ... You can also read through evidence that supports the methods used in RPM.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
                <Link to="our-team">
                    <Card bg={ourTeamBg} text="white" style={{ width: '25rem', height: "350px", cursor: "pointer"}} onMouseEnter={handleOurTeamEnter} onMouseLeave={handleOurTeamLeave}>
                        <Card.Body>
                            <Card.Title>Our Team</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Meet our team and learn more about them and their work.</Card.Subtitle>
                            <Card.Text>
                            Here you can get to know our team members, what their roles have been, and check out links to their work and profiles.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Link>
            </div>

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
                    <TeamMemberAboutEntry name={member.name as string} bio={member.bio as string} img={member.img as string}></TeamMemberAboutEntry>
                ))}
            </div>
        </div>
    )
}