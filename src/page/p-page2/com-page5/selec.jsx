import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Select = ({ rdvs, rdv, setRdv ,selected,setSelected,open,setOpen}) => {
  const [inputValue, setInputValue] = useState("");
  function formatTime(timeStr) {
    // Séparer les heures, minutes et secondes
    const [hours, minutes, seconds] = timeStr.split(':').map(Number);
  
    // Déterminer le suffixe AM ou PM
    const period = hours >= 12 ? 'PM' : 'AM';
  
    // Convertir les heures de 24 heures à 12 heures
    const hours12 = hours % 12 || 12;
  
    // Ajouter un zéro devant les minutes si nécessaire
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  
    // Retourner la chaîne formatée
    return `${hours12}:${formattedMinutes} ${period}`;
  }
  
  return (
    <div className="w-full font-medium ">
      <div
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-between rounded bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${!selected ? "text-gray-700" : ""}`}
      >
        {selected ? (
          selected?.length > 25 ? (
            selected?.substring(0, 25) + "..."
          ) : (
            selected
          )
        ) : (
          <span>Selection RDV</span>
        )}
      </div>
      <ul
        className={`bg-white mt-3 flex flex-col gap-3 overflow-y-auto ${
          open ? "max-h-40" : "max-h-0"
        }`}
      >
        <div className="flex items-center px-3 sticky top-0 bg-white">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder="Chercher RDV"
            className="placeholder:text-gray-700 p-2 outline-none w-full"
          />
        </div>
        {rdvs
          .filter(
            (rv) =>
              rv.Nom.toLowerCase().includes(inputValue) ||
              rv.Prenom.toLowerCase().includes(inputValue)
          )
          .map((rv) => (
            <li
              key={rv.IdA}
              className="w-full flex gap-1 cursor-pointer hover:bg-gray-400 p-2 hover:text-white"
              onClick={() => {
                setSelected(rv.Nom + " " + rv.Prenom);
                setOpen(false);
                let data = { ...rdv };
                data.IdR = rv.IdR;
                data.IdA = rv.IdA;
                data.Nom = rv.Nom;
                data.Prenom = rv.Prenom;
                data.Email = rv.Email;
                data.Heure=rv.Heure;
                data.TypeRdv=rv.TypeRdv;
                setRdv(data);
              }}
            >
              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                <div className="rounded-full w-[40px] h-[40px] text-[20px] flex justify-center items-center bg-gray-300">
                  <h1 className="text-gray-50">{rv.Nom[0].toUpperCase()}{rv.Prenom[0].toUpperCase()}</h1>
                </div>
              </div>
              <div >
                <div className="font-medium hover:text-white mb-2">
                  {rv.Nom} {rv.Prenom} 
                </div>
                <div className="text-left text-[13px] ml-2 flex">Type Rdv :<p className="ml-2 bg-gray-600 p-[2px] pl-[4px] pr-[4px] rounded-md text-[#ffffff] mr-2"> {rv.TypeRdv} </p>  Heure :<p className="ml-2 bg-gray-600 p-[2px] pl-[4px] pr-[4px] rounded-md text-[#ffffff]">  {formatTime(rv.Heure)} </p></div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Select;
