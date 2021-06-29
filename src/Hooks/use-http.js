import axios from "axios";

const URL =
  "http://api.mediastack.com/v1/news?access_key=ccd1ab2778cb100bb4ce571a6887a748&sources=en&";

export const useHttp = async (keyword) => {
  const res = await axios.get(`${URL}keywords=${keyword}`);
  return res.data.data;
};
