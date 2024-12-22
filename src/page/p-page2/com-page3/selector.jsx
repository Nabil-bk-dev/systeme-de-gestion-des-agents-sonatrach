import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Selector = ({ agents, rdv, setRdv ,selected,setSelected}) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
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
          <span>Selection Agent</span>
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
            placeholder="Chercher Agent"
            className="placeholder:text-gray-700 p-2 outline-none w-full"
          />
        </div>
        {agents
          .filter(
            (agent) =>
              agent.Nom.toLowerCase().includes(inputValue) ||
              agent.Prenom.toLowerCase().includes(inputValue)
          )
          .map((agent) => (
            <li
              key={agent.IdA}
              className="w-full flex gap-1 cursor-pointer hover:bg-gray-400 p-2 hover:text-white"
              onClick={() => {
                setSelected(agent.Nom + " " + agent.Prenom);
                setOpen(false);
                let data = { ...rdv };
                data.IdA = agent.IdA;
                data.Nom = agent.Nom;
                data.Prenom = agent.Prenom;
                data.Email = agent.Email;
                setRdv(data);
              }}
            >
              <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                <div className="rounded-full w-[40px] h-[40px] text-[20px] flex justify-center items-center bg-gray-300">
                  <h1 className="text-gray-50">{agent.Nom[0].toUpperCase()}{agent.Prenom[0].toUpperCase()}</h1>
                </div>
              </div>
              <div>
                <div className="font-medium hover:text-white">
                  {agent.Nom} {agent.Prenom}
                </div>
                <div className="text-left text-[13px] ml-2">{agent.Email}</div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Selector;
