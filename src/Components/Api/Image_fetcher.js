import { useEffect, useState } from "react";
import axios from "axios";

const UseFetch = (query = "") => {
  const [isLoading, setIsLoading] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [apiError, setApiError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      if (query) {
        try {
          setIsLoading(true);
          const response = await axios.get(
            `https://api.unsplash.com/search/photos?query=${query}&client_id=_srqqrz9KbiL1rMUjqy3lwDoZpxZ3BEde2JY58voJQ0&per_page=20`
          );
          const data = await response.data;
          setApiData(data.results);
          setApiError(undefined);
          setIsLoading(false);
        } catch (error) {
          setApiError(error);
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [query]);

  return { isLoading, apiData, apiError };
};

export default UseFetch;
