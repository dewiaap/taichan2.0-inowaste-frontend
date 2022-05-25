import { Navigate } from "react-router-dom";
const setData = (data) => {
    sessionStorage.setItem("IN-kwoaben", btoa(JSON.stringify(data)));
}

const getData = () => {
    if (sessionStorage.getItem("IN-kwoaben")) {
        const data = JSON.parse(atob(sessionStorage.getItem("IN-kwoaben"))) || {};
        return data
    } else {
        return {};
    }
}

const invalidateSession = () => {
    sessionStorage.removeItem("IN-kwoaben");
    sessionStorage.clear();
}

const dataLogin = getData();

const isLogin = getData().hasOwnProperty("is_login");

const isAdmin = getData().hasOwnProperty("is_login") ? getData().id_level === 1 : false;

const CheckAlreadyLogin = ({ children }) => {
    if (!isLogin) {
        return children
    } else {
        return <Navigate to="/" />
    }
}

const CheckNotLogin = ({ children }) => {
    if (isLogin) {
        return children
    } else {
        return <Navigate to="/mitra" />
    }
}

export { setData, dataLogin, isLogin, CheckAlreadyLogin, CheckNotLogin, invalidateSession, isAdmin };