import React, { useState, useEffect } from "react";

import Selector from "./com-page3/selector.jsx";
import toast, { Toaster } from "react-hot-toast";

export default function P3() {
  //var date
  const [selected, setSelected] = useState("");
  const [heureError, setHeureError] = useState(false);
  const [minuteError, setMinuteError] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  const [dateString, setDateString] = useState("");
  const [h, setH] = useState([
    { heure: "8:30 AM", value: "08:30:00", disable: true },
    { heure: "9:00 AM", value: "09:00:00", disable: false },
    { heure: "9:30 AM", value: "09:30:00", disable: false },
    { heure: "10:00 AM", value: "10:00:00", disable: false },
    { heure: "10:30 AM", value: "10:30:00", disable: false },
    { heure: "11:00 AM", value: "11:00:00", disable: false },
    { heure: "1:30 PM", value: "13:30:00", disable: true },
    { heure: "2:00 PM", value: "14:00:00", disable: false },
    { heure: "2:30 PM", value: "14:30:00", disable: false },
    { heure: "3:00 PM", value: "15:00:00", disable: false },
    { heure: "3:30 PM", value: "15:30:00", disable: false },
    { heure: "4:00 PM", value: "16:00:00", disable: false },
  ]);
  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];
  const [heure, setHeure] = useState("");
  const [minute, setMinute] = useState("");

  //agents et rdv
  const [agents, setAgents] = useState([]);
  const [ajouter, setAjouter] = useState(false);
  const [rdv, setRdv] = useState({
    IdA: "",
    TypeRdv: "null",
    Date: currentYear + "-" + (currentMonth+1) + "-" + currentDay,
    Heure: "",
  });
  const [rdvs, setRdvs] = useState([]);
  const [typeRdvError, setTypeRdvError] = useState(false);

  //

  //fonction
  const handlePrevMonth = () => {
    let newMonth = currentMonth - 1;
    let newYear = currentYear;
    if (newMonth < 0) {
      newMonth = 11;
      newYear--;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const handleNextMonth = () => {
    let newMonth = currentMonth + 1;
    let newYear = currentYear;
    if (newMonth > 11) {
      newMonth = 0;
      newYear++;
    }
    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };
  function generateCalendar(year, month) {
    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = firstDayOfMonth.getDay();

    let calendar = [];
    let index = 0;

    // Create empty boxes for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      calendar.push(<div key={index}></div>);
      index++;
    }

    // Create boxes for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
      // Determine if the day button should be disabled
      const isDisabled = isDateDisabled(year, month, day);
      // Determine if the day is today
      const isToday = isDayToday(year, month, day);

      calendar.push(
        <div
          key={index}
          className={`text-center py-2 border cursor-pointer ${
            isDisabled ? "opacity-50 " : "hover:bg-gray-200"
          } ${isToday ? "border-blue-800 border-[2px]" : ""}`}
          onClick={() => {
            showModal(day);
          }}
        >
          {day}
        </div>
      );
      index++;
    }

    return calendar;
  }
  function isDayToday(year, month, day) {
    const today = new Date();
    return (
      today.getFullYear() === year &&
      today.getMonth() === month &&
      today.getDate() === day
    );
  }

  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (!value) {
      setTypeRdvError(true);
    } else {
      setTypeRdvError(false);
      let data = { ...rdv };
      data.TypeRdv = value;
      setRdv(data);
    }
  };
  const handleChangeMinute = (e) => {
    const value = e.target.value;
    if (value < 0 || value > 60) {
      setMinuteError(true);
    } else {
      setMinuteError(false);
      setMinute(value);
      updateRdvHeureAndMinute(heure, value);
    }
  };
  const handleChangeHeure = (e) => {
    const value = e.target.value;

    if (value < 0 || value > 23) {
      setHeureError(true);
    } else {
      setHeureError(false);
      setHeure(value);

      updateRdvHeureAndMinute(value, minute);
    }
  };
  const updateRdvHeureAndMinute = (h, m) => {
    const updatedRdv = { ...rdv };
    updatedRdv.Heure = `${h}:${m}:00`;
    setRdv(updatedRdv);
  };

  const showModal = (day) => {
    setCurrentDay(day);
    console.log(day);
    const selectedDate = new Date(currentYear, currentMonth, day);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    let formattedDate = selectedDate.toLocaleDateString(undefined, options);
    // Capitalize the first letter of the day
    formattedDate = capitalizeFirstLetter(formattedDate);
    setDateString(formattedDate);
  };
  function isDateDisabled(year, month, day) {
    const currentDate = new Date();
    const selectedDate = new Date(year, month, day);
    return selectedDate < currentDate;
  }
  function getHourOrMinute(timeString, type) {
    // Si timeString n'est pas vide, procédez au split
    const [hour, minute] = timeString.split("h")[1].split("min");

    if (type === 1) {
      return hour; // Retourner l'heure sans modifier l'état
    } else if (type === 2) {
      return minute; // Retourner les minutes sans modifier l'état
    } else {
      return "";
    }
  }
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  function diviserTemps(temps) {
    const [heures, minutes, secondes] = temps.split(":");
    setHeure(heures);
    setMinute(minutes);
  }

  const handleDelete = async (id) => {
    try {
      const response = await fetch("http://localhost:3005/api/suprdv/" + id, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error("erreur de delete");
      } else {
        toast.success(data.message);
        setRdvs(data.data);
      }
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };
  const handleUp = async (id) => {
    let data = {};

    for (let i = 0; i < rdvs.length; i++) {
      if (rdvs[i].IdR == id) {
        // Utilisez IdR au lieu de Idr
        data = { ...rdvs[i] };
        break; //
      }
    }

    diviserTemps(data.Heure);
    for (let i = 0; i < agents.length; i++) {
      if (agents[i].IdA == data.IdA) {
        setSelected(agents[i].Nom + " " + agents[i].Prenom);

        break; //
      }
    }
    setRdv({
      IdR: data.IdR,
      IdA: data.IdA,
      TypeRdv: data.TypeRdv,
      Date: data.Date,
      Heure: data.Heure,
    });
  };
  const selectAgents = async () => {
    try {
      const response = await fetch("http://localhost:3005/api/agent2", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error("erreur de récupérer tout les agents");
      } else {
        setAgents(data);
      }
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };
  const selectALL = async () => {

    try {

      const response = await fetch("http://localhost:3005/api/selctRdv", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          Date: currentYear + "-" + (currentMonth+1) + "-" + currentDay,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error("erreur de récupérer tout les rdv");
      } else {
        setRdvs(data);

      }
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  }; ///

  // fonction exicuté quands le programme chargé
  useEffect(() => {
    showModal(currentDay); // Appel de la fonction showModal pour initialiser la date
    selectAgents();
    selectALL();
  }, []);
  useEffect(() => {
    selectALL();
  }, [currentDay, currentMonth, currentYear]);

  useEffect(()=>
    {
      const updatedH = h.map(timeSlot => {
        // Check if there's an appointment at this time
        const isDisabled = rdvs.some(rdvsItem => rdvsItem.Heure === timeSlot.value);
        return { ...timeSlot, disable: isDisabled };
      });
      setH(updatedH);
    },[rdvs])
  return (
    <>
      <div className="w-full flex gap-4 p-3 ">
        <div className="w-[65%] h-12 ">
          <section className="antialiased">
            <div className="flex flex-col justify-center h-full">
              <div className="w-full  bg-white shadow-lg rounded-sm border border-gray-200">
                <header className="px-5 py-4 border-b border-gray-100">
                  <h2 className="font-semibold text-gray-800">{dateString}</h2>
                </header>
                <div className="p-3">
                  <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                      <thead className="text-sm font-semibold uppercase text-gray-400 bg-gray-50">
                        <tr>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">Nom</div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">
                              E-mail
                            </div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div claclassNamess="font-semibold text-left">
                              Heure
                            </div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-left">
                              Type-RDV
                            </div>
                          </th>
                          <th className="p-2 whitespace-nowrap">
                            <div className="font-semibold text-center">
                              Action
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm divide-y divide-gray-100">
                        {rdvs.map((e) => {
                          return (
                            <>
                              <tr>
                                <td className="p-2 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                      <div className="rounded-full w-[40px] h-[40px] text-[20px] flex justify-center items-center bg-gray-300">
                                        <h1 className="text-gray-50">
                                          {" "}
                                          {e.Nom[0].toUpperCase()}
                                          {e.Prenom[0].toUpperCase()}
                                        </h1>
                                      </div>
                                    </div>
                                    <div className="font-medium text-gray-800">
                                      {e.Nom} {e.Prenom}
                                    </div>
                                  </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                  <div className="text-left">{e.Email}</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                  <div className="text-left font-medium text-green-500">
                                    {e.Heure}
                                  </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                  <div className="text-sm text-center">
                                    {e.TypeRdv}
                                  </div>
                                </td>
                                <td className="p-2 whitespace-nowrap  mt-3 flex justify-center gap-2 items-center ">
                                  <div className="w-auto h-auto">
                                    <div className="flex-1 h-full">
                                      <div className="flex items-center justify-center flex-1 h-full p-1 border border-green-500 text-white shadow rounded-lg">
                                        <div className="relative">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-green-500"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                            onClick={() => {
                                              setAjouter(true);
                                              handleUp(e.IdR);
                                            }}
                                          >
                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    onClick={async () => {
                                      console.log(rdvs);
                                      handleDelete(e.IdR);
                                    }}
                                    style={{ color: "red" }}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                    />
                                  </svg>
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
            </div>
          </section>
        </div>
        <div className="w-[35%] flex flex-col gap-[80px]">
          <div className="bg-white  h-[55vh]   shadow-lg rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-6 py-3 bg-gray-700">
              <button onClick={handlePrevMonth} className="text-white">
                Précédent
              </button>
              <h2 className="text-white">{`${monthNames[currentMonth]} ${currentYear}`}</h2>
              <button onClick={handleNextMonth} className="text-white">
                Suivant
              </button>
            </div>
            <div className="grid grid-cols-7 gap-2 p-4">
              {generateCalendar(currentYear, currentMonth)}
            </div>
          </div>
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
              if (!rdv.IdR) {
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
                  if (!response.ok == "200") {
                    toast.error("Erreur de ajouter convocation");
                  } else {
                    setAjouter(false);
                    setRdvs(data.data)

                    toast.success(data.message);
                  }
                } catch (error) {
                  console.error("Une erreur s'est produite :", error);
                }
              } else {
                try {
                  const response = await fetch(
                    "http://localhost:3005/api/modifRdv",
                    {
                      method: "PUT",
                      headers: {
                        "content-type": "application/json",
                      },
                      body: JSON.stringify({
                        IdR: rdv.IdR,
                        IdA: rdv.IdA,
                        TypeRdv: rdv.TypeRdv,
                        Heure: rdv.Heure,
                      }),
                    }
                  );
                  const data = await response.json();
                  if (!response.ok == "200") {
                    toast.error("Erreur de modifer convocation");
                  } else {
                    setAjouter(false);
                    selectALL();

                    toast.success(" modifer cette convocation");
                  }
                } catch (error) {
                  console.error("Une erreur s'est produite :", error);
                }
              }

              setRdv({
                IdA: "",
                TypeRdv: "null",
                Date: currentYear + "/" + currentMonth + "/" + currentDay,
                Heure: "",
              });
              setMinute("");
              setHeure("");
              setSelected("");
            }}
            id="default-modal"
            tabindex="-1"
            aria-hidden="true"
            className={` ${
              ajouter ? "top-[120px]" : "hidden"
            }   fixed right-0 left-0 z-50 flex justify-center items-center w-full `}
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

                <div className="p-4 md:p-5  h-[300px] ">
                  <div className="w-full     flex flex-col gap-3">
                    <div className=" ">
                      <Selector
                        agents={agents}
                        rdv={rdv}
                        setRdv={setRdv}
                        selected={selected}
                        setSelected={setSelected}
                      />
                    </div>
                    <div className="w-full flex justify-between ">
                      <div className="w-[50%]">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Type-RDV
                        </label>

                        <select
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          onChange={handleSelectChange}
                          required
                          value={rdv.TypeRdv}
                        >
                          {/* Commentaire déplacé */}
                          <option selected disabled value="null">
                            Selection Type Visite
                          </option>
                          <option value="emporche">Emporche</option>
                          <option value="periodice">Periodice</option>
                          <option value="consultation">Consultation</option>
                          <option value="reprize">Reprize</option>
                        </select>
                      </div>
                      <div className="w-[50%] ml-[50px]">
                        <label className="block mb-2 ml-3 text-sm font-medium text-gray-900 dark:text-white">
                          Heure
                        </label>
                        <div className="w-[80%] h-[60vh]">
                          <div className="p-4 pt-0">
                            <ul
                              id="timetable"
                              className="grid w-full grid-cols-4 gap-2 mb-5"
                            >
                              {h.map((time, index) => (
                                <li key={index}>
                                  <input
                                    type="radio"
                                    id={time.heure.replace(/\s/g, "-")}
                                    value={time.heure}
                                    className="hidden peer"
                                    name="timetable"
                                    disabled={time.disable}
                                    onChange={()=>
                                      {
                                        let data = { ...rdv };
                                        data.Heure = time.value;
                                        setRdv(data);
                                      }
                                    } // Use the disable property here
                                  />
                                  <label
                                    htmlFor={time.heure.replace(/\s/g, "-")}
                                    className={`inline-flex items-center justify-center w-full px-2 py-1 text-sm font-medium text-center         ${
                                      time.disable ? "cursor-not-allowed text-[#808080b3]  border-gray-200" : " hover:text-gray-900 dark:hover:text-white bg-white dark:bg-gray-800 border rounded-lg cursor-pointer text-green-400 border-gray-200 dark:border-green-400 dark:peer-checked:border-blue-500 peer-checked:border-blue-700 dark:hover:border-green-400 dark:peer-checked:text-blue-500 peer-checked:bg-blue-50 peer-checked:text-blue-700 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-green-400 dark:peer-checked:bg-blue-900 "
                                    }`}
                                  >
                                    {time.heure}
                                  </label>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
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
                      setRdv({
                        IdA: "",
                        TypeRdv: "null",
                        Date:
                          currentYear + "/" + currentMonth + "/" + currentDay,
                        Heure: "",
                      });
                      setMinute("");
                      setHeure("");
                      setSelected("");
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
    </>
  );
}
