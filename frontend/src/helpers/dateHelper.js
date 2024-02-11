export function formatDate(dateString) {
  if(!dateString) {
    return 'N/A'
  }
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}