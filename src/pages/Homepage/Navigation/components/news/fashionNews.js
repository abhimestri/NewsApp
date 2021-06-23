import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { getFashionNews } from "../../../../../store/news-actions";
import RenderNews from "../../../../../Hooks/render-news";
const FashionNews = () => {
  const fashionNews = useSelector((state) => state.fashionNewsList);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getFashionNews());
  }, [dispatch]);

  return (
    <RenderNews
      newsList={fashionNews}
      heading={location.pathname === "/fashion" && "Fashion"}
    />
  );
};

export default FashionNews;
