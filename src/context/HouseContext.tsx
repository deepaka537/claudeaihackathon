import React, { createContext, useContext, useState } from "react";
import type { Assignment, HouseMood } from "../types";

interface HouseContextType {
  assignments: Assignment[];
  setAssignments: (assignments: Assignment[]) => void;
  houseMood: HouseMood;
  setHouseMood: (mood: HouseMood) => void;
  updateAssignment: (updated: Assignment) => void;
}

const HouseContext = createContext<HouseContextType | undefined>(undefined);

export function HouseProvider({ children }: { children: React.ReactNode }) {
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [houseMood, setHouseMood] = useState<HouseMood>("busy");

  const updateAssignment = (updated: Assignment) => {
    setAssignments((prev) =>
      prev.map((a) =>
        a.week === updated.week &&
        a.choreId === updated.choreId &&
        a.assignedTo === updated.assignedTo &&
        a.day === updated.day
          ? updated
          : a
      )
    );
  };

  return (
    <HouseContext.Provider
      value={{ assignments, setAssignments, houseMood, setHouseMood, updateAssignment }}
    >
      {children}
    </HouseContext.Provider>
  );
}

export function useHouse() {
  const context = useContext(HouseContext);
  if (!context) {
    throw new Error("useHouse must be used within HouseProvider");
  }
  return context;
}
