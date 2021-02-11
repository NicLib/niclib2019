let testDate = new Date();
let endTestDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1))

while (testDate < endTestDate) {
  let todaysHours = displayHours(testDate);

  console.log(todaysHours);
    
  let newTestDate = testDate.setDate(testDate.getDate() + 1);
  testDate = new Date(newTestDate);
}