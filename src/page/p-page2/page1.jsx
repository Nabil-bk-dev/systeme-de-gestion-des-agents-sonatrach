import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

function Page1({ agent, setAgent, update, setUpdate, Page,poste,setPoste,jour,setJour,mois,setMois,annee,setAnnee }) {

  const handleAddPoste = () => {
    let data = [...poste];
    data.push({
      Poste: "",
      DateD: "",
      DateF: "",
      RisqueProfess: "",
      Motifs: "",
    });
    setPoste(data);
  };

  const handleInputChange = (index, field, value) => {
    let data = [...poste];
    data[index][field] = value;
    setPoste(data);
  };

  const handleRemovePoste = (index) => {
    setPoste((prevPoste) => prevPoste.filter((_, i) => i !== index));
  };
 
  // pour la date de Naissance
  useEffect(() => {
    let data = { ...agent };
    data.DateN = annee + "-" + mois + "-" + jour;
    setAgent(data);
    console.log(agent.DateN);
  }, [jour, mois, annee]);

  return (
    <>
      <div className="w-full   ">
        <div className="w-full  pl-5 pr-5 pt-3 ">
          <div className="w-full h-6 mt-5 ">
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                if (!update) {
                  try {
                    const response = await fetch(
                      "http://localhost:3005/api/ajouter",
                      {
                        method: "POST",
                        headers: {
                          "content-type": "application/json",
                        },
                        body: JSON.stringify({
                          agente: { ...agent },
                          postes: [...poste],
                        }),
                      }
                    );
                    const data = await response.json();
                    if (!response.ok) {
                      console.log(data);
                      toast.error(data.message);
                    } else {
                      toast.success(data.message);
                      setAgent({
                        IdA: "",
                        Division: "",
                        Direction: "",
                        Unite: "",
                        Service: "",
                        Atelier: "",
                        Nom: "",
                        Prenom: "",
                        DateN: "",
                        LieuN: "",
                        Sex: "",
                        Email: "",
                        SitutionFamille: "",
                        Adreese: "",
                        GroupeSanguim: "",
                        Allergie: "",
                        Nss: "",
                        Scolaire: "",
                        Professionnelle: "",
                        Qprofessionnelle: "",
                        ActiProAntet: "",
                        ServiceNational: "",
                      });
                      setPoste([]);
                      setJour("");
                      setMois("");
                      setAnnee("");
                    }
                  } catch (error) {
                    console.error("Une erreur s'est produite :", error);
                  }
                } else {
                  try {
                    const response = await fetch(
                      "http://localhost:3005/api/modifagent",
                      {
                        method: "PUT",
                        headers: {
                          "content-type": "application/json",
                        },
                        body: JSON.stringify({
                          agent: { ...agent },
                          postes: [...poste],
                        }),
                      }
                    );
                    const data = await response.json();
                    if (!response.ok) {
                      console.log(data);
                      toast.error(data.message);
                    } else {
                      toast.success(data.message);
                      setAgent({
                        IdA: "",
                        Division: "",
                        Direction: "",
                        Unite: "",
                        Service: "",
                        Atelier: "",
                        Nom: "",
                        Prenom: "",
                        DateN: "",
                        LieuN: "",
                        Sex: "",
                        Email: "",
                        SitutionFamille: "",
                        Adreese: "",
                        GroupeSanguim: "",
                        Allergie: "",
                        Nss: "",
                        Scolaire: "",
                        Professionnelle: "",
                        Qprofessionnelle: "",
                        ActiProAntet: "",
                        ServiceNational: "",
                      });
                      setPoste([]);
                      setJour("");
                      setMois("");
                      setAnnee("");
                      setUpdate(false)
                      Page(2)
                    }
                  } catch (error) {
                    console.error("Une erreur s'est produite :", error);
                  }
                }
              }}
            >
              <div className="pl-[50px] pr-[50px]">
                <div class="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      N°
                    </label>
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="34234323"
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.IdA = e.target.value;
                        setAgent(data);
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
                      value={agent.Nom}
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Nom = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Prénom
                    </label>
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Doe"
                      value={agent.Prenom}
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Prenom = e.target.value;
                        setAgent(data);
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
                      value={agent.Email}
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Email = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Sexe
                    </label>

                    <select
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={agent.Sex}
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Sex = e.target.value;
                        setAgent(data);
                      }}
                    >
                      <option selected>Selection sexe</option>
                      <option value="homme">Homme</option>
                      <option value="famme">Famme</option>
                    </select>
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Né (e)
                    </label>
                    <div className="w-[100%] flex gap-6">
                      <input
                        type="tel"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Année"
                        value={annee}
                        required
                        onChange={(e) => {
                          setAnnee(e.target.value);
                        }}
                      />
                      <input
                        type="tel"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="mois"
                        value={mois}
                        required
                        onChange={(e) => {
                          setMois(e.target.value);
                        }}
                      />
                      <input
                        type="tel"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Jour"
                        value={jour}
                        required
                        onChange={(e) => {
                          setJour(e.target.value);
                        }}
                      />
                      <input
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="à"
                        value={agent.LieuN}
                        required
                        onChange={(e) => {
                          let data = { ...agent };
                          data.LieuN = e.target.value;
                          setAgent(data);
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"></label>
                    <select
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={agent.SitutionFamille}
                      onChange={(e) => {
                        let data = { ...agent };
                        data.SitutionFamille = e.target.value;
                        setAgent(data);
                      }}
                    >
                      <option selected>Selection la situation</option>
                      <option value="celibataire">Célibataire</option>
                      <option value="marie">Marié(e)</option>
                      <option value="pacse">Pacsé(e)</option>
                      <option value="divorce">Divorcé(e)</option>
                      <option value="veuf">Veuf/Veuve</option>
                    </select>
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Adresse
                    </label>
                    <input
                      type="text"
                      value={agent.Adreese}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Entrez  adresse"
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Adreese = e.target.value;
                        setAgent(data);
                      }}
                      required
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Groupe sanguin
                    </label>
                    <select
                      value={agent.GroupeSanguim}
                      onChange={(e) => {
                        let data = { ...agent };
                        data.GroupeSanguim = e.target.value;
                        setAgent(data);
                      }}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    >
                      <option value="" selected disabled>
                        Selectionnez le groupage
                      </option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Allergie
                    </label>
                    <textarea
                      value={agent.Allergie}
                      rows="10"
                      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Description ..."
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Allergie = e.target.value;
                        setAgent(data);
                      }}
                    ></textarea>
                  </div>

                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      N° S.S.
                    </label>
                    <input
                      type="text"
                      value={agent.Nss}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="EX:123353442"
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Nss = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>

                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Division
                    </label>
                    <input
                      value={agent.Division}
                      type="text"
                      placeholder="Entrez  ..."
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Division = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>

                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Direction
                    </label>
                    <input
                      value={agent.Direction}
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      placeholder="Entrez  ..."
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Direction = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Unite
                    </label>
                    <input
                      value={agent.Unite}
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Entrez  ..."
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Unite = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>

                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Service
                    </label>
                    <input
                      value={agent.Service}
                      type="text"
                      placeholder="Entrez  ..."
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Service = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Atelier
                    </label>
                    <input
                      value={agent.Atelier}
                      type="text"
                      placeholder="Entrez  ..."
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Atelier = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>
                  <div>
                    <label
                      for="Adresse"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Scolaire
                    </label>
                    <input
                      value={agent.Scolaire}
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Entrez  ..."
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Scolaire = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>
                  <div>
                    <label
                      for="Professionnelle"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Professionnelle
                    </label>
                    <input
                      value={agent.Professionnelle}
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Entrez  ..."
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Professionnelle = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Qualification Professionnelle
                    </label>
                    <input
                      value={agent.Qprofessionnelle}
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Entrez  ..."
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.Qprofessionnelle = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Activités Professionnelle antérieures
                    </label>
                    <input
                      value={agent.ActiProAntet}
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Entrez  ..."
                      required
                      onChange={(e) => {
                        let data = { ...agent };
                        data.ActiProAntet = e.target.value;
                        setAgent(data);
                      }}
                    />
                  </div>
                  <div>
                    <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Service National
                    </label>
                    <select
                      value={agent.ServiceNational}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      onChange={(e) => {
                        let data = { ...agent };
                        data.ServiceNational = e.target.value;
                        setAgent(data);
                        console.log(agent);
                      }}
                    >
                      <option selected>Selection service</option>
                      <option value="accompli">Accompli</option>
                      <option value="dispensé">Dispensé</option>
                      <option value="inapte">Inapte</option>
                    </select>
                  </div>
                </div>
                <label htmlFor=""></label>
                <button
                  type="button"
                  onClick={handleAddPoste}
                  className="text-blue-700 w-full hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                >
                  Ajoutez Poste
                </button>
                <div className="w-[100%] p-4 flex flex-col gap-4">
                  {poste.map((e, index) => (
                    <div
                      key={index}
                      className="w-full h-[220px] pl-4 pr-4 bg-gray-50 rounded-lg shadow dark:bg-gray-700"
                    >
                      <div className="w-full h-6 p-2 flex justify-end">
                        <div
                          className="bg-red-500 w-8 h-5 text-[13px] hover:bg-red-700 text-white font-bold py-2 px-2 rounded flex items-center"
                          onClick={() => handleRemovePoste(index)}
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
                      <div className="w-full p-2 flex justify-between">
                        <div className="w-[40%]">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Poste occupés chez l'employeur actuel
                          </label>
                          <input
                            value={e.Poste}
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Entrez ..."
                            required
                            onChange={(v) =>
                              handleInputChange(index, "Poste", v.target.value)
                            }
                          />
                        </div>
                        <div className="w-[40%]">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Date
                          </label>
                          <div className="flex gap-3">
                            <input
                              value={e.DateD}
                              type="text"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Du ..."
                              required
                              onChange={(v) =>
                                handleInputChange(
                                  index,
                                  "DateD",
                                  v.target.value
                                )
                              }
                            />
                            <input
                              value={e.DateF}
                              type="text"
                              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              placeholder="Au ..."
                              required
                              onChange={(v) =>
                                handleInputChange(
                                  index,
                                  "DateF",
                                  v.target.value
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full p-2 flex justify-between">
                        <div className="w-[40%]">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Risque professionnelle
                          </label>
                          <input
                            value={e.RisqueProfess}
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Entrez ..."
                            required
                            onChange={(v) =>
                              handleInputChange(
                                index,
                                "RisqueProfess",
                                v.target.value
                              )
                            }
                          />
                        </div>
                        <div className="w-[40%]">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Motifs changement de poste
                          </label>
                          <input
                            value={e.Motifs}
                            type="text"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Entrez ..."
                            required
                            onChange={(v) =>
                              handleInputChange(index, "Motifs", v.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full h-16 p-4 relative ">
                <button
                  type="submit"
                  class="text-white  bg-blue-700 hover:bg-blue-800 absolute right-3 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {update ? "Update" : "Ajouter"}
                </button>
                {update ? (
                  <>
                    <button
                      type="button"
                      onClick={() => {
                        setAgent({
                          IdA: "",
                          Division: "",
                          Direction: "",
                          Unite: "",
                          Service: "",
                          Atelier: "",
                          Nom: "",
                          Prenom: "",
                          DateN: "",
                          LieuN: "",
                          Sex: "",
                          Email: "",
                          SitutionFamille: "",
                          Adreese: "",
                          GroupeSanguim: "",
                          Allergie: "",
                          Nss: "",
                          Scolaire: "",
                          Professionnelle: "",
                          Qprofessionnelle: "",
                          ActiProAntet: "",
                          ServiceNational: "",
                        });
                        setPoste([]);
                        setJour("");
                        setMois("");
                        setAnnee("");
                        Page(2);
                      }}
                      class="text-white  bg-red-700 hover:bg-red-800 absolute left-3 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Annuler
                    </button>
                  </>
                ) : (
                  ""
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Page1;
