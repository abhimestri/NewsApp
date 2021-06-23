import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { getCurrentAffairsNews } from "../../../../../store/news-actions";
import RenderNews from "../../../../../Hooks/render-news";

const CurrentAffairsNews = () => {
  const currentAffairsNews = useSelector(
    (state) => state.currentAffairsNewsList
  );
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    dispatch(getCurrentAffairsNews());
  }, [dispatch]);

  return (
    <RenderNews
      newsList={currentAffairsNews}
      heading={location.pathname === "/current-affairs" && "Current Affairs"}
    />
  );
};

export default CurrentAffairsNews;
