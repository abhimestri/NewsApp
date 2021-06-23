import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { getBusinessNews } from "../../../../store/news-actions";
import RenderNews from "../../../../Hooks/render-news";
const BusinessNews = () => {
  const businessNews = useSelector((state) => state.businessNewsList);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBusinessNews());
  }, [dispatch]);

  return (
    <RenderNews
      newsList={businessNews}
      heading={location.pathname === "/business" && "Business"}
    />
  );
};

export default BusinessNews;
