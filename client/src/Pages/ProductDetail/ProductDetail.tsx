import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ItemInfo } from "../../interfaces";
import "./ProductDetail.scss";
import { priceFormatter } from "../../utils/priceFormatter";
import { BreadCrumbs } from "../../components/Breadcrumbs";
import { Loading } from "../../components/Loading";
import { CONDITION } from "../../utils/condition";

const ProductDetail = () => {
  const [item, setItem] = useState<ItemInfo>();
  const [categories, setCategories] = useState<string[]>([]) 
  const { id } = useParams();
  const [loading, setLoading] = useState(false)

  const getItem = async () => {
    if (id) {
      setLoading(true)
      try {
        const response = await axios.get(`http://localhost:3001/api/items/${id}`);
        const { data } = await response;
        setItem(data.item);
        setLoading(false)
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
  };

  useEffect(() => {
    const lsCategories = localStorage.getItem('categories');
    if (lsCategories) {
      setCategories(JSON.parse(lsCategories));
    }
    getItem();
  }, [id]);

  return loading ? (<Loading/>) : (
    <div className="container">
      <BreadCrumbs categories={categories}/>
      <div className="detailCard">
        <div className="detailCard__main">
          <div className="detailCard__image">
            <img src={item?.picture} alt="" />
          </div>
          <div className="detailCard__info">
            <p className="detailCard__info--condition">
              {CONDITION[item?.condition === 'new' ? 'new' : 'old']} - {item?.sold_quantity} vendidos
            </p>
            <p className="detailCard__info--title">{item?.title}</p>
            <p className="detailCard__info--price">
              {item && priceFormatter(item.price.amount.toString(), item?.price.currency)} 
            </p>
            <button className="detailCard__info--button">Comprar</button>
          </div>
        </div>
        <div className="detailCard__description">
          <p className="detailCard__description--title">
            Descripción del producto
          </p>
          <p className="detailCard__description--text">{item?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
