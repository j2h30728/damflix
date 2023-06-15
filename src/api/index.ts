import axios from "axios";

export const BASE_URL = "https://api.themoviedb.org/3/";

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwODE5Mjc4OGE4ZTVhZjE1NDU1MDE0OGM4MDIyZTM5NiIsInN1YiI6IjYzZTI5NDQ4NTI4YjJlMDA3ZDVlZmJkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5HaTsJt_yaL9sXGwgjXdaAfzoK7b6Z1OUlm9ejPK2yA",
    accept: "application/json",
  },
});

export default apiClient;
