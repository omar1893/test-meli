import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BreadCrumbs } from "../../components/Breadcrumbs";
import "./ProductList.scss";
import { ListItem } from "../../components/ListItem";
import { NotFound } from "../../components/NotFound";
import { Loading } from "../../components/Loading";
import { ItemInfo, Author, ListFetch } from "../../interfaces";
import useFetch from "../../customHooks/useFetch";

const ProductList = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchString = searchParams.get("search") || "";

  const [categories, setCategories] = useState<string[]>([]);
  const [author, setAuthor] = useState<Author>({ name: "", lastname: "" });
  const [items, setItems] = useState<ItemInfo[]>([]);
  const { data, loading } = useFetch(true, searchString);

  useEffect(() => {
    if (!!data) {
      const listInfo = data as ListFetch;
      setItems(listInfo.items);
      setAuthor(listInfo.author)
      setCategories(listInfo.categories);
      localStorage.setItem("categories", JSON.stringify(listInfo.categories));
    }
  }, [data]);

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
            {items.map((item: ItemInfo, index: number) => (
              <div key={item.title}>
                <ListItem item={item} author={author} />
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

  return renderHandler();
};

export default ProductList;
