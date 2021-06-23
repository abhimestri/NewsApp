import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { getSportsNews } from "../../../../../store/news-actions";
import RenderNews from "../../../../../Hooks/render-news";
const SportsNews = () => {
  const sportsNews = useSelector((state) => state.sportsNewsList);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getSportsNews());
  }, [dispatch]);

  return (
    <RenderNews
      newsList={sportsNews}
      heading={location.pathname === "/sports" && "Sports"}
    />
  );
};

export default SportsNews;
