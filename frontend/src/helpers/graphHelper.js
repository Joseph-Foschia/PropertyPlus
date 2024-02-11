const graphDataSetter = (data, addressList) => {

  // Parse date strings to Date objects
const parsedMaintenanceData = data.map(entry => ({
  ...entry,
  date_started: new Date(entry.date_started),
  date_completed: entry.date_completed ? new Date(entry.date_completed) : null
}));

// Get current date
const currentDate = new Date();

// Calculate the date 6 months ago
const sixMonthsAgo = new Date();
sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

// Filter maintenance data for the past 6 months
const maintenanceDataPast6Months = parsedMaintenanceData.filter(entry =>
  entry.date_started >= sixMonthsAgo
);

// Group maintenance data by month
const maintenanceDataByMonth = {};
maintenanceDataPast6Months.forEach(entry => {
  const monthKey = `${entry.date_started.getFullYear()}-${entry.date_started.getMonth() + 1}`;
  if (!maintenanceDataByMonth[monthKey]) {
      maintenanceDataByMonth[monthKey] = [];
  }
  maintenanceDataByMonth[monthKey].push(entry);
});

// Create an array of objects for each of the past 6 months
const arrayOfObjectsPast6Months = [];
for (let i = 0; i < 6; i++) {
  const keyDate = new Date();
  keyDate.setMonth(currentDate.getMonth() - i);
  const key = `${keyDate.getFullYear()}-${keyDate.getMonth() + 1}`;
  arrayOfObjectsPast6Months.push({
      month: key,
      data: maintenanceDataByMonth[key] || []
  });
}

console.log("PLEASE WORK", arrayOfObjectsPast6Months);
  
}

export default graphDataSetter;