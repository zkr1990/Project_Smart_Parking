
Template.parkinglot3.helpers({
	lot: ParkingLot3.find({}, {sort:{num:1}})
});
Template.parkinglot2.helpers({
	lot: ParkingLot2.find({}, {sort:{num:1}})
});
Template.parkinglot1.helpers({
	lot: ParkingLot1.find({}, {sort:{num:1}})
});

Template.account.helpers({
	CarLevel: function(){
		var user = Users.findOne({user_id:Meteor.userId()});
		if(!user) {
			return -1;
		}
		//console.log(user);
		return user.carLevel;
	},
	CarLocation: function(){
		var user = Users.findOne({user_id:Meteor.userId()});
		if(!user) {
			return -1;
		}
		//console.log(user);
		return user.carLocation;
	},
	Status: function(){
		var user = Users.findOne({user_id:Meteor.userId()});
		if(!user) {
			return "not parked";
		}
		//console.log(user);
		if(user.parked == 1) {
			return "parked";
		} else {
			return "not parked";
		}
	},
});

Template.parkinglot3.events({
	'click .confirm-park': function () {
		var user = Users.findOne({user_id:Meteor.userId()});
		
		if (!Meteor.user()){// user not available
			alert("You need to login first!");
			return;
		} else if(user!= null && user.parked == 1) {
			alert("You have already parked a car");
			return;
		} else {
			var lotid = this._id;
			var lot = ParkingLot3.findOne({_id:lotid});
			if(lot.cur_user == undefined) {
				Meteor.call("park3", lotid);
			} else {
				alert("Please don't park locations of others");
			}
		}
	}
});
Template.parkinglot2.events({
	'click .confirm-park': function () {
		var user = Users.findOne({user_id:Meteor.userId()});
		
		if (!Meteor.user()){// user not available
			alert("You need to login first!");
			return;
		} else if(user!= null && user.parked == 1) {
			alert("You have already parked a car");
			return;
		} else {
			var lotid = this._id;
			var lot = ParkingLot2.findOne({_id:lotid});
			if(lot.cur_user == undefined) {
				Meteor.call("park2", lotid);
			} else {
				alert("Please don't park locations of others");
			}
		}
	}
});
Template.parkinglot1.events({
	'click .confirm-park': function () {
		var user = Users.findOne({user_id:Meteor.userId()});
		
		if (!Meteor.user()){// user not available
			alert("You need to login first!");
			return;
		} else if(user!= null && user.parked == 1) {
			alert("You have already parked a car");
			return;
		} else {
			var lotid = this._id;
			var lot = ParkingLot1.findOne({_id:lotid});
			if(lot.cur_user == undefined) {
				Meteor.call("park1", lotid);
			} else {
				alert("Please don't park locations of others");
			}
		}
	}
});

Template.account.events({
	'click .confirm-park-out': function () {
		if (!Meteor.user()){// user not available
			alert("You need to login first!");
			return;
		}
		var user = Users.findOne({user_id:Meteor.userId()});
		if(!user){
			alert("You have no parked car right now");
			return;
		}
		Meteor.call("parkout");
	}
});