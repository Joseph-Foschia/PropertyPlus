import "./somebox.css";

export default function SomeBox({tenantDetails, maintenance}) {
  const dateString = maintenance?.date_started
  const date = new Date(dateString)
  const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  return (
    <div>
      <div className="somebox">
        <h1 className="maintenance-title"> Your Maintence Requests</h1>
        <ul>
          {maintenance.map((request, index) => {
            const dateString = request.date_started;
            const date = new Date(dateString);
            const formattedDate = date.toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            });

            return (
              <li key={index}>
                <div className="request-details">
                  <div>
                    <p className="description">{request.description}</p>
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
