import { useState } from "react";
import loadingStatus from "../helpers/loadingStatus";
import useRemarks from "../hooks/useRemarks";
import LoadingIndicator from "./loadingIndicator";

const Remarks = ({ expense }) => {
  const { remarks, loadingState, addRemark } = useRemarks(expense.id);

  const emptyRemark = {
    expenseId: expense.id,
    description: "",
  };

  const [newRemark, setNewRemark] = useState(emptyRemark);

  if (loadingState !== loadingStatus.loaded)
    return <LoadingIndicator loadingState={loadingState} />;

  const onRemarkSubmitClick = () => {
    addRemark(newRemark);
    setNewRemark(emptyRemark);
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <table className="table table-sm">
            <thead>
              <tr>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {remarks.map((r) => (
                <tr key={r.id}>
                  <td>{r.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
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
    </>
  );
};

export default Remarks;
