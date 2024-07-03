import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { GPSessionEntry, GPSessionEntryProps } from "./GPSessionEntry";


export interface GPUnitEntryProps {
    name: string,
    sessions: GPSessionEntryProps[],
};

export const GPUnitEntry: React.FC<GPUnitEntryProps> = ({name, sessions}) => {

    return (
        <div>
            <Accordion className="w-[700px]">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{name}</Accordion.Header>
                    <Accordion.Body>
                        {sessions.map((s, index) => (
                            <GPSessionEntry name={s.name} objective={s.objective} pdf={s.pdf}></GPSessionEntry>
                        ))}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>

    )
};