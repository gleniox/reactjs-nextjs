import { useEffect, useState } from "react";
import loadingStatus from "@/helpers/loadingStatus";
import useGetRequest from "./useGetRequest";

const useExpenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [get, loadingState] = useGetRequest("/api/expenses");

  useEffect(() => {
    const fetchExpenses = async () => {
        const expenses = await get();
        setExpenses(expenses);
    };
    fetchExpenses();
  }, [get]);

  return [expenses, setExpenses, loadingState];
};

export default useExpenses;
