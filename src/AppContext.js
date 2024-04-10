import React, { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isListView, setIsListView] = useState(false);

  return (
    <AppContext.Provider
      value={{ currentPage, setCurrentPage, isListView, setIsListView }}
    >
      {children}
    </AppContext.Provider>
  );
};
