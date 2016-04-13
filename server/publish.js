// Published data.

/* global News */

Meteor.publish("news", function () {
  return News.find();
});
