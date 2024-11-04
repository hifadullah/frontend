import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/config';

const useFetch = (endpoint, queryParams) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const apiUrl = process.env.REACT_APP_API_URL;
        fetch(`${apiUrl}/endpoint`);, {
          params: queryParams,
        });
        setData(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, queryParams]);

  return {
    data,
    error,
    loading,
  };
};

export default useFetch;