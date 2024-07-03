import React from "react";
import { FaFilePdf } from "react-icons/fa6";
import Accordion from "react-bootstrap/Accordion";
import { RouteButton } from "./RouteButton";

export interface GPSessionEntryProps {
    name: string,
    pdf: string,
    objective: string
};


export const GPSessionEntry: React.FC<GPSessionEntryProps> = ({name, pdf, objective}) => {

    const pdfRoute = "/how-to-use/guided-play/" + pdf;

    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{name}</Accordion.Header>
                    <Accordion.Body>
                        <div className="flex flex-col items-center gap-2">
                            <span>{objective}</span>
                            <RouteButton title="Session Guide" route={pdfRoute} Icon={FaFilePdf}></RouteButton>
                        </div>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    )


};




