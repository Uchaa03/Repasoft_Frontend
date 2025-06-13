import {useNavigate} from "react-router-dom";
import useAuthStore from "../store/authStore";

const useLogout = () => {
    const navigate = useNavigate();
    const clearAuth = useAuthStore((state) => state.clearAuth);

    return () => {
        clearAuth();
        navigate("/");
    };
};

export default useLogout;
