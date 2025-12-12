import axios from "axios";

export const adminLogin = async (email, password) => {
  try {
    const res = await axios.post("http://localhost:5000/admin/login", {
      email,
      password
    });
    return res.data;
  } catch (err) {
    console.log("Login Error:", err);
    return { error: true, message: err.response?.data?.message || "Error" };
  }
};