//class3-week4, some hints about the infinite scroll code

Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function () {
  this.render('navbar', {
    to:"navbar"
  });
  this.render('Welcome', {
    to:"main"
  });
  
});
//level3
Router.route('/level3', function () {
  this.render('navbar', {
    to:"navbar"
  });
  this.render('parkinglot3', {
    to:"main"
  });
  
});
//level2
Router.route('/level2', function () {
  this.render('navbar', {
    to:"navbar"
  });
  this.render('parkinglot2', {
    to:"main"
  });
  
});
//level1
Router.route('/level1', function () {
  this.render('navbar', {
    to:"navbar"
  });
  this.render('parkinglot1', {
    to:"main"
  });
  
});
//myAccount
Router.route('/myAccount', function () {
  this.render('navbar', {
    to:"navbar"
  });
  this.render('account', {
    to:"main"
  });
});
