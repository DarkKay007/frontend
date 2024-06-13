import { FaHome } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaBell } from "react-icons/fa";
import { IoLogIn } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { isAdmin, isUser, hasNoToken } from "../utils/getUserById"; // Importa tus funciones de utilidades
import { FaUserAstronaut } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { FaRegBell } from "react-icons/fa";

const NavLinks = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (hasNoToken()) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    // Elimina el token
    localStorage.removeItem("token"); // o sessionStorage.removeItem("token"), dependiendo de dónde lo guardes
    // Redirige al usuario a la página de inicio o de login
    navigate("/login");
  };

  return (
    <div className="flex flex-row items-center p-4 rounded-lg shadow-md gap-12">
      <Link
        to={"/"}
        onClick={handleLogout}
        className="text-white hover:text-yellow-300 transition-colors duration-300"
      >
        Salir
        <IoLogIn className="text-2xl" />
      </Link>

      {isAdmin() ? (
        <>
          <Link
            to={"/dashboard/list-empleados"}
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            Empleados
            <FaHome className="text-2xl" />
          </Link>

          <Link
            to={"/dashboard/list-aspirant"}
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            Aspirantes
            <BsFillPersonLinesFill className="text-2xl" />
          </Link>
          <Link
            to={"/dashboard/usuarios"}
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            Usuarios
            <FaUserAstronaut className="text-2xl" />
          </Link>
          <Link
            to={"/notificaciones"}
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            Notificaciones
            <FaBell className="text-2xl" />
          </Link>

          <Link
            to={"/creaaenotificaciones"}
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            Crear Notificación
            <FaRegBell className="text-2xl" />
          </Link>
          <Link
            to={"/profile"}
            className="text-white hover:text-yellow-300 transition-colors duration-300 ml-96"
          >
            Perfil Del Usuario
            <CgProfile className="text-2xl" />
          </Link>
        </>
      ) : isUser() ? (
        <>
          <Link
            to={"/dashboard/list-empleados"}
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            Empleados
            <FaHome className="text-2xl" />
          </Link>
                    <Link
            to={"/notificaciones"}
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            Notificaciones
            <FaBell className="text-2xl" />
          </Link>

          <Link
            to={"/creaaenotificaciones"}
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
          <Link
            to={"/creaaenotificaciones"}
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            Crear Notificación
            <FaRegBell className="text-2xl" />
          </Link>

          <Link
            to={"/profile"}
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            Perfil Del Usuario
            <CgProfile className="text-2xl" />
          </Link>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default NavLinks;
