import axios from "axios";

const baseURL = "https://www.googleapis.com/books/v1/volumes?key=";
const APIKEY = "AIzaSyCI_7-Xc8rJknJPluN1EMykfCf8Lu_w8Ek";

function GoogleBooksAPI (query) {
  return axios.get(baseURL + APIKEY + "&q=" + query);
}


export default GoogleBooksAPI

