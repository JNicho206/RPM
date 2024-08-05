import React from "react";
import unit_data from "../assets/data/how-to-use/guided-play/unit-info.json";
export interface GPTableProps {
    sortTableBy: string,
}

type Unit = {
    sessions: {
        name: string;
        "guided-play": {
            materials: string[];
        };
    }[];
};

export const GPTable: React.FC<GPTableProps> = ({sortTableBy}) => {

    const byWeek: string[][] = [];
    const byMaterial: { [key: string]: number[] }  = {};
    for (const unit of unit_data as Unit[]) {
        unit.sessions.map((session) => {
            const week = Number(session.name.split(" ")[1]);
            const materials = session["guided-play"].materials;
            
            if (!byWeek[week]) {
                byWeek[week] = [];
            }
            byWeek[week].push(...materials);
    
            for (const material of materials) {
                if (byMaterial[material]) {
                    byMaterial[material].push(week);
                } else {
                    byMaterial[material] = [week];
                }
            }
        });
    }
    

    return (
        <>
        <div className="flex justify-center overflow-y-auto h-[700px] border-4 border-black border-solid">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="w-[200px] px-6 py-3">
                            {sortTableBy === "week" ? "Week" : "Material"}
                        </th>
                        <th scope="col" className="w-[200px] px-6 py-3">
                            {sortTableBy === "week" ? "Material" : "Week"}
                        </th>
                        <th scope="col" className="w-[200px] px-6 py-3">
                            Purchase It
                        </th>
                        <th scope="col" className="w-[200px] px-6 py-3">
                            Make It
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {sortTableBy === "week" && 
                    <>
                        {byWeek.map((week, weekIndex) => (
                            week.map((material, materialIndex) => (
                                <tr key={`${weekIndex}-${materialIndex}`} className="border-b border-1 border-black">
                                    {materialIndex === 0 && (
                                        <td rowSpan={week.length} className="px-6 py-4 font-extrabold text-5xl text-center border-black border-b border-1">Week {weekIndex}</td>
                                    )}
                                    <td className="px-6 py-4">{material}</td>
                                    <td className="px-6 py-4">Purchase It</td>
                                    <td className="px-6 py-4">Make It</td>
                                </tr>
                            ))
                        ))}
                    </>
            }

                    {sortTableBy === "material" && 
                        <>
                            {Object.keys(byMaterial).map((material, index) => (
                                <tr key={index}  className="w-full border-b border-1 border-black">
                                    <td className="px-6 py-4 font-extrabold">{material}</td>
                                    <td className="px-6 py-4">{byMaterial[material].join(", ")}</td>
                                    <td className="px-6 py-4">Purchase It</td>
                                    <td className="px-6 py-4">Make It</td>
                                </tr>
                            ))}
                        </>
                    }
                    
                </tbody>
            </table>
        </div>
        
        </>

        
    )
}