import { defineStore } from "pinia-for-react";

export const useUserStore = (defineStore as any)("user", {
    state: () => {
        return {
            _id: "",
            username: "",
            email: "",
            location: "",
            avatar: "",
            bio: "",
            DOB: ""
        };
    },
    actions: {
        setUser() {

        },
    },
    getters: {},
});