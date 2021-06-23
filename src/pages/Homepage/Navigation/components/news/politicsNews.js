import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { getPoliticalNews } from "../../../../../store/news-actions";
import RenderNews from "../../../../../Hooks/render-news";
const PoliticalNews = () => {
  const politicalNews = useSelector((state) => state.politicalNewsList);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getPoliticalNews());
  }, [dispatch]);

  return (
    <RenderNews
      newsList={politicalNews}
      heading={location.pathname === "/politics" && "Politics"}
    />
  );
};

export default PoliticalNews;
