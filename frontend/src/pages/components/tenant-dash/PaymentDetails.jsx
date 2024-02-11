import "./PaymentDetails.css";

export default function PaymentDetails() {
  
  return (
    <div className="payment-history-card">
      <p className="payment-history">Payment History</p>
      <div className="payment-history-list">
        <div className="phl-item1">
          <li>February 29th 2024</li>
          <span className="phl-status1">Upcoming</span>
        </div>
        <hr className="hr1" />
        <div className="phl-item2">
          <li>January 31st 2024</li>
          <span className="phl-status5">Overdue</span>
        </div>
        <hr className="hr2" />
        <div className="phl-item3">
          <li>December 31st 2023</li>
          <span className="phl-status3">Completed</span>
        </div>
        <hr className="hr2" />
      </div>
    </div>
  );
}
