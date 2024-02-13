import TenantNav from "./components/tenant-dash/TenantNav";
import "./stripe/payment.css"
function PaymentSuccess({}) {
  return (
    <div >
      <TenantNav></TenantNav>
      <h1 className="pay"> Payment</h1>
        <div className>
          <div className="pay-card">
            <h1 className="payment-approved">Thank you for your payment!</h1>
            <div class="dates">
              <p> January 31: <span className="paid-text">&nbsp;&nbsp;PAID</span></p>
              <p> February 29: <span className="paid-text">&nbsp;&nbsp;PAID</span></p>
            </div>
          </div>
        </div>
    </div>
  );
}

export default PaymentSuccess;
