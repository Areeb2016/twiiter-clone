import axios from "axios";
import { BASE_URL } from "../config";

export async function getTweets() {
  try {
    const response = await axios.get(`${BASE_URL}/tweets`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function postTweet(body: unknown) {
  try {
    await axios.post(`${BASE_URL}/tweets`, body);
    return "OK";
  } catch (error) {
    console.error("Error:", error);
  }
}
