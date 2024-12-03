import { useContext } from "react";
import currencyFormatter from "../helpers/currencyFormatter";
import defaultPhoto from "../helpers/defaultPhoto";
import { navigationContext } from "./app";
import Remarks from "./remarksList";
import useRemarks from "../hooks/useRemarks";
import RemarksList from "./remarksList";
import AddRemarks from "./addRemarks";
import loadingStatus from "@/helpers/loadingStatus";
import LoadingIndicator from "./loadingIndicator";

const Expense = () => {
  const { param: expense } = useContext(navigationContext);
  const { remarks, loadingState, addRemark } = useRemarks(expense.id);

  if (loadingState !== loadingStatus.loaded)
    return <LoadingIndicator loadingState={loadingState} />;

  return (
    <div className="row">
      <div className="col-12">
        <div className="row">{expense.expenseType}</div>
        <div className="row">{expense.date}</div>
        <div className="row">{currencyFormatter.format(expense.price)}</div>
        <RemarksList remarks={remarks} />
        <AddRemarks expense={expense} addRemark={addRemark} />
      </div>
    </div>
  );
};

export default Expense;
