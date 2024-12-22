import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

function Statistique() {
    const [value, setValue] = useState({
        agentCount: "",
        rdvCount: "",
        visiteCount: "",
        maladie: [],
        examenradio: [],
        typeRdv: [],
    });
 const  api= async ()=>
    {
        try {
            const response = await fetch(
              "http://localhost:3005/api/stat",
              {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                }
                
              }
            );
            const data = await response.json();
            if (!response.ok == "200") {
              toast.error("Erreur de récuper tout préparation visite");
            } else {
                setValue({...data})

            }
          } catch (error) {
            console.error("Une erreur s'est produite :", error);
          }
    }
    useEffect(()=>
    {
      api() 
    },[])

    return (
        <>
            <div className="flex justify-center py-10 pl-3">
                <div className="container mx-auto pr-4">
                    <div className="w-85 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
                        <div className="h-20 bg-red-400 flex items-center justify-between">
                            <p className="mr-0 text-white text-lg pl-5">Number Agent</p>
                        </div>
                        <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
                            <p>TOTAL</p>
                        </div>
                        <p className="py-4 text-3xl ml-5">{value.agentCount}</p>
                    </div>
                </div>

                <div className="container mx-auto pr-4">
                    <div className="w-85 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
                        <div className="h-20 bg-blue-500 flex items-center justify-between">
                            <p className="mr-0 text-white text-lg pl-5">Number RDV</p>
                        </div>
                        <div className="flex justify-between px-5 pt-6 mb-2 text-sm text-gray-600">
                            <p>TOTAL</p>
                        </div>
                        <p className="py-4 text-3xl ml-5">{value.rdvCount}</p>
                    </div>
                </div>

                <div className="container mx-auto pr-4">
                    <div className="w-85 bg-white max-w-xs mx-auto rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-100 cursor-pointer">
                        <div className="h-20 bg-purple-400 flex items-center justify-between">
                            <p className="mr-0 text-white text-lg pl-5">Number Visite</p>
                        </div>
                        <div className="flex justify-between pt-6 px-5 mb-2 text-sm text-gray-600">
                            <p>TOTAL</p>
                        </div>
                        <p className="py-4 text-3xl ml-5">{value.visiteCount}</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-center pl-3">
                <div className="container mr-5 ml-2 mx-auto bg-white shadow-xl">
                    <div className="w-11/12 mx-auto">
                        <div className="bg-white my-6">
                            <table className="text-left w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="py-4 px-6 bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">
                                            Type Visite
                                        </th>
                                        <th className="py-4 px-6 text-center bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">
                                            Nombre
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {value.typeRdv.map((e, index) => (
                                        <tr key={index} className="hover:bg-grey-lighter">
                                            <td className="py-4 px-6 border-b border-grey-light">{e.typeRdv}</td>
                                            <td className="py-4 px-6 text-center border-b border-grey-light">{e.rdvCount}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="container mr-5 mx-auto bg-white shadow-xl">
                    <div className="w-11/12 mx-auto">
                        <div className="bg-white my-6">
                            <table className="text-left w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="py-4 px-6 bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">
                                            Maladie
                                        </th>
                                        <th className="py-4 px-6 text-center bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">
                                        NOMBRE
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {value.maladie.map((e, index) => (
                                        <tr key={index} className="hover:bg-grey-lighter">
                                            <td className="py-4 px-6 border-b border-grey-light">{e.LiberM}</td>
                                            <td className="py-4 px-6 text-center border-b border-grey-light">{e.numbre}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto bg-white shadow-xl">
                    <div className="w-11/12 mx-auto">
                        <div className="bg-white my-6">
                            <table className="text-left w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="py-4 px-6 bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">
                                            Radio Médical Utilisé
                                        </th>
                                        <th className="py-4 px-6 text-center bg-purple-400 font-bold uppercase text-sm text-white border-b border-grey-light">
                                        NOMBRE
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {value.examenradio.map((e, index) => (
                                        <tr key={index} className="hover:bg-grey-lighter">
                                            <td className="py-4 px-6 border-b border-grey-light">{e.LiberR}</td>
                                            <td className="py-4 px-6 text-center border-b border-grey-light">{e.numbre}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Statistique;
