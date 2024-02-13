import "./paymentHistory.css";

export default function PaymentHistory({property}) {
  console.log(property)
  let prop = property && property[0]


  return (
    <div className="payment-history-card">
      <p className="payment-history">Payment History</p>
      {prop && !prop.lease_rent ? (
        <div className="payment-history-list">
        <div className="phl-item1">
          <p>No active tenants</p>
        </div>
      </div>
      ) : prop && prop.id === 4 ? (
        <div className="payment-history-list">
        <div className="phl-item1">
        <li>March 31 2024</li>
          <span className="phl-status1">Upcoming</span>
        </div>
        <hr className="hr1" />
      </div>
    ) : (
      <div className="payment-history-list">
        <div className="phl-item1">
          <li>February 29th 2024</li>
          <span className="phl-status2">Completed</span>
        </div>
        <hr className="hr1" />
        <div className="phl-item2">
          <li>January 31st 2024</li>
          <span className="phl-status2">Completed</span>
        </div>
        <hr className="hr2" />
        <div className="phl-item3">
          <li>December 31st 2023</li>
          <span className="phl-status3">Completed</span>
        </div>
        <hr className="hr2" />
      </div>
       )}
    </div>
  );
}
