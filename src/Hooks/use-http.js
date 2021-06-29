import axios from "axios";

const URL =
  "http://api.mediastack.com/v1/news?access_key=42c94ef054c7e04b342b493906b4f&sources=en&";

export const useHttp = async (keyword) => {
  const res = await axios.get(`${URL}keywords=${keyword}`);
  return res.data.data;
};
