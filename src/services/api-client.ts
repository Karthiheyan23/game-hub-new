import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2833521acd624c21aedf693ed698852d",
  },
});
