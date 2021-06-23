import axios from "axios";

import { newsActions } from "./news-slice";

const URL =
  "http://api.mediastack.com/v1/news?access_key=e67bc489865269edd5ed843d828e810e&sources=en&";

export const getPoliticalNews = () => {
  return async (dispatch) => {
    const fetchNews = async () => {
      const res = await axios.get(`${URL}keywords=politics`);
      return res.data.data;
    };
    try {
      const resData = await fetchNews();
      console.log(resData);
      console.log("now it will render");
      dispatch(newsActions.politicalNews(resData));
    } catch (err) {
      console.log("did'nt work");
      console.log(err.message);
    }
  };
};

export const getTechNews = () => {
  return async (dispatch) => {
    const fetchNews = async () => {
      const res = await axios.get(`${URL}keywords=technology`);
      return res.data.data;
    };
    try {
      const resData = await fetchNews();
      console.log(resData);
      console.log("now it will render");
      dispatch(newsActions.technologyNews(resData));
    } catch (err) {
      console.log("did'nt work");
      console.log(err.message);
    }
  };
};

export const getSportsNews = () => {
  return async (dispatch) => {
    const fetchNews = async () => {
      const res = await axios.get(`${URL}keywords=sports`);
      return res.data.data;
    };
    try {
      const resData = await fetchNews();
      dispatch(newsActions.sportsNews(resData));
    } catch (err) {
      console.log("did'nt work");
      console.log(err.message);
    }
  };
};

export const getHealthNews = () => {
  return async (dispatch) => {
    const fetchNews = async () => {
      const res = await axios.get(`${URL}keywords=health`);
      return res.data.data;
    };
    try {
      const resData = await fetchNews();
      dispatch(newsActions.healthNews(resData));
    } catch (err) {
      console.log("did'nt work");
      console.log(err.message);
    }
  };
};

export const getInternationalNews = () => {
  return async (dispatch) => {
    const fetchNews = async () => {
      const res = await axios.get(`${URL}keywords=international`);
      return res.data.data;
    };
    try {
      const resData = await fetchNews();
      dispatch(newsActions.internationalNews(resData));
    } catch (err) {
      console.log("did'nt work");
      console.log(err.message);
    }
  };
};

export const getBusinessNews = () => {
  return async (dispatch) => {
    const fetchNews = async () => {
      const res = await axios.get(`${URL}keywords=business`);
      return res.data.data;
    };
    try {
      const resData = await fetchNews();
      console.log(resData);
      console.log("now it will render");
      dispatch(newsActions.businessNews(resData));
    } catch (err) {
      console.log("did'nt work");
      console.log(err.message);
    }
  };
};
