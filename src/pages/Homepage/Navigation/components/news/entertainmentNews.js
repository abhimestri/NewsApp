import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { getEntertainmentNews } from "../../../../../store/news-actions";
import RenderNews from "../../../../../Hooks/render-news";
const EntertainmentNews = () => {
  const entertainmentNews = useSelector((state) => state.entertainmentNewsList);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getEntertainmentNews());
  }, [dispatch]);

  return (
    <RenderNews
      newsList={entertainmentNews}
      heading={location.pathname === "/entertainment" && "Entertainment"}
    />
  );
};

export default EntertainmentNews;
