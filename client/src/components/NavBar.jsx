import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { checkisAuth, logout } from "../redux/features/auth/authSlice";

function NavBar() {
  const isAuth = useSelector(checkisAuth);
  const dispatch = useDispatch();

  const activeStyles = {
    color: "white",
  };

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
    toast("Вы вышли из системы!");
  };

  return (
    <div className="flex py-4 justify-between items-center">
      <span className="flex justify-center items-center px-4 py-2 bg-gray-600 text-xs text-white rounded-sm">
        E
      </span>

      {isAuth && (
        <ul className="flex gap-8">
          <li>
            <NavLink
              to="/"
              href="/"
              className="text-xs text-gray-400 hover:text-white"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Главная
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/posts"
              href="/posts"
              className="text-xs text-gray-400 hover:text-white"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Мои Посты
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new"
              href="/new"
              className="text-xs text-gray-400 hover:text-white"
              style={({ isActive }) => (isActive ? activeStyles : undefined)}
            >
              Добавить Пост
            </NavLink>
          </li>
        </ul>
      )}

      <div className="flex justify-center items-center bg-gray-600 text-xs text-white rounded-sm px-4 py-2">
        {isAuth ? (
          <button
            className="bg-gray-600 text-xs text-white rounded-sm px-4 py-2"
            type="button"
            onClick={logoutHandler}
          >
            Выйти
          </button>
        ) : (
          <Link
            to="/login"
            className="bg-gray-600 text-xs text-white rounded-sm px-4 py-2"
          >
            Войти
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
