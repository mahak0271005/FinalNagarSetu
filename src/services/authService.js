import axios from "axios";

const BASE_URL = "http://localhost:8080/api/auth";

export const registerUser = (data) => {
  return axios.post(`${BASE_URL}/register`, data);
};

export const loginUser = (data) => {
  return axios.post(`${BASE_URL}/login`, data);
};
export const getToken = () => {
  return localStorage.getItem("token");
};
// export const sendOtp = (email) => {
//   return api.post("/auth/send-otp", { email });
// };

// export const verifyOtp = (data) => {
//   return api.post("/auth/verify-otp", data);
// };