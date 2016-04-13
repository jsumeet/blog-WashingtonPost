/* global Blog, moment, News */

Meteor.subscribe("news");
//Meteor.subscribe("blog.posts");

Template.home.helpers({
  latestNews: function () {
    return News.findOne({}, {
      sort: [ ['pubDate', 'desc'], ['title', 'asc'] ]
    });
  },

  latestPosts: function () {
    Meteor.subscribe("blog.posts", 3);
    return Blog.Post.find({}, {
      sort: [ ['pubDate', 'desc'], ['title', 'asc'] ],
      limit: 3
    });
  }
});

Template.news.helpers({
  news: function () {
    return News.find({}, {
      sort: [ ['pubDate', 'desc'], ['title', 'asc'] ]
    });
  }
});

Template.header.helpers({
  adminAllowed: function () {
    return Meteor.user() && Meteor.user().username.toUpperCase() == 'ADMIN';
  }
});

Template.registerHelper('formatDate', function (isoDate) {
  return moment(isoDate).format('D MMMM YYYY');
});
