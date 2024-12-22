import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Select from "./com-page5/selec.jsx";

const Page5 = ({ USER }) => {
  //
  function formatTime(timeStr) {
    // Séparer les heures, minutes et secondes
    const [hours, minutes, seconds] = timeStr.split(":").map(Number);

    // Déterminer le suffixe AM ou PM
    const period = hours >= 12 ? "PM" : "AM";

    // Convertir les heures de 24 heures à 12 heures
    const hours12 = hours % 12 || 12;

    // Ajouter un zéro devant les minutes si nécessaire
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    // Retourner la chaîne formatée
    return `${hours12}:${formattedMinutes} ${period}`;
  }

  const [ rdv, setRdv] = useState({
    Nom: "",
    Prenom: "",
    Email: "",
    IdR: "",
    TypeRdv: "",
    Heure: "",
    Poids: "",
    Taille: "",
    Pt: "",
    IdE: USER.IdE,
  });
  const [rdvAll, setRdvAll] = useState([]);
  //date///////////////////////////////////////////////////////////////////////
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  const [date, setDate] = useState("");
  function formatDate(jour, mois, annee) {
    // Les noms des jours de la semaine en français
    const joursDeLaSemaine = [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ];

    // Les noms des mois en français
    const moisDeLAnnee = [
      "janvier",
      "février",
      "mars",
      "avril",
      "mai",
      "juin",
      "juillet",
      "août",
      "septembre",
      "octobre",
      "novembre",
      "décembre",
    ];

    // Crée une nouvelle date à partir des paramètres
    const date = new Date(annee, mois, jour); // mois est 0-indexé dans JavaScript

    // Obtenir le nom du jour de la semaine et le nom du mois
    const nomJourDeLaSemaine = joursDeLaSemaine[date.getDay()];
    const nomMois = moisDeLAnnee[mois];

    // Retourner la chaîne formatée
    return `${nomJourDeLaSemaine} ${jour} ${nomMois} ${annee}`;
  }
  useEffect(() => {
    setDate(formatDate(currentDay, currentMonth, currentYear));
  }, [currentMonth, currentYear, currentDay]);
  /////////////////////////////////////////////////////////////////
  const [ajouter, setAjouter] = useState(false);

  ///tout les rdv
  const [rdvs, setRdvs] = useState([]);
  const [selected, setSelected] = useState("");
  const selectrdv = async () => {
    try {
      const response = await fetch("http://localhost:3005/api/selctRdv", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: C
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
  };
  const [open, setOpen] = useState(false);
  const [visites, setVisite] = useState([]);
  const selectALL= async ()=>
    {
      try {
        const response = await fetch(
          "http://localhost:3005/api/visitePDeJour",
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({
              Date: currentYear + "-" + (currentMonth+1) + "-" + currentDay,
            }),
          }
        );
        const data = await response.json();
        if (!response.ok == "200") {
          toast.error("Erreur de récuper tout préparation visite");
        } else {
          setVisite(data.visites)
        }
      } catch (error) {
        console.error("Une erreur s'est produite :", error);
      }
    }
 
 
  useEffect(() => {
    selectrdv();
    selectALL()
  }, []);
 const [update,setUpdate]= useState(false)

  


  return (
    <>
      <div className="w-full   ">
        <div className="  w-full h-[500px] flex p-3 gap-4">
          <div className="w-[60%] h-full">
            <section className="antialiased  " onClick={()=>
              {
                selectALL()
                setRdv({
                  Nom: "",
                  Prenom: "",
                  Email: "",
                  IdR: "",
                  TypeRdv: "",
                  Heure: "",
                  Poids: "",
                  Taille: "",
                  Pt: "",
                  IdE: USER.IdE,
                });
                setSelected("");
              }
            }>
              <div className="flex flex-col justify-center h-full">
                <div className="w-full  bg-white shadow-lg rounded-sm border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-800">{date}</h2>
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
                                N° Rdv
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                              <div claclassNamess="font-semibold text-left">
                                Heure
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-centrer">
                                Statut
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
                          {visites.map((e) => {
                            return (
                              <>
                                <tr
                                  onClick={() => {
                                    setRdv({ ...e });
                                  }}
                                >
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
                                    <div className="text-left">{e.IdR}</div>
                                  </td>
                                  <td className="p-2 whitespace-nowrap flex justify-center">
                                    <div className="text-left font-medium text-green-500">
                                      {formatTime(e.Heure)}
                                    </div>
                                  </td>
                                  <td className="p-2 whitespace-nowrap">
                                    <div className="text-sm text-center">
                                      <div class="flex items-end justify-center">
                                        <div
                                          class={`h-3 w-3 rounded-full ${
                                           ! e.Statut
                                              ? "bg-red-500 "
                                              : "bg-green-500 "
                                          } me-2`}
                                        ></div>{" "}
                                      </div>
                                    </div>
                                  </td>
                                  <td className="p-2 whitespace-nowrap  mt-3 flex justify-center gap-2 items-center ">
                                    <div className="w-auto h-auto">
                                      <div className="flex-1 h-full">
                                        <div
                                          className={`flex items-center justify-center flex-1 h-full p-1 border ${
                                           ! e.Statut
                                              ? "border-green-500"
                                              : "border-[#80808054][#80808054]"
                                          } text-white shadow rounded-lg`}
                                        >
                                          <div className="relative">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              className={`h-4 w-4  ${
                                               ! e.Statut
                                                  ? "text-green-500"
                                                  : "text-[#80808054]"
                                              } `}
                                              onClick={
                                                ()=>
                                                  {
                                                    if( ! e.Statut)
                                                      {
                                                        setAjouter(true);
                                                        setRdv({ ...e });
                                                        setSelected(e.Nom + " " + e.Prenom);
                                                        setUpdate(true);
                                                      }
                                                    

                                                  }
                                              }
                                              viewBox="0 0 20 20"
                                              fill="currentColor"
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
                                      stroke={ ! e.Statut ? "red" : "#80808054"}
                                      onClick={async ()=>
                                        {
                                           if( ! e.Statut)
                                            {
                                              try{const response = await fetch("http://localhost:3005/api/supvisiteP/"+e.IdV, {
                                                method: "DELETE",
                                                headers: {
                                                  "content-type": "application/json",
                                                }
                                               
                                              });
                                              const data = await response.json();
                                              if (!response.ok) {
                                                toast.error("erreur de  sup visite");
                                              } else {
                                                 setVisite([...data.data])
                                                 selectALL()
                                                 setRdv({
                                                   Nom: "",
                                                   Prenom: "",
                                                   Email: "",
                                                   IdR: "",
                                                   TypeRdv: "",
                                                   Heure: "",
                                                   Poids: "",
                                                   Taille: "",
                                                   Pt: "",
                                                   IdE: USER.IdE,
                                                 });
                                                 setSelected("");
                                              }
                                            } catch (error) {
                                              console.error("Une erreur s'est produite :", error);
                                            }
                                            }
                                        }
                                      }
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
          <div className="w-[40%] h-full fl">
            <div className="mt-[30px]">
              <div className="bg-white relative  shadow-lg rounded-sm border border-gray-200">
                <div className="flex justify-center">
                  <div
                    className={`rounded-full flex justify-center items-center mx-auto absolute -top-10 w-[100px] h-[100px] shadow-md border-4    ${
                      !rdv?.Nom && !rdv?.Prenom ? "" : "bg-[#a5a4a4]"
                    } transition duration-200 transform hover:scale-110`}
                  >
                    <p className="text-[40px] text-[#ffffff] font-semibold	  	">
                      {rdv?.Nom[0]?.toUpperCase()}
                      {rdv?.Prenom[0]?.toUpperCase()}
                    </p>
                  </div>
                </div>
                <div className="mt-16">
                  <div
                    className={`font-bold text-center text-3xl text-gray-900 flex justify-center  p-2 `}
                  >
                    {rdv?.Nom && rdv?.Prenom ? (
                      <>
                        <h3>
                          {" "}
                          {rdv?.Nom} {rdv?.Prenom}
                        </h3>
                      </>
                    ) : (
                      <>
                        <div className="w-[40%] h-5  rounded-lg bg-[#a5a4a434]"></div>
                      </>
                    )}
                  </div>
                  <p className="text-center text-sm text-gray-400 font-medium flex justify-center">
                    {rdv?.Email ? (
                      rdv?.Email
                    ) : (
                      <>
                        <div className="w-[30%] h-3  rounded-lg bg-[#a5a4a434]"></div>
                      </>
                    )}
                  </p>
                  <p></p>
                  <div className="my-5 px-6">
                    <div className=" block rounded-lg text-center font-medium leading-6 px-6 py-3 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none">
                      <span className="font-bold"> INFORMATION VISITE</span>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
                      <a
                        href="#"
                        className="w-full  border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 flex  hover:bg-gray-100 transition duration-150"
                      >
                        <p className=" w-[60px] text-black  h-6 shadow-md  text-inline-block mr-4  text-center font-medium ">
                          {" "}
                          N°{" "}
                        </p>
                        <span>{rdv?.IdR}</span>
                      </a>

                      <a
                        href="#"
                        className="w-full  border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 flex   hover:bg-gray-100 transition duration-150"
                      >
                        <p className="w-[60px] mr-4 text-black  h-6 shadow-md   text-center font-medium text-inline-block ">
                          {" "}
                          Type Rdv{" "}
                        </p>
                        <span>{rdv?.TypeRdv}</span>
                      </a>

                      <a
                        href="#"
                        className="w-full  border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 flex  hover:bg-gray-100 transition duration-150"
                      >
                        <p className="w-[60px] text-black  h-6 shadow-md  text-center font-medium text-inline-block mr-4">
                          {" "}
                          Heure{" "}
                        </p>
                        <span>{rdv?.Heure ? formatTime(rdv?.Heure) : ""}</span>
                      </a>
                      <a
                        href="#"
                        className="w-full  border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 flex  hover:bg-gray-100 transition duration-150"
                      >
                        <p className="w-[60px] mr-4 text-black  text-center font-medium  h-6 shadow-md  text-inline-block ">
                          {" "}
                          Poids{" "}
                        </p>
                        <span>{rdv?.Poids}</span>
                      </a>
                      <a
                        href="#"
                        className="w-full  border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 flex  hover:bg-gray-100 transition duration-150"
                      >
                        <p className="w-[60px] mr-4 text-black  text-center font-medium  h-6 shadow-md  text-inline-block ">
                          {" "}
                          Taille{" "}
                        </p>
                        <span>{rdv?.Taille}</span>
                      </a>
                      <a
                        href="#"
                        className="w-full  border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 flex  hover:bg-gray-100 transition duration-150"
                      >
                        <p className="w-[60px] mr-4 text-black  text-center font-medium  h-6 shadow-md  text-inline-block ">
                          {" "}
                          Pt{" "}
                        </p>
                        <span>{rdv?.Pt}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-[70px] p-3 relative">
              {!rdv?.IdA || ajouter ? (
                ""
              ) : (
                <>
                  <button
                    className="btn w-[120px]  text-[blue] absolute left-1 "
                    onClick={() => {
                      {
                        setAjouter(true);
                      }
                    }}
                  >
                    Modifer
                  </button>
                </>
              )}
              <button
                className="btn btn-success w-[120px] text-[green] absolute right-1"
                onClick={async () => {
                  if (!rdv?.IdA) {
                    setAjouter(true);
                    setRdv({
                      Nom: "",
                      Prenom: "",
                      Email: "",
                      IdR: "",
                      TypeRdv: "",
                      Heure: "",
                      Poids: "",
                      Taille: "",
                      Pt: "",
                      IdE: USER.IdE,
                    });
                  } else {
                    if(update)
                      {
                        try {
                          const response = await fetch("http://localhost:3005/api/modifierVisiteP", {
                            method: "PUT",
                            headers: {
                              "content-type": "application/json",
                            },
                            body: JSON.stringify({...rdv}),
                          });
                          const data = await response.json();
                          if (!response.ok) {
                            toast.error("erreur de récupérer tout les rdv");
                          } else {
                            toast.success(data.message)
                          }
                        } catch (error) {
                          console.error("Une erreur s'est produite :", error);
                        }

                      }
                      else{
                        try {
                          const response = await fetch(
                            "http://localhost:3005/api/visiteP",
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
                            toast.error("Erreur de preparation visite");
                          } else {
                            toast.success(data.message);
                            setAjouter(false);
                            selectALL()
                            setRdv({
                              Nom: "",
                              Prenom: "",
                              Email: "",
                              IdR: "",
                              TypeRdv: "",
                              Heure: "",
                              Poids: "",
                              Taille: "",
                              Pt: "",
                              IdE: USER.IdE,
                            });
                            setSelected("");
                          }
                        } catch (error) {
                          console.error("Une erreur s'est produite :", error);
                        }
                      }
                        
                  }
                }}
              >
                {! rdv?.IdA ? "Ajouter" : "Sauvegarder"}
              </button>
            </div>
          </div>
        </div>
        <form
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
                  Préparer un visite
                </h3>
                <h3 className="text-xl font-normal text-gray-900 dark:text-white">
                  {date}
                </h3>
              </div>

              <div className="p-4 md:p-5 space-y-4 max-h-60">
                <div className="w-full h-[40vh]    flex flex-col gap-3">
                  <div className=" "></div>
                  <Select
                    rdvs={rdvs}
                    rdv={rdv}
                    setRdv={setRdv}
                    selected={selected}
                    setSelected={setSelected}
                    open={open}
                    setOpen={setOpen}
                  />
                  <div className="w-full p-2 flex justify-between">
                    <div className="w-[30%]">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Poids
                      </label>
                      <input
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Entrez ..."
                        required
                        value={rdv.Poids}
                        onChange={(e) => {
                          let data = { ...rdv };
                          data.Poids = e.target.value;
                          setRdv(data);
                        }}
                      />
                    </div>
                    <div className="w-[30%]">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Taille
                      </label>
                      <div className="flex gap-3">
                        <input
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Du ..."
                          required
                          value={rdv.Taille}
                          onChange={(e) => {
                            let data = { ...rdv };
                            data.Taille = e.target.value;
                            setRdv(data);
                          }}
                        />
                      </div>
                    </div>
                    <div className="w-[30%]">
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Pt
                      </label>
                      <div className="flex gap-3">
                        <input
                          type="text"
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Du ..."
                          required
                          value={rdv.Pt}
                          onChange={(e) => {
                            let data = { ...rdv };
                            data.Pt = e.target.value;
                            setRdv(data);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="default-modal"
                  type="button"
                  onClick={async () => {
                    setAjouter(false);
                    
                  }}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Enregistrer
                </button>
                <button
                  data-modal-hide="default-modal"
                  type="button"
                  onClick={() => {
                    setAjouter(false);
                    setOpen(false);
                    setSelected("");

                    setRdv({
                      Nom: "",
                      Prenom: "",
                      Email: "",
                      IdR: "",
                      TypeRdv: "",
                      Heure: "",
                      IdE: USER.IdE,
                    });
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
    </>
  );
};

export default Page5;
