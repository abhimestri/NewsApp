import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { getTechNews } from "../../../../store/news-actions";
import RenderNews from "../../../../Hooks/render-news";
const TechnologyNews = () => {
  const technologyNews = useSelector((state) => state.technologyNewsList);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getTechNews());
  }, [dispatch]);

  return (
    <RenderNews
      newsList={technologyNews}
      heading={location.pathname === "/technology" && "Technology"}
    />
  );
};

export default TechnologyNews;
