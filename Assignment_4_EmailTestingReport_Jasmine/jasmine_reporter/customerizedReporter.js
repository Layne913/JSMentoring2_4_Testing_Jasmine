var emailSender = require('./emailSender');
var finalResult = "";
var report = {
  jasmineStarted: function(suiteInfo) { //jasmine
    // console.log('jasmineStarted' + suiteInfo.totoalSpecsDefined);
  },
  suiteStarted: function(result) { //describe
     // console.log('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);
  },
  specStarted: function(result) { //it
    // console.log('Spec started: ' + result.description + ' whose full description is: ' + result.fullName);
  },
  specDone: function(result) {
    finalResult = finalResult + '<p> Spec: ' + result.description + ' was ' + result.status + '</p>';
    console.log('Spec: ' + result.description + ' was ' + result.status);
    for(var i = 0; i < result.failedExpectations.length; i++) {
      console.log('Failure: ' + result.failedExpectations[i].message);
      console.log(result.failedExpectations[i].stack);
    }
    console.log(result.passedExpectations.length);


  },
  suiteDone: function(result) {
    finalResult = finalResult + '<p> Suite: ' + result.description + ' was ' + result.status + '</p>';
    console.log('Suite: ' + result.description + ' was ' + result.status);
      for(var i = 0; i < result.failedExpectations.length; i++) {
        console.log('AfterAll ' + result.failedExpectations[i].message);
        console.log(result.failedExpectations[i].stack);
    }

  },
  jasmineDone: function(result) {
    finalResult = finalResult + '<p>Finished suite</p>';
    console.log('Finished suite');
    emailSender.sendEmail(finalResult);
  }
}

module.exports = report;