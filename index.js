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