import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { getEconomicsNews } from "../../../../../store/news-actions";
import RenderNews from "../../../../../Hooks/render-news";
const EconomicsNews = () => {
  const economicsNews = useSelector((state) => state.economicsNewsList);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getEconomicsNews());
  }, [dispatch]);

  return (
    <RenderNews
      newsList={economicsNews}
      heading={location.pathname === "/economics" && "Economics"}
    />
  );
};

export default EconomicsNews;
