import "./somebox.css";
import { formatDate } from "../../../helpers/dateHelper";


export default function SomeBox({tenantDetails, maintenance}) {


  return (
    <div>
      <div className="somebox">
        <h1 className="maintenance-title"> Your Maintence Requests</h1>
        <ul>
          {maintenance.map((request, index) => {
            const dateString = request.date_started;
            const formattedDate = formatDate(dateString)

            return (
              <li key={index}>
                <div className="request-details">
                  <div>
                    <p className="description-repair">{request.description}</p>
                    <p className="date-started">{formattedDate}</p>
                  </div>
                    <p className="status-request">{request.status}</p>
                  </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
