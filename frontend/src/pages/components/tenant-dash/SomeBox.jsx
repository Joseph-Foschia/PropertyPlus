import "./somebox.css";

export default function SomeBox({tenantDetails}) {
  
  const landlordEmail = tenantDetails && tenantDetails.landlord_email;  
  const body = `Hi ${tenantDetails && tenantDetails.landlords_name}`;
  const subject = tenantDetails && tenantDetails.address;

  const handleEmailLandlord = () => {
    const encodedSubject = encodeURIComponent(subject);
    const encodedBody = encodeURIComponent(body);
    window.location.href = `mailto:${landlordEmail}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <div>
      <div className="somebox">
        <h1 className="email-title"> Click below to email your landlord</h1>
        <button className="some-text" onClick={handleEmailLandlord}>Email Landlord</button>
      </div>
    </div>
  );
}
