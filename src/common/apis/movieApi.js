import axios from "axios";

export default  axios.create({
    baseUrl: "https://omdbapi.com"
})
