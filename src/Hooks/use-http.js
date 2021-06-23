import axios from "axios";

const URL =
  "http://api.mediastack.com/v1/news?access_key=fd1b01b41bccb4dcca8ac572df0e45ba&sources=en&";

export const useHttp = async (keyword) => {
  const res = await axios.get(`${URL}keywords=${keyword}`);
  return res.data.data;
};
