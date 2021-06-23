import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  politicalNewsList: null, //politics
  technologyNewsList: null, //technology
  sportsNewsList: null, //sports
  healthNewsList: null, //health
  internationalNewsList: null, //international
  businessNewsList: null,
  fashionNewsList: null,
  entertainmentNewsList: null,
  currentAffairsNewsList: null,
  economicsNewsList: null,
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
    fashionNews(state, action) {
      let reslist = action.payload;
      state.fashionNewsList = reslist.filter((el) => el.image !== null);
    },
    entertainmentNews(state, action) {
      let reslist = action.payload;
      state.entertainmentNewsList = reslist.filter((el) => el.image !== null);
    },
    currentAffairsNews(state, action) {
      let reslist = action.payload;
      state.currentAffairsNewsList = reslist.filter((el) => el.image !== null);
    },
    economicsNews(state, action) {
      let reslist = action.payload;
      state.economicsNewsList = reslist.filter((el) => el.image !== null);
    },
  },
});

export const newsActions = newsSlice.actions;
export default newsSlice;
