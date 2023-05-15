import React from "react";
import { BreadcrumbsProps } from "../../interfaces";
import "./BreadCrumbs.scss";

const BreadCrumbs = ({ categories }: BreadcrumbsProps) => {
  return (
    <div className={`breadcrumbs ${!categories.length && 'empty'}`}>
        {categories.map((category, index) => (
            <span className="breadcrumbs__item" key={category}>{category} {index < categories.length - 1 && (<span className="breadcrumbs__item--separator">{">"}</span>)}</span>
        ))}
    </div>
  );
};

export default BreadCrumbs;
