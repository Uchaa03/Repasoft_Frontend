import {create} from "zustand";
import {persist} from "zustand/middleware";

//Create store for userData with localstorage persist.
const useAuthStore = create(persist(
    (set) => ({
        //Create data for set initial state
        token: null,
        role: null,
        requirePaswdChange: false,
        user_id: null,
        setAuthData: (token, role, requirePaswdChange, user_id) =>
            set({token, role, requirePaswdChange, user_id}),  //Set data with setter when is log in

        // Function for clear store when user is logout
        clearAuth: () => set({token: null, role: null, requirePaswdChange: false, user_id: null}),
    }),
    {
        name: "auth",
    }
))

export default useAuthStore