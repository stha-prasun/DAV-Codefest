import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { MESSAGE_API_ENDPOINT } from "../utils/constants";
import { setMessage } from "../redux/messageSlice";

const useGetAllMessage = () => {
  const dispatch = useDispatch();

  const fetchMessage = useCallback(async () => {
    try {
      const response = await axios.get(`${MESSAGE_API_ENDPOINT}/get/all`, {
        withCredentials: true,
      });

      if (response.data?.success) {
        dispatch(setMessage(response.data.messages));
      }
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchMessage();
  }, [fetchMessage]);

  return fetchMessage;
};

export default useGetAllMessage;