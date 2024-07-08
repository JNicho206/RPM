import React from "react";
import { FaFilePdf } from "react-icons/fa6";
import Accordion from "react-bootstrap/Accordion";
import { RouteButton } from "./RouteButton";
import { OpenPDFButton } from "./OpenPDFButton";

export interface GPSessionEntryProps {
    name: string,
    pdf: string,
    objective: string
};


export const GPSessionEntry: React.FC<GPSessionEntryProps> = ({name, pdf, objective}) => {

    const pdfRoute = "/assets/data/" + pdf;

    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{name}</Accordion.Header>
                    <Accordion.Body>
                        <div className="flex flex-col items-center gap-2">
                            <span>{objective}</span>
                            <OpenPDFButton path={pdfRoute}></OpenPDFButton>
                        </div>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    )
};




