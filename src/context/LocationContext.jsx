import { createContext, useContext, useState } from "react";

const LocationContext = createContext();

function LocationProvider({ children }) {
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LocationContext.Provider
      value={{ location, setLocation, isLoading, setIsLoading }}
    >
      {children}
    </LocationContext.Provider>
  );
}

function useLocation() {
  const context = useContext(LocationContext);
  if (context === "undefined")
    throw new Error("Location context was used outside of Location Provider");
  return context;
}

export { LocationProvider, useLocation };
