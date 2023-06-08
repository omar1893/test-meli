import { useEffect, useState } from "react";
import axios from "axios";
import {
  ItemInfo,
  ListFetch,
  ListItemProps,
  UseFetchReturn,
} from "../interfaces";

const useFetch = (list: boolean, param: string) => {
  const [data, setData] = useState<ListFetch | ItemInfo>();
  const [loading, setLoading] = useState(false);

  const getItem = async () => {
    const url = list
      ? `http://localhost:3001/api/items?q=${param}`
      : `http://localhost:3001/api/items/${param}`;

    setLoading(true);
    try {
      const response = await axios.get(url);
      const { data } = response;

      setData(list ? data : data.item);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getItem();
  }, [param]);

  return { data, loading };
};

export default useFetch;
