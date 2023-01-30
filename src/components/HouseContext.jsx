import React, { useState, useEffect, createContext } from "react";
import { housesData } from "../data";
export const HouseContext = createContext();
const HouseContextProvider = ({ children }) => {
  const [houses, setHouses] = useState(housesData);
  const [country, setCountry] = useState("Location (any)");
  const [countries, setCountries] = useState([]);
  const [property, setProperty] = useState("Property type (any)");
  const [properties, setProperties] = useState([]);
  const [price, setPrice] = useState("Price range (any)");
  const [loading, setLoading] = useState(false);
  //   Return All Countries
  useEffect(() => {
    const allHouses = housesData.map((house) => {
      return house.country;
    });
    const uniqueCountries = ["Location (any)", ...new Set(allHouses)];
    setCountries(uniqueCountries);
  }, []);
  // Return All Properties
  useEffect(() => {
    const allProperties = housesData.map((house) => {
      return house.type;
    });
    const uniqueProperties = ["Location (any)", ...new Set(allProperties)];
    setProperties(uniqueProperties);
  }, []);
   
  const handleClick = () => {
    // set loading
    setLoading(true)
    // tao mot function kiem tra chuoi do co chua (any)
    const isDefault = (str) =>{
        return str.split(' ').includes('(any)');
    }
    // lay gia tri nho nhat va parse no thanh number;
    const minPrice = parseInt(price.split(' ')[0]);
    // lay gia tri lon nhat va parse no thanh number;

    const maxPrice = parseInt(price.split(' ')[2]);
    const newHouses = housesData.filter((house) =>{
        const housePrice = parseInt(house.price);
        if(house.country === country && house.type === property && minPrice <= housePrice  && housePrice <= maxPrice){
            return house
        }
        if(isDefault(country) && isDefault(property) && isDefault(price)){
          return house
        }
        // Neu country khong co mac dinh
        if(!isDefault(country) && isDefault(property) && isDefault(price)){
         return  house.country === country;
        }
        // Neu property khong co mac dinh
        if(!isDefault(property) && isDefault(country) && isDefault(price)){
          return  house.type === property;
         }
        //  Neu price khong co mac dinh
        if(!isDefault(price) && isDefault(country) && !isDefault(property)){
          if(housePrice >=minPrice && housePrice <= maxPrice){
            return house
          }
          return newHouses;
         }
    })
    setTimeout(() =>{
      return (newHouses.length < 1 ? setHouses([]) : setHouses(newHouses),
      setLoading(false))
    },1000)
  };
  return (
    <HouseContext.Provider
      value={{
        country,
        setCountry,
        countries,
        property,
        setProperty,
        properties,
        price,
        setPrice,
        houses,
        loading,
        handleClick,
        loading,
      }}
    >
      {children}
    </HouseContext.Provider>
  );
};

export default HouseContextProvider;
