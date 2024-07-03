import React from "react";
import { Accordion } from "react-bootstrap";
import {Routes, Route} from "react-router-dom";
import units from "../assets/data/how-to-use/guided-play/unit-info.json";
import { GPUnitEntry } from "../components/GPUnitEntry";

export const HowToUse: React.FC = () =>
{

    return (
        <div className="my-20">
            <Routes>
                <Route path="/" element={<Default/>}></Route>
                <Route path="training-materials" element={<TrainingMaterials/>}></Route>
                <Route path="materials-needed" element={<MaterialsNeeded/>}></Route>
                <Route path="progress-monitoring" element={<ProgressMonitoring/>}></Route>
            </Routes>
        </div>
    )
}

const Default: React.FC = () =>
{
    return (
        <div>
            
        </div>

    )
}

const TrainingMaterials: React.FC = () =>
{
    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="section-header">Training Materials</h1>
        </div>

    )
}

const MaterialsNeeded: React.FC = () =>
{
    return (
        <div className="flex flex-col items-center gap-4">
            <div>
                <h1 className="section-header">Materials</h1>
                <div className="flex flex-col items-center">
                    <ul className="list-disc">
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                    </ul>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="section-header">Guided Play Materials</h1>
                <div className="flex flex-col gap-4">
                    {units.map((u, index) => (
                        <GPUnitEntry name={u.name} sessions={u.sessions}></GPUnitEntry>
                    ))}
                </div>
            </div>
        </div>

    )
}

const ProgressMonitoring: React.FC = () =>
{
    return (
        <div className="flex flex-col items-center gap-4">
            <h1 className="section-header">Progress Monitoring</h1>
        </div>

    )
}