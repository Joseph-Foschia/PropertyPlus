import "./leaseDetails.css";

export default function LeaseDetails() {
  return (
    <div className="lease-details-box">
      <div className="t-lease-detail-box">
        <p className="t-detail-title">Lease Details</p>
        <p className="t-start-date">Start Date: Januray 5th 2023</p>
        <p className="t-end-date">End Date: Januray 5th 2025</p>
        <p className="t-rent">Rent: 1500$</p>
        <p className="t-ll-name">Landlord Name: John Doe</p>
        <p className="t-ll-number">Phone number: 123-456-7890</p>
      </div>
    </div>
  );
}
