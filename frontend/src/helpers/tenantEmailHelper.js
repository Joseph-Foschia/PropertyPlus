export const handleEmail = (detail) => {
  const landlordEmail = detail && detail.email;
  const body = `Hi ${detail && detail.name}`;
  const subject = detail && detail.address;

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  window.location.href = `mailto:${landlordEmail}?subject=${encodedSubject}&body=${encodedBody}`;
};