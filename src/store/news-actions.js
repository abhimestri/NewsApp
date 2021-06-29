import { newsActions } from "./news-slice";
import { useHttp } from "../Hooks/use-http";

export const getPoliticalNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("politics");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.politicalNews(resData));
    } catch (err) {}
  };
};

export const getTechNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("technology");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.technologyNews(resData));
    } catch (err) {}
  };
};

export const getSportsNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("sports");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.sportsNews(resData));
    } catch (err) {}
  };
};

export const getHealthNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("health");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.healthNews(resData));
    } catch (err) {}
  };
};

export const getInternationalNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("international");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.internationalNews(resData));
    } catch (err) {}
  };
};

export const getBusinessNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("business");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.businessNews(resData));
    } catch (err) {}
  };
};

export const getFashionNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("fashion");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.fashionNews(resData));
    } catch (err) {}
  };
};

export const getEntertainmentNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("entertainment");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.entertainmentNews(resData));
    } catch (err) {}
  };
};

export const getCurrentAffairsNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("affairs");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.currentAffairsNews(resData));
    } catch (err) {}
  };
};

export const getEconomicsNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("economics");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.economicsNews(resData));
    } catch (err) {}
  };
};

export const getSearchedNews = (e) => {
  return async (dispatch) => {
    const fetchNews = await useHttp(e);
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.searchedNews(e === "" ? null : resData));
    } catch (err) {}
  };
};
