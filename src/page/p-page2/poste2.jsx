import React from "react";
import { TypewriterEffect } from "../../../node_modules/framer-motion/dist/es/components/ui/typewriter-effect";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Home from "./home.jsx";
import Page1 from "./page1.jsx";
import Page2 from "./page2.jsx";
import Page3 from "./page3.jsx";
import Page5 from "./page5.jsx";
import Chat from "./chat.jsx";
import Statistique from "./statistique.jsx";
import logo from "../../img/logo_sonatrach.svg";
import P3 from "./p3.jsx";
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
import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import toast from "react-hot-toast";

function Poste2({ USER, setUSER }) {
  const [notification, setNotification] = useState(false);
  const [update, setUpdate] = useState(false);
  const [agent, setAgent] = useState({
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
  const [jour, setJour] = useState("");
  const [mois, setMois] = useState("");
  const [annee, setAnnee] = useState("");
  const { token } = useParams();
  const [poste, setPoste] = useState([]);
  const [agents, setAgents] = useState([]);
  const [page, Page] = useState(0);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    Nom: "",
    Prenom: "",
    Email: "",
    Poste: "null",
  });

  //pour gérer les page
  function FPage() {
    switch (page) {
      case 0:
        return <Home />;
      case 1:
        return (
          <Page1
            agent={agent}
            setAgent={setAgent}
            update={update}
            setUpdate={setUpdate}
            Page={Page}
            poste={poste}
            setPoste={setPoste}
            jour={jour}
            setJour={setJour}
            mois={mois}
            setMois={setMois}
            annee={annee}
            setAnnee={setAnnee}
          />
        );
      case 2:
        return (
          <Page2
            agents={agents}
            Page={Page}
            setAgents={setAgents}
            setAgent={setAgent}
            poste={poste}
            setPoste={setPoste}
            update={update}
            setUpdate={setUpdate}
            jour={jour}
            setJour={setJour}
            mois={mois}
            setMois={setMois}
            annee={annee}
            setAnnee={setAnnee}
            agent={agent}
          />
        );
      case 3:
        return (
          <>
            <P3 />
          </>
        );

     
        return (
          <>
            <div class="flex h-[85vh] antialiased text-gray-800">
              <div class="flex flex-row h-full w-full overflow-x-hidden">
                <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
                  <div class="flex flex-col mt-8">
                    <div class="flex flex-row items-center justify-between text-xs">
                      <span class="font-bold">Active Conversations</span>
                      <span class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                        4
                      </span>
                    </div>
                    <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                      <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                        <div class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                          D
                        </div>
                        <div class="ml-2 text-sm font-semibold">Doctor</div>
                      </button>
                      <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                        <div class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                          C
                        </div>
                        <div class="ml-2 text-sm font-semibold">
                          Chef Service
                        </div>
                        <div class="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                          2
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col flex-auto h-full p-6">
                  <div class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                    <div class="flex flex-col h-full overflow-x-auto mb-4">
                      {/* message */}

                      <div class="flex flex-col h-full">
                        <div class="grid grid-cols-12 gap-y-2">
                          <div class="col-start-1 col-end-8 p-3 rounded-lg">
                            <div class="flex flex-row items-center">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                D
                              </div>
                              <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                <div>Salut .</div>
                              </div>
                            </div>
                          </div>
                          <div class="col-start-1 col-end-8 p-3 rounded-lg">
                            <div class="flex flex-row items-center">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                D
                              </div>
                              <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                <div>donner moi liste des agents</div>
                              </div>
                            </div>
                          </div>
                          <div class="col-start-6 col-end-13 p-3 rounded-lg">
                            <div class="flex items-center justify-start flex-row-reverse">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                I
                              </div>
                              <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                                <div>bonjour </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-start-6 col-end-13 p-3 rounded-lg">
                            <div class="flex items-center justify-start flex-row-reverse">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                I
                              </div>
                              <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                                <div>okay</div>
                              </div>
                            </div>
                          </div>
                          <div class="col-start-1 col-end-8 p-3 rounded-lg">
                            <div class="flex flex-row items-center">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                A
                              </div>
                              <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                <div>Lorem ipsum dolor sit amet !</div>
                              </div>
                            </div>
                          </div>
                          <div class="col-start-6 col-end-13 p-3 rounded-lg">
                            <div class="flex items-center justify-start flex-row-reverse">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                A
                              </div>
                              <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                                <div>
                                  Lorem ipsum dolor sit, amet consectetur
                                  adipisicing. ?
                                </div>
                                <div class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                                  Seen
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-start-1 col-end-8 p-3 rounded-lg">
                            <div class="flex flex-row items-center">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                A
                              </div>
                              <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                <div>
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Perspiciatis, in.
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-start-1 col-end-8 p-3 rounded-lg">
                            <div class="flex flex-row items-center">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                                A
                              </div>
                              <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                <div class="flex flex-row items-center">
                                  <button class="flex items-center justify-center bg-indigo-600 hover:bg-indigo-800 rounded-full h-8 w-10">
                                    <svg
                                      class="w-6 h-6 text-white"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                      ></path>
                                      <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="1.5"
                                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                      ></path>
                                    </svg>
                                  </button>
                                  <div class="flex flex-row items-center space-x-px ml-4">
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-4 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-12 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-6 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-5 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-4 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-3 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-10 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-1 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-1 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-8 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-2 w-1 bg-gray-500 rounded-lg"></div>
                                    <div class="h-4 w-1 bg-gray-500 rounded-lg"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
                      <div>
                        <button class="flex items-center justify-center text-gray-400 hover:text-gray-600">
                          <svg
                            class="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div class="flex-grow ml-4">
                        <div class="relative w-full">
                          <input
                            type="text"
                            class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                          />
                          <button class="absolute flex items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600">
                            <svg
                              class="w-6 h-6"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div class="ml-4">
                        <button class="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0">
                          <span>envoyer</span>
                          <span class="ml-2">
                            <svg
                              class="w-4 h-4 transform rotate-45 -mt-px"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                              ></path>
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <Page5 USER={USER} />
          </>
        );
      case 6:
        return (
        <Statistique    />
        );
      case 7:
        
          return (
            <>
              <Chat USER={USER} />
            </>
          )
        

      default:
        return null; // Retourne null si 'page' n'est pas défini correctement
    }
  }
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

  function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const navigate = useNavigate();
    const closeMenu = () => setIsMenuOpen(false);
    useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setIsNavOpen(false)
      );
    }, []);
    const profileMenuItems = [
      {
        label: "My Profile",
        icon: UserCircleIcon,
      },
      {
        label: "Inbox",
        icon: InboxArrowDownIcon,
      },
      {
        label: "Help",
        icon: LifebuoyIcon,
      },
      {
        label: "Sign Out",
        icon: PowerIcon,
      },
    ];
    return (
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <div class="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span class="font-medium text-gray-600 dark:text-gray-300">
                JL
              </span>
            </div>

            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon }, key) => {
            const isLastItem = key === profileMenuItems.length - 1;
            return (
              <MenuItem
                key={label}
                onClick={() => {
                  if (label == "Sign Out") {
                    navigate("../../login");
                  }
                  if (label == "My Profile") {
                    Page(3);
                  }
                  if (label == "Inbox") {
                    Page(4);
                  }
                  if (label == "Help") {
                    Page(5);
                  }
                }}
                className={`flex items-center gap-2 rounded ${
                  isLastItem
                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                    : ""
                }`}
              >
                {React.createElement(icon, {
                  className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                  strokeWidth: 2,
                })}
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color={isLastItem ? "red" : "inherit"}
                >
                  {label}
                </Typography>
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
  }
  let data = { ...JSON.parse(localStorage.getItem("user")) };

  useEffect(() => {
    setUSER(JSON.parse(localStorage.getItem("user")));

    if (token && data.Token === token) {
      setUser({ ...data });
    } else {
      navigate("../login");
    }
  }, [token, user]);

  return (
    <>
      {token && USER.Token == token ? (
        <>
          <div className="w-full h-[12vh] bg-red-950 relative">
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
          </div>
          <div
            className="w-[100%]   flex relative "
            onClick={() => {
              if (notification) setNotification(!notification);
            }}
          >
            <div className="w-[15vw]   ">
              <aside
                id="logo-sidebar"
                class="fixed top-0 left-0 z-40 w-[15vw] h-screen pt-[13vh] transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 bg"
                aria-label="Sidebar"
              >
                <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                  <div className="avatar placeholder pl-3">
                    <div className="  text-white rounded-full w-12 bg-gray-800">
                      <span className="text-2xl">
                        {USER.Nom[0].toUpperCase()}
                        {USER.Prenom[0].toUpperCase()}
                      </span>
                    </div>
                    <h1 className="btn btn-ghost text-xl">
                      {USER.Prenom.length > 8
                        ? USER.Prenom.substring(0, 8) + "..."
                        : `${USER.Prenom}`}
                    </h1>
                  </div>
                  <div className="w-full h-[20px]"></div>
                  <ul class="space-y-2 font-medium">
                    <li
                      onClick={() => {
                        Page(0);
                      }}
                    >
                      <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          width="500"
                          zoomAndPan="magnify"
                          viewBox="0 0 375 374.999991"
                          height="500"
                          preserveAspectRatio="xMidYMid meet"
                          version="1.0"
                          fill="currentColor"
                        >
                          <defs>
                            <clipPath id="1aa51b7657">
                              <path
                                d="M 56 83 L 332.859375 83 L 332.859375 344.890625 L 56 344.890625 Z M 56 83 "
                                clipRule="nonzero"
                              />
                            </clipPath>
                          </defs>
                          <g clipPath="url(#1aa51b7657)">
                            <path
                              d="M 331.054688 201.1875 L 200.289062 85.675781 C 196.898438 82.679688 191.8125 82.679688 188.421875 85.675781 L 57.65625 201.1875 C 56.691406 202.039062 56.140625 203.261719 56.140625 204.546875 L 56.140625 340.40625 C 56.140625 342.882812 58.148438 344.890625 60.621094 344.890625 L 152.542969 344.890625 C 155.015625 344.890625 157.023438 342.882812 157.023438 340.40625 L 157.023438 253.632812 C 157.023438 243.738281 165.046875 235.710938 174.949219 235.710938 L 213.761719 235.710938 C 223.664062 235.710938 231.6875 243.738281 231.6875 253.632812 L 231.6875 340.40625 C 231.6875 342.882812 233.695312 344.890625 236.167969 344.890625 L 328.089844 344.890625 C 330.5625 344.890625 332.570312 342.882812 332.570312 340.40625 L 332.570312 204.546875 C 332.570312 203.261719 332.019531 202.039062 331.054688 201.1875 "
                              fillOpacity="1"
                              fillRule="nonzero"
                            />
                          </g>
                          <path
                            d="M 367.082031 156.367188 L 218.019531 25.363281 C 204.484375 13.46875 184.222656 13.46875 170.691406 25.363281 L 21.628906 156.367188 C 14.28125 162.828125 13.917969 174.148438 20.835938 181.066406 C 27.15625 187.386719 37.300781 187.707031 44.003906 181.800781 L 182.507812 59.8125 C 189.28125 53.84375 199.429688 53.84375 206.203125 59.808594 L 344.707031 181.800781 C 351.414062 187.707031 361.558594 187.386719 367.875 181.066406 C 374.796875 174.148438 374.429688 162.824219 367.082031 156.367188 "
                            fillOpacity="1"
                            fillRule="nonzero"
                          />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          Accueil
                        </span>
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        Page(7);
                      }}
                    >
                      <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                          />
                        </svg>

                        <span className="flex-1 ms-3 whitespace-nowrap">
                        Messages
                        </span>
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        Page(5);
                      }}
                    >
                      <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                          <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                          <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                        </svg>
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          Préparer un visite
                        </span>
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        Page(1);
                        console.log("cc");
                      }}
                    >
                      <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          viewBox="0 0 1024 1024"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill="currentColor"
                            d="M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"
                          />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">
                          Ajouter agents
                        </span>
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        Page(2);
                      }}
                    >
                      <a
                        href="#"
                        class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <svg
                          class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 18"
                        >
                          <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                        </svg>
                        <span class="flex-1 ms-3 whitespace-nowrap">
                          List d'agents
                        </span>
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        Page(3);
                      }}
                    >
                      <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <svg
                          viewBox="-1 0 32 32"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
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
                        <span class="flex-1 ms-3 whitespace-nowrap">
                          Ajouter RDV
                        </span>
                      </a>
                    </li>
                    <li
                      onClick={() => {
                        Page(6);
                      }}
                    >
                      <a
                        href="#"
                        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <svg
                          fill="currentColor"
                          version="1.1"
                          id="Capa_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 494.938 494.938"
                          xmlSpace="preserve"
                          class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                        >
                          <g>
                            <path d="M19.215,154.585l112.695,46.467c2.078,0.852,4.221,1.259,6.337,1.259c5.718,0,11.247-2.957,14.333-8.142l50.739-85.448 l92.707-45.619l2.856,42.134c0.1,1.243,0.943,2.308,2.132,2.665c1.188,0.365,2.486-0.057,3.252-1.049L381.922,5.623 c0.776-1.016,0.922-2.38,0.339-3.526c-0.553-1.153-1.721-1.877-2.992-1.877L251.672,0c-1.25-0.008-2.356,0.764-2.815,1.935 c-0.437,1.161-0.109,2.486,0.813,3.315l31.648,27.986l-97.127,47.799c-2.908,1.43-5.316,3.664-6.974,6.436l-45.929,77.33 l-99.367-40.98c-8.533-3.527-18.238,0.545-21.746,9.036C6.664,141.356,10.729,151.082,19.215,154.585z" />
                            <path d="M469.375,445.01H25.567c-13.801,0-24.966,11.173-24.966,24.965c0,13.789,11.165,24.963,24.966,24.963h443.808 c13.78,0,24.961-11.174,24.961-24.963C494.336,456.183,483.155,445.01,469.375,445.01z" />
                            <path d="M50.221,241.837c-5.557,0-10.074,4.519-10.074,10.085V401.64c0,5.566,4.518,10.086,10.074,10.086h58.886 c5.571,0,10.091-4.52,10.091-10.086V251.922c0-5.566-4.52-10.085-10.091-10.085H50.221z" />
                            <path d="M375.761,82.027V401.64c0,5.566,4.52,10.086,10.075,10.086h58.901c5.556,0,10.075-4.52,10.075-10.086V82.027 c0-5.566-4.52-10.086-10.075-10.086h-58.901C380.28,71.941,375.761,76.461,375.761,82.027z" />
                            <path d="M273.969,161.045c-5.57,0-10.09,4.52-10.09,10.086V401.64c0,5.566,4.519,10.086,10.09,10.086h58.886 c5.557,0,10.075-4.52,10.075-10.086V171.131c0-5.566-4.519-10.086-10.075-10.086H273.969z" />
                            <path d="M162.103,286.386c-5.571,0-10.091,4.517-10.091,10.084v105.17c0,5.566,4.52,10.086,10.091,10.086h58.87 c5.572,0,10.092-4.52,10.092-10.086V296.47c0-5.567-4.52-10.084-10.092-10.084H162.103z" />
                          </g>
                        </svg>

                        <span className="flex-1 ms-3 whitespace-nowrap">
                          Statistique
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
            <div className="w-[84vw] h-8   ">
              {/* continer */}
              {FPage()}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-[100vh] flex justify-center items-center">
            <span className="loading loading-bars loading-lg "></span>
          </div>
        </>
      )}
    </>
  );
}

export default Poste2;
