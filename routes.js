/* global Router */

Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function () {
  this.render('home');
});

Router.route('/news', function () {
  this.render('news');
});

Router.route('/blog', function () {
  this.render('blogPage');
});

Router.route('/projects', function () {
  this.render('projects');
});

Router.route('/about', function () {
  this.render('about');
});

Router.route('/admin/blog', function () {
  this.render('admin');
});
