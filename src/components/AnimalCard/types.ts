import type { ReactNode } from "react";

export interface AnimalCardProps{
  name: string, 
  species?: string, 
  imgSrc: string, 
  children?: ReactNode;
}

export interface Animal {
  name: string;
  species: string;
  role: string;
  skills: string[];
  image: string;
}