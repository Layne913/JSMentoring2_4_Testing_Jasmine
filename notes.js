// Testing:
// under Test:
//spy: no return value functions check flag
//Stub global original=123 --> original=2 20 unit tests, original value doesn't change
//fake: return value, case by case
//Mock: logic third party lib
logger = {
  writelog: function() {
  //write to db
  }
  writelogwithnotification() {
    return true;
  }
}
Flag = false
writelog: function() {
  logger.writelog();
  flag = true;
}

// Jasmine:
// #1. Work with node
// #2.Report rationale

//stub: use created object to supplement the inputs of the function and to test the inner logic
//The function stub test always has a return value, and before running the test, based on the stub, there will be an expected result.
function sum(a, b) {
  return a.getValue()  + b.getValue();
}

let a = {
  getValue: () => 10;
}

//mock: use created object to supplement the inputs of the function and to test the behavior
//mock: compared with stub, mock focus on testing the behavior, such as if the function has been executed.
var executed = false;
function save(db) {
  db.save();
}

db = {
  save: function() {
    executed = true;
  }
}

//spy contains function in both mock and stub

//fake: fake something that the code runs upon, for example: database
function save(db, key, value) {
  db.save(key, value);
}

var fakeDb = {
  db: {},

  save: function(key, value) {
    db[key] = value
  }
}