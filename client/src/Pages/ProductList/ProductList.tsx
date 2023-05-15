import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BreadCrumbs } from "../../components/Breadcrumbs";
import data from "../../test.json";
import "./ProductList.scss";
import { ListItem } from "../../components/ListItem";
import axios from "axios";
import { NotFound } from "../../components/NotFound";
import { Loading } from "../../components/Loading";

const ProductList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchString = searchParams.get("search");

  const [categories, setCategories] = useState(data.categories);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const getItems = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:3001/api/items?q=${searchString}`
      );
      const { data } = await response;
      setItems(data.items);
      setCategories(data.categories);
      localStorage.setItem("categories", JSON.stringify(data.categories));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const renderHandler = () => {
    if (!items.length && loading) {
      return <Loading />;
    } else if (!items.length && !loading) {
      return <NotFound />;
    } else {
      return (
        <div className="list">
          {categories && <BreadCrumbs categories={categories} />}
          <div className="list__container">
            {items.map((item: any, index: number) => (
              <div key={item.title}>
                <ListItem item={item} />
                {index !== items.length - 1 && (
                  <hr className="list__container--divider" />
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }
  };

  useEffect(() => {
    getItems();
  }, [, location]);

  return renderHandler();
};

export default ProductList;
