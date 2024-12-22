import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import logo from "../../img/logo_sonatrach.svg";
import { TypewriterEffect } from "../../../node_modules/framer-motion/dist/es/components/ui/typewriter-effect";
import { useState } from "react";
import phone from "../../img/icons8-one-time-password-50.png";
import toast from "react-hot-toast";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  vatar,
  Badge,
} from "@material-tailwind/react";
const Adm = ({ setUSER, USER }) => {
  const [modier, setModfier] = useState(true);
  const [user, setUser] = useState({
    IdE:"",
    Nom: "",
    Prenom: "",
    Email: "",
    Poste: "null",
  });
  const [liste, setliste] = useState([]);
  const { token } = useParams();
  const navigate = useNavigate();
  const listProfil = async () => {
    try {
      const response = await fetch("http://localhost:3005/api/selProfil", {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message);
      } else {
        setliste(data.data);
      }
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };
  useEffect(() => {
    listProfil();
  }, [user]);

  let data = { ...JSON.parse(localStorage.getItem("user")) };

  useEffect(() => {
    setUSER(JSON.parse(localStorage.getItem("user")));

    if (token && data.Token === token) {
      setUSER({ ...data });
    } else {
      navigate("../login");
    }
  }, [token, user]);

  const words = [
    {
      text: "Division",
    },
    {
      text: "Technologies ",
    },
    {
      text: "& ",
    },
    {
      text: "Development",
    },
    {
      text: "Boumerdes.",
      className: "text-[#F5811E] dark:text-blue-500",
    },
  ];

  return (
    <>
      <div className="w-full h-[12vh] bg-red-950 ">
      <nav className="fixed  h-[12vh] top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex     items-center pl-5 justify-between">
                  <div class="flex items-center justify-start rtl:justify-end">
                    <a href="" class="flex ms-2 md:me-24">
                      <img
                        src={logo}
                        class="h-[70px] me-3 rounded-2xl"
                        alt="FlowBite Logo"
                      />
                      <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                        <TypewriterEffect
                          words={words}
                          className="text-[20px]"
                        />{" "}
                      </span>
                    </a>
                  </div>
                  <Button
                    color="red"
                    onClick={() => {
                      localStorage.removeItem("user");
                      navigate("../login");
                      setUSER({});
                    }}
                  >
                    Déconixion
                  </Button>
                </div>
              </div>
            </nav>
        <main className="w-full h-[88vh] flex pt-[15vh] pr-4 ">
          <form
            className="w-[50%] h-full pl-10 pr-10  relative flex flex-col gap-8 "
            onSubmit={async (e) => {
              e.preventDefault();
              if (modier) {
                try {
                  const response = await fetch(
                    "http://localhost:3005/api/profil",
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(user),
                    }
                  );
                  const data = await response.json();
                  if (!response.ok) {
                    toast.error(data.message);
                  } else {
                    toast.success(data.message);
                    setUser({
                      IdE:"",
                      Nom: "",
                      Prenom: "",
                      Email: "",
                      Poste: "null",
                    });
                  }
                } catch (error) {
                  console.error("Une erreur s'est produite :", error);
                }
              } else {
                try {
                  const response = await fetch(
                    "http://localhost:3005/api/modifieProfil",
                    {
                      method: "PUT",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(user),
                    }
                  );
                  const data = await response.json();
                  if (!response.ok) {
                    toast.error(data.message);
                  } else {
                    toast.success(data.message);
                    setModfier(true);
                    setUser({
                      IdE:"",
                      Nom: "",
                      Prenom: "",
                      Email: "",
                      Poste: "null",
                    });
                  }
                } catch (error) {
                  console.error("Une erreur s'est produite :", error);
                }
              }
            }}
          >
            <h1 className="text-[30px]">Ajouter un poste</h1>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Id
              </label>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="IdE"
                required
                value={user.IdE}
                onChange={(e) => {
                  let data = { ...user };
                  data.IdE = e.target.value;
                  setUser(data);
                }}
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="nom@mail.com"
                required
                value={user.Email}
                onChange={(e) => {
                  let data = { ...user };
                  data.Email = e.target.value;
                  setUser(data);
                }}
              />
            </div>

            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nom
              </label>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
                value={user.Nom}
                onChange={(e) => {
                  let data = { ...user };
                  data.Nom = e.target.value;
                  setUser(data);
                }}
              />
            </div>
            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Prenom
              </label>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
                value={user.Prenom}
                onChange={(e) => {
                  let data = { ...user };
                  data.Prenom = e.target.value;
                  setUser(data);
                }}
              />
            </div>

            <div>
              <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Poste
              </label>
              <select
                id="poste-select"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={user.Poste}
                onChange={(e) => {
                  let data = { ...user };
                  data.Poste = e.target.value;
                  setUser(data);
                }}
              >
                <option selected value="null" disabled>
                  Selection Poste
                </option>
                <option value="Poste1">Médecin</option>
                <option value="Poste2">Infirmière</option>
                <option value="Poste3">Chef de service</option>
              </select>
            </div>
            <div>
              <button
                type="submit"
                class="text-white  bg-green-700 hover:bg-green-800 absolute right-10 bottom-[-50px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Ajouter
              </button>
              {modier ? (
                ""
              ) : (
                <>
                  <button
                    type="button"
                    class="text-white  bg-red-700 hover:bg-red-800 absolute right-30 bottom-[-50px] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => {
                      setUser({
                        Nom: "",
                        Prenom: "",
                        Email: "",
                        Poste: "null",
                      });
                      setModfier(true);
                    }}
                  >
                    Annuler
                  </button>
                </>
              )}
            </div>
          </form>

          <div className="w-[50%] h-full  ">
            <section className="antialiased">
              <div className="flex flex-col justify-center h-full">
                <div className="w-full  h-[73vh]  bg-white shadow-lg rounded-sm border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-100">
                    <h2 className="font-bold text-gray-800">
                      Listes des postes
                    </h2>
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
                                Prenom
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                              <div claclassNamess="font-semibold text-left">
                                Poste
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                              <div claclassNamess="font-semibold text-left">
                                Status
                              </div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left"></div>
                            </th>
                            <th className="p-2 whitespace-nowrap">
                              <div className="font-semibold text-left mr-3">
                                Action
                              </div>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="text-sm divide-y divide-gray-100">
                          {liste.map((e, i) => {
                            return (
                              <tr key={i}>
                                <td className="p-2 whitespace-nowrap">
                                  <div className="text-left ">{e.Nom}</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                  <div className="text-left font-medium text-green-500">
                                    {e.Prenom}
                                  </div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                  <div className="text-center">{e.Poste}</div>
                                </td>
                                <td className="p-2 whitespace-nowrap">
                                  <div className="text-center">
                                    <label className="inline-flex items-center ml-5 me-5 cursor-pointer">
                                      <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={e.Statut}
                                        onChange={async () => {
                                          const updatedList = liste.map(
                                            (item, index) => {
                                              if (index === i) {
                                                return {
                                                  ...item,
                                                  Statut: !item.Statut,
                                                };
                                              }
                                              return item;
                                            }
                                          );
                                          try {
                                            const response = await fetch(
                                              "http://localhost:3005/api/statut",
                                              {
                                                method: "POST",
                                                headers: {
                                                  "Content-Type":
                                                    "application/json",
                                                },
                                                body: JSON.stringify({
                                                  Statut: updatedList[i].Statut,
                                                  IdE: updatedList[i].IdE,
                                                }),
                                              }
                                            );
                                            const data = await response.json();
                                            if (!response.ok) {
                                              toast.error(data.message);
                                            } else {
                                              toast.success(data.message);
                                              setModfier(true);
                                              setUser({
                                                Nom: "",
                                                Prenom: "",
                                                Email: "",
                                                Poste: "null",
                                              });
                                            }
                                          } catch (error) {
                                            console.error(
                                              "Une erreur s'est produite :",
                                              error
                                            );
                                          }
                                          setliste(updatedList);
                                        }}
                                      />
                                      <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                                    </label>
                                  </div>
                                </td>
                                <td className="p-2 whitespace-nowrap"></td>
                                <td className="p-2 flex justify-center gap-2 items-center">
                                  <div className="w-auto h-auto">
                                    <div
                                      className="flex-1 h-full"
                                      onClick={() => {
                                        let data = { ...liste[i] };
                                        setUser(data);
                                        setModfier(false);
                                      }}
                                    >
                                      <div className="flex items-center justify-center flex-1 h-full p-1 border border-green-500 text-white shadow rounded-lg">
                                        <div className="relative">
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-4 w-4 text-green-500"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                          >
                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                          </svg>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <img
                                    src={phone}
                                    alt=""
                                    className="w-[30px]"
                                    onClick={async () => {
                                      try {
                                        const response = await fetch(
                                          "http://localhost:3005/api/password",
                                          {
                                            method: "POST",
                                            headers: {
                                              "content-type":
                                                "application/json",
                                            },
                                            body: JSON.stringify({
                                              IdE: e.IdE,
                                            }),
                                          }
                                        );
                                        const data = await response.json();
                                        if (!response.ok) {
                                          toast.error(data.message);
                                        } else {
                                          toast.success(data.message);
                                        }
                                      } catch (error) {
                                        console.error(
                                          "Une erreur s'est produite :",
                                          error
                                        );
                                      }
                                    }}
                                  />

                                  <svg
                                    onClick={async () => {
                                      try {
                                        const response = await fetch(
                                          "http://localhost:3005/api/supProfil",
                                          {
                                            method: "DELETE",
                                            headers: {
                                              "Content-Type":
                                                "application/json",
                                            },
                                            body: JSON.stringify({
                                              IdE: e.IdE,
                                            }),
                                          }
                                        );
                                        const data = await response.json();
                                        if (!response.ok) {
                                          toast.error(data.message);
                                        } else {
                                          toast.success(data.message);
                                          setliste(data.data)
                                          listProfil();
                                        }
                                      } catch (error) {
                                        console.error(
                                          "Une erreur s'est produite :",
                                          error
                                        );
                                      }
                                    }}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
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
        </main>
      </div>
    </>
  );
};

export default Adm;
