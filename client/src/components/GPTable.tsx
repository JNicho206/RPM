import React from "react";

export interface GPTableProps {
    sortTableBy: string,
}

export const GPTable: React.FC<GPTableProps> = ({sortTableBy}) => {



    return (
        <>
        {sortTableBy === "week" && <div></div>}

        {sortTableBy === "material" && <div></div>}
        
        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="w-[200px] px-6 py-3">
                            Week
                        </th>
                        <th scope="col" className="w-[200px] px-6 py-3">
                            Material
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
                    <tr className="odd:bg-white even:bg-gray-100 border-b dark:border-gray-700">
                        <th scope="row" className="w-[200px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            1
                        </th>
                        <td className="w-[200px] px-6 py-4">
                            Pillows
                        </td>
                        <td className="w-[200px] px-6 py-4">
                            --Buy--
                        </td>
                        <td className="w-[200px] px-6 py-4">
                            --Make--
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-100 border-b dark:border-gray-700">
                        <th scope="row" className="w-[200px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            2
                        </th>
                        <td className="w-[200px] px-6 py-4">
                            Pencils
                        </td>
                        <td className="w-[200px] px-6 py-4">
                            --Buy--
                        </td>
                        <td className="w-[200px] px-6 py-4">
                            --Make--
                        </td>
                    </tr>
                    <tr className="odd:bg-white even:bg-gray-100 border-b dark:border-gray-700">
                        <th scope="row" className="w-[200px] px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            2
                        </th>
                        <td className="w-[200px] px-6 py-4">
                            Pencils
                        </td>
                        <td className="w-[200px] px-6 py-4">
                            --Buy--
                        </td>
                        <td className="w-[200px] px-6 py-4">
                            --Make--
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        </>

        
    )
}