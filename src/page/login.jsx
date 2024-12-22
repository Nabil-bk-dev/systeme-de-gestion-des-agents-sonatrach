import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import intro from "../img/chemistry class.mp4";
import logo from "../img/logo_sonatrach.svg"; // Supposition de l'utilisation du logo, il n'était pas utilisé dans votre code original.
import bg from "../img/l.svg"; // Supposition de l'utilisation du bg, il n'était pas utilisé dans votre code original.

function Login({ setUSER,USER }) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    IdE: "admin2",
    Password: "admin2",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3005/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      if (!response.ok) {
        // Code pour gestion des erreurs
        console.log(data);
        toast.error(data.error);
      } else {
        setUSER(data.user)
         if(data.user.Poste=="Poste1")
          { 
            toast.success(JSON.stringify(data))
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/poste=1/"+data.user.Token);  
                
          }
          else
          {
            if(data.user.Poste=="Poste2")
              {
                localStorage.setItem("user", JSON.stringify(data.user));
                    navigate("/poste=2/"+data.user.Token);  
              }
              else{
                if(data.user.Poste=="Poste3")
                  {
                    localStorage.setItem("user", JSON.stringify(data.user));
                   navigate("/poste=3/"+data.user.Token);  
                  }
                  else{       
                    if(data.user.Poste=="Poste4")
                      {
                        localStorage.setItem("user", JSON.stringify(data.user));
                       navigate("/admin/"+data.user.Token);  
                      }
                  }
              }
          }
      }
    } catch (error) {
      console.error("Une erreur s'est produite :", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="w-full h-screen bg-[#FCFCFC] flex relative ">
        <video src={intro} autoPlay loop muted />
        <div className="w-[60%] h-screen absolute"></div>
        <div className="w-[40%] h-screen absolute pt-[230px] right-[90px]">
          <div className="w-[100%]">
            <h1 className="text-center text-5xl font-extrabold dark:text-white mb-10 bg">
              <span className="p-2 rounded-md bg-[#1664e118] text-[#000000b4]">
                <span className="text-[#e57818]">S</span>ervice{" "}
                <span className="text-[#e57818]">S</span>ocial
              </span>
            </h1>
            <form className="w-[100%] flex flex-col gap-7" onSubmit={handleSubmit}>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  name="IdE"
                  onChange={handleChange}
                  value={user.IdE}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_email"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Nom utilisateur
                </label>
              </div>
              <div className="relative z-0 w-full mb-5 group">
                <input
                  name="Password"
                  onChange={handleChange}
                  value={user.Password}
                  type="password"
                  id="floating_password"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor="floating_password"
                  className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Mode de passe
                </label>
              </div>
              <button
                type="submit"
                className="text-white bg-[#F5811E] hover:bg-[#F5811E] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Se connecter
              </button>
              <p className="text-center text-[#424242]">
                © Copyright 2024 Groupe DGL
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
