import { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "https://01ab-196-4-80-2.ngrok-free.app/";

const useFetch = (method, url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const options = {
    method,
    url: BASE_URL + url,
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.request(options);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      // alert("There was an error fetching data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return { data, loading, error, refetch };
};

export default useFetch;