import { useContext, createContext, useState, useEffect } from "react";

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

export const GlobalContextProvider = ({ children }) => {
  const fetchBeersData = () => {
    const INDEX_BEERS = import.meta.env.VITE_BEERS_API_INDEX;

    fetch(INDEX_BEERS)
      .then((res) => res.json())
      .then((data) => {
        setBeersData(data);
      });
  };

  const [beersData, setBeersData] = useState([]);

  useEffect(() => {
    fetchBeersData();
  }, []);

  return (
    <GlobalContext.Provider value={beersData}>
      {children}
    </GlobalContext.Provider>
  );
};
