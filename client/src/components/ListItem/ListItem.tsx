import React from "react";
import "./ListItem.scss";
import FreeShipping from "../../assets/ic_shipping.png";
import { useNavigate } from "react-router-dom";
import { priceFormatter } from "../../utils/priceFormatter";
import { ListItemProps } from "../../interfaces";

const ListItem = ({ item }: ListItemProps) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/items/${item.id}`);
  };

  return (
    <div className="listItem" onClick={handleItemClick}>
      <img className="listItem__image" src={item.picture} alt="" />
      <div className="listItem__info-container">
        <div className="listItem__info">
          <p className="listItem__info--price">
            {priceFormatter(item.price.amount, item.price.currency)}
            {item.free_shipping && (
              <img className="listItem__info--icon" src={FreeShipping} alt="Free Shipping" />
            )}
          </p>
          <p className="listItem__info--title">{item.title}</p>
        </div>
      </div>
      <div className="listItem__location">
        <p className="listItem__location--city">{item.address}</p>
      </div>
    </div>
  );
};

export default ListItem;
