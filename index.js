// Your code here
function createEmployeeRecord([firstName, familyName, title, payPerHour]){
  return {
    "firstName": firstName, 
    "familyName": familyName,
    "title": title,
    "payPerHour": payPerHour,
    "timeInEvents": [],
    "timeOutEvents": []
  }
}

function createEmployeeRecords(info){
  return info.map(createEmployeeRecord)
}

function createTimeInEvent(record, date){
  let timeInEvent = {
    type: "TimeIn",
    date: date.split(" ")[0],
    hour: parseInt(date.split(" ")[1])
  }
  record.timeInEvents.push(timeInEvent)
  return record
}