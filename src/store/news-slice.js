import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  politicalNewsList: null, //politics
  technologyNewsList: null, //technology
  sportsNewsList: null, //sports
  healthNewsList: null, //health
  internationalNewsList: null, //international
  businessNewsList: null,
};

const newsSlice = createSlice({
  name: "newsList",
  initialState,
  reducers: {
    politicalNews(state, action) {
      let reslist = action.payload;
      state.politicalNewsList = reslist.filter((el) => el.image !== null);
    },
    technologyNews(state, action) {
      let reslist = action.payload;
      state.technologyNewsList = reslist.filter((el) => el.image !== null);
    },
    sportsNews(state, action) {
      let reslist = action.payload;
      state.sportsNewsList = reslist.filter((el) => el.image !== null);
    },
    healthNews(state, action) {
      let reslist = action.payload;
      state.healthNewsList = reslist.filter((el) => el.image !== null);
    },
    internationalNews(state, action) {
      let reslist = action.payload;
      state.internationalNewsList = reslist.filter((el) => el.image !== null);
    },
    businessNews(state, action) {
      let reslist = action.payload;
      state.businessNewsList = reslist.filter((el) => el.image !== null);
    },
  },
});

export const newsActions = newsSlice.actions;
export default newsSlice;
