import {useNavigate} from "react-router-dom";

export const useRedirectAfterAuth = () => {
    const navigate = useNavigate();

    return (role, requires_password_change) => {
        if (requires_password_change) {
            navigate("/change-password");
        } else {
            switch (role) {
                case "admin":
                    navigate("/admin/dashboard");
                    break;
                case "tech":
                    navigate("/tech/dashboard");
                    break;
                case "client":
                    navigate("/client/repairs");
                    break;
                default:
                    navigate("/");
            }
        }
    };
};
