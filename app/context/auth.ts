import { Context, createContext, useContext } from "react";

type AuthContextData = {
    currentUser: AuthenticatedUser | null;
    setCurrentUser: (user: AuthenticatedUser) => void;
};

export type AuthenticatedUser = {
    email: string;
    firstName: string;
};

const defaultData: AuthContextData = {
    currentUser: null,
    setCurrentUser: () => {},
};

export const AuthContext: Context<AuthContextData> = createContext(defaultData);

export const useAuth = () => {
    return useContext(AuthContext);
};
