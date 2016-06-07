var Jasmine = require('jasmine');
var jasmine = new Jasmine();
var report = require('./jasmine_reporter/customerizedReporter');

jasmine.loadConfigFile('spec/support/jasmine.json');

jasmine.onComplete(function(passed) {
  if (passed) {
    console.log('All specs have passed');
  } else {
    console.log('At least one spec has failed');
  }
});
jasmine.addReporter(report);

jasmine.execute();
