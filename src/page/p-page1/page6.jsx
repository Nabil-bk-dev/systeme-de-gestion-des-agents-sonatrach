import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "./selec.jsx";
import { useEffect } from "react";
import toast from "react-hot-toast";
const Page6 = () => {
  const [notificationMethod, setNotificationMethod] = useState("periodice");

  const handleNotificationChange = (e) => {
    setNotificationMethod(e.target.value);
  };

  const [rdv, setRdv] = useState({
    Nom: "",
    Prenom: "",
    IdR: "",
    TypeRdv: "",
    Heure: "",
    Poids: "",
    Taille: "",
    Pt: "",
  });
  const [rdvs, setRdvs] = useState([]);
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);
  const api1 = async () => {
    setRdv({
      Nom: "",
      Prenom: "",
      IdR: "",
      TypeRdv: "",
      Heure: "",
      Poids: "",
      Taille: "",
      Pt: "",
    });
    setSelected("");
    setRdvs([]);
    try {
      const response = await fetch("http://localhost:3005/api/VisitP", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          TypeRdv: notificationMethod,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        toast.error("erreur de récupérer tout les preparation");
      } else {
        setRdvs([...data.details]);
      }
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };
  useEffect(() => {
    api1();
  }, [notificationMethod]);

  const [data, setData] = useState([]);
  const [mal, setMal] = useState([]);
  const [maladie, setMaladie] = useState([]);
  const [radio, setRadio] = useState([]);
  const [radio1, setRadio1] = useState([]);

  // Fonction pour mettre à jour data lorsqu'une checkbox est cochée ou décochée
  const handleCheckboxChange = (event) => {
    const label = event.target.nextElementSibling.textContent.trim(); // Récupérer le texte du label
    const isChecked = event.target.checked;

    // Mettre à jour data en fonction de l'état de la checkbox
    if (isChecked) {
      setData((prevData) => [...prevData, label]); // Ajouter le label à data si coché
    } else {
      setData((prevData) => prevData.filter((item) => item !== label)); // Retirer le label de data si décoché
    }
  };
  const handleAddMal = () => {
    let data = [...maladie];
    data.push("");
    setMaladie(data);
  };
  const handleRemovePoste = (index) => {
    setMal((prevPoste) => prevPoste.filter((_, i) => i !== index));
  };

  const handleAddMaladie = () => {
    let data = [...mal];
    data.push({
      LiberMd: "",
      quantity: "",
      DateDM: "",
      Duree: "",
      Forme: "",
      UniteM: "",
    });
    setMal(data);
  };
  const handleRemoveMaladie = (index) => {
    setMaladie((prevPoste) => prevPoste.filter((_, i) => i !== index));
  };
  const handleAddRadio = () => {
    let data = [...radio];
    data.push("");
    setRadio(data);
  };
  const handleRemoveRadio = (index) => {
    setRadio((prevPoste) => prevPoste.filter((_, i) => i !== index));
  };
  const handleAddRadio1 = () => {
    let data = [...radio1];
    data.push("");
    setRadio1(data);
  };
  const handleRemoveRadio1 = (index) => {
    setRadio1((prevPoste) => prevPoste.filter((_, i) => i !== index));
  };

  

  return (
    <>
      <div className="w-full h-[100px] bg-gray-50 flex justify-center items-center pr-4">
        <div>
          <fieldset className="">
            <div className="flex  gap-5">
              <div className="flex items-center">
                <input
                  name="notification-method"
                  type="radio"
                  value="periodice"
                  checked={notificationMethod === "periodice"}
                  onChange={handleNotificationChange}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor="email"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Periodice
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="sms"
                  name="notification-method"
                  type="radio"
                  value="emporche"
                  checked={notificationMethod === "emporche"}
                  onChange={handleNotificationChange}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor="sms"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Emporche{" "}
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="push"
                  name="notification-method"
                  type="radio"
                  value="consultation"
                  checked={notificationMethod === "consultation"}
                  onChange={handleNotificationChange}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor="push"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Consultation
                </label>
              </div>
              <div className="flex items-center">
                <input
                  name="notification-method"
                  type="radio"
                  value="reprize"
                  checked={notificationMethod === "reprize"}
                  onChange={handleNotificationChange}
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                />
                <label
                  htmlFor="push"
                  className="ml-3 block text-sm font-medium text-gray-700"
                >
                  Reprize
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div className="w-full h-[100px] px-8 py-5  ">
        <Select
          rdvs={rdvs}
          rdv={rdv}
          setRdv={setRdv}
          selected={selected}
          setSelected={setSelected}
          open={open}
          setOpen={setOpen}
        />
      </div>
      {open ? <div className="w-full h-40"></div> : <> </>}
      {notificationMethod == "periodice" || notificationMethod == "emporche" ? (
        <>
          <div className="w-full ">
            <section className="antialiased mb-3  ">
              <div className="flex flex-col justify-center h-full px-3">
                <div className="w-full  bg-white shadow-lg rounded-sm border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-300">
                    <h2 className="font-semibold text-center text-gray-800">
                      Peau et Muqueuses
                    </h2>
                  </header>
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Allergie
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="antialiased mb-3 ">
              <div className="flex flex-col justify-center h-full px-3">
                <div className="w-full  bg-white shadow-lg rounded-sm border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-300">
                    <h2 className="font-semibold text-center text-gray-800">
                      Opht
                    </h2>
                  </header>
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Larmoiement
                            </label>
                          </div>
                        </li>

                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              DouleurOpht
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              OeilRouge
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Fatique
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              TachesDeventYeux
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="antialiased  mb-3 ">
              <div className="flex flex-col justify-center h-full px-3">
                <div className="w-full  bg-white shadow-lg rounded-sm border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-300">
                    <h2 className="font-semibold text-center text-gray-800">
                      O.R.L
                    </h2>
                  </header>
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Sifflements
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              AngiensRepetees
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Expistaxis
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Rhinorrhee
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              EntendMal
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Otorrhees
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Eternument
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="antialiased mb-3 ">
              <div className="flex flex-col justify-center h-full px-3">
                <div className="w-full  bg-white shadow-lg rounded-sm border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-300">
                    <h2 className="font-semibold text-center text-gray-800">
                      Locomoteur
                    </h2>
                  </header>
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              DouleursMusculaires
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              DouleursArticulaires
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              DouleursVertebrales
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              DouleursNevralgiques
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              GeneMouvements
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Fatigabilite
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="antialiased mb-3 ">
              <div className="flex flex-col justify-center h-full px-3">
                <div className="w-full  bg-white shadow-lg rounded-sm border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-300">
                    <h2 className="font-semibold text-center text-gray-800">
                      Respiratoire
                    </h2>
                  </header>
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Toux
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Nocturne
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Diuene
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Expectorations
                            </label>
                          </div>
                        </li>

                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              DoleursThoraciques
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Tabac
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="antialiased  mb-3">
              <div className="flex flex-col justify-center h-full px-3">
                <div className="w-full  bg-white shadow-lg rounded-sm border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-300">
                    <h2 className="font-semibold text-center text-gray-800">
                      Cardio Vaculaire
                    </h2>
                  </header>
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Palpitations
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              onChange={handleCheckboxChange}
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Oedemes
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              DouleursMarche
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              DouleursThoraciques
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Deffort
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Parmanente
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="antialiased  mb-3">
              <div className="flex flex-col justify-center h-full px-3">
                <div className="w-full  bg-white shadow-lg rounded-sm border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-300">
                    <h2 className="font-semibold text-center text-gray-800">
                      Digestif
                    </h2>
                  </header>
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Appetit
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Transit
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Selles
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Alcool
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Irritants
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Pyrosis
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Vornissements
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Rectorragies
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              DouleursAbdominales
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="antialiased  mb-3">
              <div className="flex flex-col justify-center h-full px-3">
                <div className="w-full  bg-white shadow-lg rounded-sm border border-gray-200">
                  <header className="px-5 py-4 border-b border-gray-300">
                    <h2 className="font-semibold text-center text-gray-800">
                      Génito Urinaire
                    </h2>
                  </header>
                  <div className="p-3">
                    <div className="overflow-x-auto">
                      <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              onChange={handleCheckboxChange}
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              MictionsNoctumes
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              onChange={handleCheckboxChange}
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Pollakiurie
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Hematurie
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              Dysurie
                            </label>
                          </div>
                        </li>
                        <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                          <div class="flex items-center ps-3">
                            <input
                              onChange={handleCheckboxChange}
                              id="vue-checkbox-list"
                              type="checkbox"
                              value=""
                              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                              for="vue-checkbox-list"
                              class="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                            >
                              BruluresMictionnelles
                            </label>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </>
      ) : (
        <> </>
      )}
      <div className="w-full mt-[40px] px-3 ">
        <button
          type="button"
          onClick={handleAddMaladie}
          className="text-blue-700 w-full hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Ajoutez Médicament
        </button>

        <div className="w-[100%] p-4 flex flex-col gap-4">
          {mal.map((e, index) => (
            <div
              key={index}
              className="w-full h-[220px] pl-4 pr-4 bg-gray-200 rounded-lg shadow dark:bg-gray-700"
            >
              <div className="w-full h-6 p-2 flex justify-end">
                <div
                  onClick={() => handleRemovePoste(index)}
                  className="bg-red-500 w-8 h-5 text-[13px] hover:bg-red-700 text-white font-bold py-2 px-2 rounded flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="17px"
                    height="17px"
                  >
                    <path
                      d="M14.984375 2.4863281A1.0001 1.0001 0 0 0 14 3.5L14 4L8.5 4A1.0001 1.0001 0 0 0 7.4863281 5L6 5A1.0001 1.0001 0 1 0 6 7L24 7A1.0001 1.0001 0 1 0 24 5L22.513672 5A1.0001 1.0001 0 0 0 21.5 4L16 4L16 3.5A1.0001 1.0001 0 0 0 14.984375 2.4863281zM6 9L7.7929688 24.234375C7.9109687 25.241375 8.7633438 26 9.7773438 26L20.222656 26C21.236656 26 22.088031 25.241375 22.207031 24.234375L24 9L6 9z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-full flex justify-between ">
                <div className="w-[30%] ">
                  <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Médicament
                    </label>
                    <select
                      value={e.LiberMd}
                      onChange={(event) => {
                        let data = [...mal];
                        data[index].LiberMd = event.target.value;
                        setMal(data);
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="" disabled>
                        Sélectionnez un médicament
                      </option>
                      <option value="Paracétamol">Paracétamol</option>
                      <option value="Ibuprofène">Ibuprofène</option>
                      <option value="Amoxicilline">Amoxicilline</option>
                    </select>
                  </div>
                </div>
                <div className="w-[30%]">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Qt
                  </label>
                  <input
                    value={e.quantity}
                    onChange={(event) => {
                      let data = [...mal];
                      data[index].quantity = event.target.value;
                      setMal(data);
                    }}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="EX:5"
                    required
                  />
                </div>
                <div className="w-[30%]">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Date début
                  </label>
                  <input
                    value={e.DateDM}
                    onChange={(event) => {
                      let data = [...mal];
                      data[index].DateDM = event.target.value;
                      setMal(data);
                    }}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="2022-12-03"
                    required
                  />
                </div>
              </div>
              <div className="w-full flex justify-between ">
                <div className="w-[30%] ">
                  <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Forme
                    </label>
                    <select
                      value={e.Forme}
                      onChange={(event) => {
                        let data = [...mal];
                        data[index].Forme = event.target.value;
                        setMal(data);
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="" disabled defaultValue>
                        Sélectionnez une forme
                      </option>
                      <option value="Capsule">Capsule</option>
                      <option value="Comprimé">Comprimé</option>
                      <option value="Sirop">Sirop</option>
                      <option value="Gélule">Gélule</option>
                      <option value="Injection">Injection</option>
                    </select>
                  </div>
                </div>
                <div className="w-[30%]">
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Duree (Jour)
                  </label>
                  <input
                    value={e.Duree}
                    onChange={(event) => {
                      let data = [...mal];
                      data[index].Duree = event.target.value;
                      setMal(data);
                    }}
                    type="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="5"
                    required
                  />
                </div>
                <div className="w-[30%] ">
                  <div className="mb-3">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      UniteM
                    </label>
                    <select
                      value={e.UniteM}
                      onChange={(event) => {
                        let data = [...mal];
                        data[index].UniteM = event.target.value;
                        setMal(data);
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="" defaultValue disabled>
                        Sélectionnez une unité
                      </option>
                      <option value="mg">mg</option>
                      <option value="g">g</option>
                      <option value="mcg">mcg</option>
                      <option value="ml">ml</option>
                      <option value="unité">unité</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-[40px] px-3">
        <button
          type="button"
          onClick={handleAddMal}
          className="text-green-700 w-full hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Ajoutez Maladie
        </button>
        <div className="w-[100%] p-4 flex flex-col gap-4">
          {maladie.map((e, index) => (
            <div
              key={index}
              className="w-full h-[220px] pl-4 pr-4 bg-gray-200 rounded-lg shadow dark:bg-gray-700"
            >
              <div className="w-full h- p-2 flex justify-end">
                <div
                  onClick={() => handleRemoveMaladie(index)}
                  className="bg-red-500 w-8 h-5 text-[13px] hover:bg-red-700 text-white font-bold py-2 px-2 rounded flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="17px"
                    height="17px"
                  >
                    <path
                      d="M14.984375 2.4863281A1.0001 1.0001 0 0 0 14 3.5L14 4L8.5 4A1.0001 1.0001 0 0 0 7.4863281 5L6 5A1.0001 1.0001 0 1 0 6 7L24 7A1.0001 1.0001 0 1 0 24 5L22.513672 5A1.0001 1.0001 0 0 0 21.5 4L16 4L16 3.5A1.0001 1.0001 0 0 0 14.984375 2.4863281zM6 9L7.7929688 24.234375C7.9109687 25.241375 8.7633438 26 9.7773438 26L20.222656 26C21.236656 26 22.088031 25.241375 22.207031 24.234375L24 9L6 9z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Maladie
                </label>
                <select
                  value={e}
                  onChange={(event) => {
                    let data = [...maladie];
                    data[index] = event.target.value;
                    setMaladie(data);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="" disabled>
                    Sélectionnez une maladie
                  </option>
                  <option value="Diabète">Diabète</option>
                  <option value="Hypertension">Hypertension</option>
                  <option value="Asthme">Asthme</option>
                  <option value="Grippe">Grippe</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mt-[40px] px-3 ">
        <button
          type="button"
          onClick={handleAddRadio}
          className="text-yellow-700 w-full hover:text-white border border-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Ajoutez Radio Médical
        </button>
        <div className="w-full h- p-2 flex justify-end"></div>
        <div className="w-[100%] p-4 flex flex-col gap-4">
          {radio.map((e, index) => (
            <div
              key={index}
              className="w-full h-[220px] pl-4 pr-4 bg-gray-200 rounded-lg shadow dark:bg-gray-700"
            >
              <div className="w-full h- p-2 flex justify-end">
                <div
                  onClick={() => handleRemoveRadio(index)}
                  className="bg-red-500 w-8 h-5 text-[13px] hover:bg-red-700 text-white font-bold py-2 px-2 rounded flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="17px"
                    height="17px"
                  >
                    <path
                      d="M14.984375 2.4863281A1.0001 1.0001 0 0 0 14 3.5L14 4L8.5 4A1.0001 1.0001 0 0 0 7.4863281 5L6 5A1.0001 1.0001 0 1 0 6 7L24 7A1.0001 1.0001 0 1 0 24 5L22.513672 5A1.0001 1.0001 0 0 0 21.5 4L16 4L16 3.5A1.0001 1.0001 0 0 0 14.984375 2.4863281zM6 9L7.7929688 24.234375C7.9109687 25.241375 8.7633438 26 9.7773438 26L20.222656 26C21.236656 26 22.088031 25.241375 22.207031 24.234375L24 9L6 9z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Radio
                </label>
                <select
                  value={e}
                  onChange={(event) => {
                    let data = [...radio];
                    data[index] = event.target.value;
                    setRadio(data);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="" disabled>
                    Sélectionnez une Radio
                  </option>
                  <option value="IRM">IRM</option>
                  <option value="Scanner">Scanner</option>
                  <option value="Radiographie">Radiographie</option>
                  <option value="Échographie">Échographie</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mt-[40px] px-3 ">
        <button
          type="button"
          onClick={handleAddRadio1}
          className="text-pink-700 w-full hover:text-white border border-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        >
          Ajoutez Examen Biologique
        </button>
        <div className="w-full h- p-2 flex justify-end"></div>
        <div className="w-[100%] p-4 flex flex-col gap-4">
          {radio1.map((e, index) => (
            <div
              key={index}
              className="w-full h-[220px] pl-4 pr-4 bg-gray-200 rounded-lg shadow dark:bg-gray-700"
            >
              <div className="w-full h- p-2 flex justify-end">
                <div
                  onClick={() => handleRemoveRadio1(index)}
                  className="bg-red-500 w-8 h-5 text-[13px] hover:bg-red-700 text-white font-bold py-2 px-2 rounded flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    width="17px"
                    height="17px"
                  >
                    <path
                      d="M14.984375 2.4863281A1.0001 1.0001 0 0 0 14 3.5L14 4L8.5 4A1.0001 1.0001 0 0 0 7.4863281 5L6 5A1.0001 1.0001 0 1 0 6 7L24 7A1.0001 1.0001 0 1 0 24 5L22.513672 5A1.0001 1.0001 0 0 0 21.5 4L16 4L16 3.5A1.0001 1.0001 0 0 0 14.984375 2.4863281zM6 9L7.7929688 24.234375C7.9109687 25.241375 8.7633438 26 9.7773438 26L20.222656 26C21.236656 26 22.088031 25.241375 22.207031 24.234375L24 9L6 9z"
                      fill="#ffffff"
                    />
                  </svg>
                </div>
              </div>
              <div className="mb-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Examen Biologique
                </label>
                <select
                  value={e}
                  onChange={(event) => {
                    let data = [...radio1];
                    data[index] = event.target.value;
                    setRadio1(data);
                  }}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="" disabled selected>
                    Sélectionnez un Examen
                  </option>
                  <option value="Covid-19">Test Covid-19</option>
                  <option value="Cholestérol">Cholestérol</option>
                  <option value="Glycémie">Glycémie</option>
                  <option value="Hémoglobine">Hémoglobine</option>
                </select>
              </div>
            </div>
          ))}
        </div>
      </div>
  <div className="w-full flex justify-end">
  <button
      className="w-[100px] h-[40px] mr-3 mb-3 text-white text-[20px] rounded-md bg-blue-600"
      onClick={async () => {
        try {
          const response = await fetch("http://localhost:3005/api/donnee", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              IdV: rdv.IdV,
              maladies: maladie,
              biologiques: radio1,
              radios: radio,
              medicaments: mal,
              LibreSy: data,
            }),
          });

          const responseData = await response.json();

          if (!response.ok) {
            toast.error("Erreur lors de la requête");
          } else {
            toast.success("ajouter avec success");
            window.location.reload()
          }
        } catch (error) {
          console.error("Une erreur s'est produite :", error);
          toast.error("Une erreur s'est produite");
        }
      }}
    >
      Ajouter
    </button>
  </div>
    </>
  );
};

export default Page6;
