import React, {useState} from "react";
import {Routes, Route} from "react-router-dom";
import units from "../assets/data/how-to-use/guided-play/unit-info.json";
import { GPUnitEntry } from "../components/GPUnitEntry";
import materials from "../assets/data/how-to-use/materials-needed.json";
import { Link } from "react-router-dom";
import { GPTable } from "../components/GPTable";
import { ToggleButton, ToggleButtonGroup } from "../components/ToggleButtonGroup";
import pgData from "../assets/data/how-to-use/progress-monitoring/info.json";
import { FileButton } from "../components/FileButton";

interface MaterialLink {
    file: boolean,
    path: string
}

interface Material {
    material: string,
    items?: string[],
    link?: MaterialLink
}

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

    const [sortTableBy, setSortTableBy] = useState<string>("");

    const handleClickSortByWeek = (i: number) => {
        setSortTableBy("week");
        GPTablebuttons[i].toggled = true;
    }

    const handleClickSortByMaterial = () => {
        setSortTableBy("material");
    }

    const GPTablebuttons: ToggleButton[] = [
        {
            id: 0,
            text: "Week",
            toggled: false,
            onClick: handleClickSortByWeek
        },
        {
            id: 1,
            text: "Material",
            toggled: false,
            onClick: handleClickSortByMaterial
        }
    ]

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="flex flex-col items-center">
                <h1 className="section-header">Materials</h1>
                <div className="flex flex-col items-center">
                    <ol className="list-decimal">
                        {materials.map((m: Material, i) => (
                            <li key={i}>
                                {/* No Link */}
                                {!m.link && m.material} 
                                {/* Link and path is to a file */}
                                {m.link && m.link.file && <a href={m.link?.path} target="_blank" rel="noopener noreferrer">{m.material}</a>}
                                {/* Link and path is to a page */}
                                {m.link && !m.link.file && <Link to={m.link.path}>{m.material}</Link>}

                                {m.items && 
                                    <ul className="list-disc">
                                        {m.items.map((i) => (<li>{i}</li>))}
                                    </ul>
                                }
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
            <div className="flex flex-col items-center">
                <h1 className="section-header">Session Guides</h1>
                <div className="flex flex-col gap-4">
                    {units.map((u, index) => (
                        <GPUnitEntry key={index} name={u.name} sessions={u.sessions}></GPUnitEntry>
                    ))}
                </div>
            </div>
            <div className="flex flex-col items-center gap-4 ">
                <h1 className="section-header">Guided Play Materials</h1>
                <h4>Sort By:</h4>
                <ToggleButtonGroup buttons={GPTablebuttons} multiSelect={false}></ToggleButtonGroup> 
                <GPTable sortTableBy={sortTableBy}></GPTable>  
            </div>
        </div>

    )
}

const ProgressMonitoring: React.FC = () =>
{
    return (
        <div className="flex flex-col items-center gap-4 mx-96">
            <h1 className="section-header">Progress Monitoring</h1>
            <div>
                <ul className="list-disc">
                    {pgData.map((pg: string) => (
                        <li className="pb-4">
                            {pg}
                        </li>
                    ))}
                </ul>
            </div>
            <h3>Progress Monitoring CheckList</h3>
            <FileButton type="open" path="/assets/data/how-to-use/progress-monitoring/progress-monitoring-checklist.png" text="View Checklist"></FileButton>
            <FileButton type="download" path="/assets/data/how-to-use/progress-monitoring/progress-monitoring-checklist.png" text="Download Checklist"></FileButton>
        </div>

    )
}