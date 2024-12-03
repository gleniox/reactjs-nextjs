import { useState } from "react";
import loadingStatus from "@/helpers/loadingStatus";
import LoadingIndicator from "./loadingIndicator";

const AddRemarks = ({ expense, addRemark }) => {
  const emptyRemark = {
    expenseId: expense.id,
    description: "",
  };

  const [newRemark, setNewRemark] = useState(emptyRemark);

  const onRemarkSubmitClick = () => {
    addRemark(newRemark);
    setNewRemark(emptyRemark);
  };

  return (
    <div className="row">
      <div className="col-5">
        <input
          id="description"
          className="h-100"
          type="text"
          value={newRemark.description}
          onChange={(e) =>
            setNewRemark({ ...newRemark, description: e.target.value })
          }
          placeholder="Description"
        ></input>
      </div>
      <div className="col-2">
        <button className="btn btn-primary" onClick={onRemarkSubmitClick}>
          Add
        </button>
      </div>
    </div>
  );
};

export default AddRemarks;
