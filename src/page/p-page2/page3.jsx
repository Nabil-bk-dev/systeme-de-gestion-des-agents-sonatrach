import React, { useState, useEffect } from "react";

import Selector from "./com-page3/selector.jsx";
import toast, { Toaster } from "react-hot-toast";
function Page3() {
  
  
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3005/api/selctRd", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          Date: `${currentYear}-${currentMonth}-${currentDay}`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error("Erreur lors de la requête");
      } else {
        setRdvs(data);
        fetchData();
      }
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [currentYear, currentMonth, currentDay]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3005/api/agent", {
          method: "GET",
        });

        const data = await response.json();

        if (!response.ok) {
        } else {
          setAgents(data);
        }
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    let data = { ...rdv };
    data.Heure = heure + "h" + minute + "min";
    setRdv(data);
  }, [heure, minute]);




  return (
    <div className="w-full flex gap-4 p-3 ">
      {/* liste */}
       
      {/* cal + button + forme */}
      <div className="w-[35%] flex flex-col gap-[80px]">
        
        <button
          data-modal-target="default-modal"
          data-modal-toggle="default-modal"
          onClick={() => {
            setAjouter(true);
          }}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-10  py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          + Ajouter Convocation
        </button>

        <form
          onSubmit={async (e) => {
            e.preventDefault();
            try {
              const response = await fetch(
                "http://localhost:3005/api/convocation",
                {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(rdv),
                }
              );
              const data = await response.json();
              if (!response.ok) {
              } else {
                setAjouter(false);
              }
            } catch (error) {
              console.error("Une erreur s'est produite :", error);
            }
          }}
          id="default-modal"
          tabindex="-1"
          aria-hidden="true"
          className={` ${
            ajouter ? "" : "hidden"
          } overflow-y-auto overflow-x-hidden h-screen fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full `}
        >
          <div className="relative w-[70vw] pl-5">
            <div className="relative bg-gray-50 rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Ajouter Convocation
                </h3>
                <h3 className="text-xl font-normal text-gray-900 dark:text-white">
                  {dateString}
                </h3>
              </div>

              <div className="p-4 md:p-5 space-y-4 max-h-60 overflow-y-auto ">
                <div className="w-full h-[40vh]    flex flex-col gap-3">
                  <div className=" ">
                    <Selector agents={agents} rdv={rdv} setRdv={setRdv} />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Type-RDV
                    </label>

                    <select
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={handleChangeHeure}
                      required
                    >
                      {/* Commentaire déplacé */}
                      <option selected disabled>
                        Selection Type Visite
                      </option>
                      <option value="visite1">Visite1</option>
                      <option value="visite2">Visite2</option>
                      <option value="visite3">Visite3</option>
                      <option value="visite4">Visite4</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Heure
                    </label>
                    <div className="w-[60%] flex gap-6 pl-3">
                      <input
                        type="tel"
                        pattern="[0-9]{2}"
                        max={23}
                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                          heureError && "bg-red-200"
                        }`}
                        placeholder="HH"
                        required
                        onChange={handleChangeHeure}
                      />
                      <p className="mt-2">:</p>
                      <input
                        type="tel"
                        pattern="[0-9]{2}"
                        max={59}
                        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                          minuteError && "bg-red-200"
                        }`}
                        placeholder="MM"
                        required
                        onChange={handleChangeMinute}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="default-modal"
                  type="submit"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Enregistrer
                </button>
                <button
                  data-modal-hide="default-modal"
                  type="button"
                  onClick={() => {
                    setAjouter(false);
                  }}
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Annuler{" "}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page3;
