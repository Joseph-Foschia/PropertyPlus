// emailHelpers.js

export const handleEmailLandlord = (tenantDetails) => {
  const landlordEmail = tenantDetails && tenantDetails.landlord_email;
  const body = `Hi ${tenantDetails && tenantDetails.landlords_name}`;
  const subject = tenantDetails && tenantDetails.address;

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  window.location.href = `mailto:${landlordEmail}?subject=${encodedSubject}&body=${encodedBody}`;
};
