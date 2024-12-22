import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const Home = () => {
  const [valuer, setValeur] = useState({
    Agents: "0",
    RendezVous: "0",
    Visite: "0",
  });
  function convertTimeTo12HourFormat(time) {
    // Diviser l'heure en heures, minutes et secondes
    const [hour, minute, second] = time.split(":").map(Number);

    const ampm = hour >= 12 ? "PM" : "AM";

    const hours12 = hour % 12 || 12;

    const minutesFormatted = minute.toString().padStart(2, "0");

    return `${hours12}:${minutesFormatted} ${ampm}`;
  }
  const [visite, setVisite] = useState([]);
  const [agentRDVDetails, setAgentRDVDetails] = useState([]);
  const color = ["bg-blue-600", " bg-pink-500", "bg-blue-900", "bg-red-400"];

  const get = async () => {
    try {
      const response = await fetch("http://localhost:3005/api/plan", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error("Erreur lors de la requête");
      }
      {
        setValeur({
          Agents: data.Agents,
          PreparerVisite: data.PreparerVisite,
          RendezVous: data.Rdv,
          Visite: data.Visite,
        });
        setVisite([...data.VisteType]);
        setAgentRDVDetails([...data.agentRDVDetails]);
      }
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };
  useEffect(() => {
    get();
  }, []);

  return (
    <>
      <div class=" grid-cols-1   w-full    p-4 gap-4 flex">
        <div class=" bg-gray-800 dark:bg-gray-800 shadow-lg w-[33%] rounded-md flex items-center justify-between  mr-5    p-3 border-b-4 border-[#F5811E] dark:border-gray-600 text-white font-medium group">
          <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </div>
          <div class="text-right">
            <p class="text-2xl">{valuer.Agents}</p>
            <p>Agents</p>
          </div>
        </div>

        <div class=" bg-gray-800 dark:bg-gray-800 shadow-lg rounded-md  w-[33%] flex items-center justify-between p-3 border-b-4 border-[#F5811E] dark:border-gray-600 text-white font-medium group">
          <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg
              viewBox="-1 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              class=" w-[30px]  stroke-current    text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
            >
              <title>calendar</title>
              <desc>Created with Sketch Beta.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fillRule="evenodd"
                fill="currentColor"
              >
                <g
                  id="Icon-Set"
                  transform="translate(-309.000000, -359.000000)"
                >
                  <path
                    d="M323,383 L325,383 L325,385 L323,385 L323,383 Z M323,387 L325,387 C326.104,387 327,386.104 327,385 L327,383 C327,381.896 326.104,381 325,381 L323,381 C321.896,381 321,381.896 321,383 L321,385 C321,386.104 321.896,387 323,387 L323,387 Z M315,383 L317,383 L317,385 L315,385 L315,383 Z M315,387 L317,387 C318.104,387 319,386.104 319,385 L319,383 C319,381.896 318.104,381 317,381 L315,381 C313.896,381 313,381.896 313,383 L313,385 C313,386.104 313.896,387 315,387 L315,387 Z M323,375 L325,375 L325,377 L323,377 L323,375 Z M323,379 L325,379 C326.104,379 327,378.104 327,377 L327,375 C327,373.896 326.104,373 325,373 L323,373 C321.896,373 321,373.896 321,375 L321,377 C321,378.104 321.896,379 323,379 L323,379 Z M315,375 L317,375 L317,377 L315,377 L315,375 Z M315,379 L317,379 C318.104,379 319,378.104 319,377 L319,375 C319,373.896 318.104,373 317,373 L315,373 C313.896,373 313,373.896 313,375 L313,377 C313,378.104 313.896,379 315,379 L315,379 Z M337,367 L311,367 L311,365 C311,363.896 311.896,363 313,363 L317,363 L317,364 C317,364.553 317.447,365 318,365 C318.553,365 319,364.553 319,364 L319,363 L329,363 L329,364 C329,364.553 329.447,365 330,365 C330.553,365 331,364.553 331,364 L331,363 L335,363 C336.104,363 337,363.896 337,365 L337,367 L337,367 Z M337,387 C337,388.104 336.104,389 335,389 L313,389 C311.896,389 311,388.104 311,387 L311,369 L337,369 L337,387 L337,387 Z M335,361 L331,361 L331,360 C331,359.448 330.553,359 330,359 C329.447,359 329,359.448 329,360 L329,361 L319,361 L319,360 C319,359.448 318.553,359 318,359 C317.447,359 317,359.448 317,360 L317,361 L313,361 C310.791,361 309,362.791 309,365 L309,387 C309,389.209 310.791,391 313,391 L335,391 C337.209,391 339,389.209 339,387 L339,365 C339,362.791 337.209,361 335,361 L335,361 Z M331,375 L333,375 L333,377 L331,377 L331,375 Z M331,379 L333,379 C334.104,379 335,378.104 335,377 L335,375 C335,373.896 334.104,373 333,373 L331,373 C329.896,373 329,373.896 329,375 L329,377 C329,378.104 329.896,379 331,379 L331,379 Z M331,383 L333,383 L333,385 L331,385 L331,383 Z M331,387 L333,387 C334.104,387 335,386.104 335,385 L335,383 C335,381.896 334.104,381 333,381 L331,381 C329.896,381 329,381.896 329,383 L329,385 C329,386.104 329.896,387 331,387 L331,387 Z"
                    id="calendar"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <div class="text-right">
            <p class="text-2xl">{valuer.RendezVous}</p>
            <p>Rendez Vous </p>
          </div>
        </div>
        <div class=" bg-gray-800 dark:bg-gray-800 shadow-lg rounded-md  w-[33%]  flex items-center justify-between p-3 border-b-4 border-[#F5811E] dark:border-gray-600 text-white font-medium group">
          <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
            <svg
              width="35"
              height="35"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
              />
            </svg>
          </div>
          <div class="text-right">
            <p class="text-2xl">{valuer.Visite}</p>
            <p>Visite</p>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4"></div>
      <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0  p-[20px]  break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
        <div className="rounded-t mb-0 px-0 border-0 flex gap-5">
          <div className="block w-[50%] overflow-x-auto ">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Type Visite
                  </th>
                  <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Nombre
                  </th>
                  <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th>
                </tr>
              </thead>
              <tbody>
                {visite.map((e, i) => {
                  return (
                    <>
                      <tr className="text-gray-700 dark:text-gray-100">
                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          {e.type}
                        </th>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {e.valeu}
                        </td>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          <div className="flex items-center">
                            <span className="mr-2">{e.Calcul}%</span>
                            <div className="relative w-full">
                              <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                              <div className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${color[i]}`} style={{ width: `${e.Calcul}%` }} />

                              </div>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="block w-[50%] overflow-x-auto ">
            <table className="items-center w-full bg-transparent border-collapse">
              <thead>
                <tr>
                  <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Préparer Visite
                  </th>
                  <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Nom
                  </th>

                  <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Heure
                  </th>
                  <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {agentRDVDetails.map((e) => {
                  return (
                    <>
                      <tr className="text-gray-700 dark:text-gray-100">
                        <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                          {e.Typerdv}
                        </th>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {e.Nom} {e.Prenom}
                        </td>
                        <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                          {convertTimeTo12HourFormat(e.Heure)}
                        </td>
                        <td className="border-t-0 px-4  border-l-0 border-r-0 text-xs whitespace-nowrap p-4 flex pl-7">
                          <div
                            class={`h-3 w-3 rounded-full bg-green-500 me-2`}
                          ></div>{" "}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
