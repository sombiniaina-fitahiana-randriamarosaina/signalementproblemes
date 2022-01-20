import axios from "axios";

export default axios.create({
  baseURL: "https://signalement-problemes.herokuapp.com/api/",
});