import axios from "axios";
import { BASE_URL } from "../config";

interface TweetBody {
  author: string;
  content: string;
}

export async function getTweets() {
  try {
    const response = await axios.get(`${BASE_URL}/tweets`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function postTweet(body: TweetBody) {
  try {
    await axios.post(`${BASE_URL}/tweets`, body);
    return "OK";
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function updateTweet(id: string, body: TweetBody) {
  try {
    await axios.patch(`${BASE_URL}/tweets/${id}`, body);
    return "OK";
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function deleteTweet(id: string) {
  try {
    await axios.delete(`${BASE_URL}/tweets/${id}`);
    return "OK";
  } catch (error) {
    console.error("Error:", error);
  }
}
