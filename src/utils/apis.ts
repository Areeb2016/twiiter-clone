/* <--- all apis must be called and exported from here ---> */

import axios from "axios";
import { BASE_URL } from "../config";
import { TweetBody } from "./interfaces";

/* <--- get all tweets api ---> */
export async function getTweets() {
  try {
    const response = await axios.get(`${BASE_URL}/tweets`);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
}

/* <--- create a tweet api ---> */
export async function postTweet(body: TweetBody) {
  try {
    await axios.post(`${BASE_URL}/tweets`, body);
    return "OK";
  } catch (error) {
    console.error("Error:", error);
  }
}

/* <--- edit a tweet api ---> */
export async function updateTweet(id: string, body: TweetBody) {
  try {
    await axios.patch(`${BASE_URL}/tweets/${id}`, body);
    return "OK";
  } catch (error) {
    console.error("Error:", error);
  }
}

/* <--- delete a tweet api ---> */
export async function deleteTweet(id: string) {
  try {
    await axios.delete(`${BASE_URL}/tweets/${id}`);
    return "OK";
  } catch (error) {
    console.error("Error:", error);
  }
}
