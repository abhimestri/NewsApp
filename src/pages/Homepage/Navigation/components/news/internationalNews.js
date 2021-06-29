import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { getInternationalNews } from "../../../../../store/news-actions";
import RenderNews from "../../../../../Hooks/render-news";
const InternationalNews = () => {
  const internationalNews = useSelector((state) => state.internationalNewsList);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getInternationalNews());
  }, [dispatch]);

  return (
    <RenderNews
      newsList={internationalNews}
      heading={location.pathname === "/international" && "International"}
    />
  );
};

export default InternationalNews;
