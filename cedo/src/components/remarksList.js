import { useState } from "react";
import loadingStatus from "../helpers/loadingStatus";
import useRemarks from "../hooks/useRemarks";
import LoadingIndicator from "./loadingIndicator";

const RemarksList = ({ remarks }) => {
  return (
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
  );
};

export default RemarksList;
