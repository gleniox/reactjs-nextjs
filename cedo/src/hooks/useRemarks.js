import { useEffect, useState } from "react";
import loadingStatus from "@/helpers/loadingStatus";
import useGetRequest from "./useGetRequest";

const useRemarks = (expenseId) => {
  const [remarks, setRemarks] = useState([]);
  const [get, loadingState] = useGetRequest(`/api/remarks/${expenseId}`);

  useEffect(() => {
    const fetchRemarks = async () => {
      const remarks = await get();
      setRemarks(remarks);
    };
    fetchRemarks();
  }, [get]);

  const postRemark = async (remark) => {
    await fetch(`/api/remarks/${remark.expenseId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(remark),
    });
  };

  const addRemark = (remark) => {
    postRemark(remark);
    setRemarks([...remarks, remark]);
  };

  return { remarks, loadingState, addRemark };
};

export default useRemarks;
