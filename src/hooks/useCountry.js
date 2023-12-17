import { useEffect, useState } from "react";

const useCountry = (name) => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const getCountry = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        const data = await response.json();
        setCountry(data);
      } catch (error) {
        console.log(error);
        setError("The country is not found");
      } finally {
        setLoading(false);
      }
    };
    getCountry();
  }, [name]);

  return {
    country,
    loading,
    error,
  };
};

export default useCountry;
