import axios from "axios";

const BASE_URL = "https://01ab-196-4-80-2.ngrok-free.app";

const headers = {
  "Content-Type": "application/json",
};

export const postToAPI = async (url, Data) => {
  try {
    const { data } = await axios.post(`${BASE_URL}/${url}`, Data, headers);
    return data;
  } catch (error) {
    console.log(error);
  }
};
