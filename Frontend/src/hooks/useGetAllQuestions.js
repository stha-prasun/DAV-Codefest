import { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { QUESTIONS_API_ENDPOINT } from "../utils/constants";
import { setQuestions } from "../redux/questionsSlice";

const useGetAllQuestions = () => {
  const dispatch = useDispatch();

  const fetchQuestions = useCallback(async () => {
    try {
      const response = await axios.get(`${QUESTIONS_API_ENDPOINT}/get/all`, {
        withCredentials: true,
      });

      if (response.data?.success) {
        dispatch(setQuestions(response.data.questions));
      }
    } catch (error) {
      console.error("Failed to fetch courses:", error);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  return fetchQuestions;
};

export default useGetAllQuestions;