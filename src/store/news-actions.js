import { newsActions } from "./news-slice";
import { useHttp } from "../Hooks/use-http";

export const getPoliticalNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("politics");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.politicalNews(resData));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const getTechNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("technology");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.technologyNews(resData));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const getSportsNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("sports");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.sportsNews(resData));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const getHealthNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("health");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.healthNews(resData));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const getInternationalNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("international");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.internationalNews(resData));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const getBusinessNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("business");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.businessNews(resData));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const getFashionNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("fashion");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.fashionNews(resData));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const getEntertainmentNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("entertainment");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.entertainmentNews(resData));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const getCurrentAffairsNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("affairs");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.currentAffairsNews(resData));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const getEconomicsNews = () => {
  return async (dispatch) => {
    const fetchNews = await useHttp("economics");
    try {
      const resData = await fetchNews;
      return dispatch(newsActions.economicsNews(resData));
    } catch (err) {
      console.log(err.message);
    }
  };
};

export const getSearchedNews = (e) => {
  return async (dispatch) => {
    const fetchNews = await useHttp(e);
    try {
      const resData = await fetchNews;
      console.log("-----------");
      console.log(e);
      console.log("-----------");
      return dispatch(newsActions.searchedNews(e === "" ? null : resData));
    } catch (err) {
      console.log(err.message);
    }
  };
};
