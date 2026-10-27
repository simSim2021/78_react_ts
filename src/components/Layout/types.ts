import type { Dispatch, ReactNode, SetStateAction } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface InputContextType {
  data: string;
  onDataChange: Dispatch<SetStateAction<string>> | (() => void);
}

export interface UserProfile {
  name: {
    first: string;
    last: string;
  };
  picture: {
    large: string;
  };
  gender: string;
  email: string;
  location: {
    country: string;
  };
  phone: string;
}

export interface InputContextType2 {
  data: string;
  onDataChange: (value: string) => void;
  user: UserProfile | null;
  setUser: (user: UserProfile | null) => void;
}