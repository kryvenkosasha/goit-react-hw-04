import axios from "axios";

const ACCESS_KEY = "m1_aCrol2RAfZegER2hGtnnENwyk2fMJV8g0UuvwyNs";
const instance = axios.create({
  baseURL: "https://api.unsplash.com",
});



export const requestPicturesQuery = async (query, page) => {
  const { data } = await instance.get(
    `/search/photos/?client_id=${ACCESS_KEY}&query=${query}&page=${page}`
  );
  return data;
};
