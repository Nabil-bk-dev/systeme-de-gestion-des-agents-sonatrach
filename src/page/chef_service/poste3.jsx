import React from "react";
import { TypewriterEffect } from "../../../node_modules/framer-motion/dist/es/components/ui/typewriter-effect";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Chat from "../p-page2/chat.jsx"
import Statistique from "../p-page2/statistique.jsx";
import logo from "../../img/logo_sonatrach.svg";
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

function Poste3({ USER, setUSER }) {
    const navigate = useNavigate();

  const [page, Page] = useState(7); 
  const { token } = useParams();

  function FPage() {
    switch (page) {
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
        return (
          <>
            <div class="flex  antialiased text-gray-800">
              <div class="flex flex-row h-full w-full overflow-x-hidden">
                <div class="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
                  <div class="flex flex-col mt-8">
                    <div class="flex flex-row items-center justify-between text-xs">
                      <span class="font-bold">Amis</span>
                      <span class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full">
                        3
                      </span>
                    </div>
                    <div class="flex flex-col space-y-1 mt-4 -mx-2 h-48 overflow-y-auto">
                      <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                        <div class="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                          RL
                        </div>
                        <div class="ml-2 text-sm font-semibold">RAFIK</div>
                      </button>
                      <button class="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2">
                        <div class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full">
                          DL
                        </div>
                        <div class="ml-2 text-sm font-semibold">DJAWED</div>
                        <div class="flex items-center justify-center ml-auto text-xs text-white bg-red-500 h-4 w-4 rounded leading-none">
                          2
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="flex flex-col flex-auto h-[650px] p-6">
                  <div
                    class="flex flex-col flex-auto flex-shrink-0 rounded-2xl h-full p-4 message"
                    id="message"
                  >
                    <div class="flex flex-col h-full overflow-x-auto mb-4">
                      <div class="flex flex-col h-full">
                        <div class="grid grid-cols-12 gap-y-2">
                          <div class="col-start-1 col-end-8 p-3 rounded-lg">
                            <div class="flex flex-row items-center">
                              <div class="flex items-center justify-center h-10 w-10 text-white rounded-full bg-green-500 flex-shrink-0">
                                RL
                              </div>
                              <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                <div>Salut</div>
                              </div>
                            </div>
                          </div>

                          <div class="col-start-6 col-end-13 p-3 rounded-lg">
                            <div class="flex items-center justify-start flex-row-reverse">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full text-white bg-indigo-800 flex-shrink-0">
                                LR
                              </div>
                              <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                                <div>Salut cava</div>
                              </div>
                            </div>
                          </div>

                          <div class="col-start-1 col-end-8 p-3 rounded-lg">
                            <div class="flex flex-row items-center">
                              <div class="flex items-center justify-center h-10 w-10 text-white rounded-full bg-green-500 flex-shrink-0">
                                RL
                              </div>
                              <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                <div>cava et vous</div>
                              </div>
                            </div>
                          </div>
                          <div class="col-start-6 col-end-13 p-3 rounded-lg">
                            <div class="flex items-center justify-start flex-row-reverse">
                              <div class="flex items-center justify-center h-10 w-10 rounded-full text-white bg-indigo-800 flex-shrink-0">
                                LR
                              </div>
                              <div class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                                <div>Hmdh</div>
                                <div class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                                  Seen
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-start-1 col-end-8 p-3 rounded-lg">
                            <div class="flex flex-row items-center">
                              <div class="flex items-center justify-center h-10 w-10 text-white rounded-full bg-green-500 flex-shrink-0">
                                RL
                              </div>
                              <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                <div>Tu peux venir au bureau ?</div>
                              </div>
                            </div>
                          </div>
                          <div class="col-start-1 col-end-8 p-3 rounded-lg">
                            <div class="flex flex-row items-center">
                              <div class="flex items-center justify-center h-10 w-10 text-white rounded-full bg-green-500 flex-shrink-0">
                                RL
                              </div>
                              <div class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                                <div>J'ai besoin d'aide</div>
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
                          <span>Send</span>
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
  const [user, setUser] = useState({
    Nom: "",
    Prenom: "",
    Email: "",
    Poste: "null",
  });
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
                   <a href="https://flowbite.com" class="flex ms-2 md:me-24">
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

export default Poste3;
