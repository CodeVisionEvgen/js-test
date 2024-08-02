"use client";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { Difficulty } from "@/types";

interface DifficultyContextType {
  difficulty: Difficulty;
  setDifficulty: Dispatch<SetStateAction<Difficulty>>;
}

const DifficultyData = createContext<DifficultyContextType | undefined>(
  undefined,
);

export const useDifficultyContext = (): DifficultyContextType => {
  const context = useContext(DifficultyData);

  if (!context) {
    throw new Error(
      "useDifficultyContext must be used within a DifficultyProvider",
    );
  }

  return context;
};

export function DifficultyProvider({ children }: { children: ReactNode }) {
  const [difficulty, setDifficulty] = useState<Difficulty>("beginner");

  return (
    <DifficultyData.Provider value={{ difficulty, setDifficulty }}>
      {children}
    </DifficultyData.Provider>
  );
}
