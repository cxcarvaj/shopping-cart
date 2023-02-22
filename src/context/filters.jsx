import { createContext, useState } from "react";

// * 1. Create the context to consume later on
export const FiltersContext = createContext();

// * 2. Create the provider
export const FiltersProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "all",
    minPrice: 0,
  });

  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};
