ParkingLot3 = new Mongo.Collection("parking3");
ParkingLot2 = new Mongo.Collection("parking2");
ParkingLot1 = new Mongo.Collection("parking1");

Users = new Mongo.Collection("user");

// set up security on ParkingLot3 collection
ParkingLot3.allow({

	update:function(userId, doc){
		console.log("testing security on ParkingLot3 update");
		if (Meteor.user()){// they are logged in
			return true;
		} else {// user not logged in - do not let them update  (rate) the image. 
			return false;
		}
	}
})

// set up security on ParkingLot2 collection
ParkingLot2.allow({

	update:function(userId, doc){
		console.log("testing security on ParkingLot2 update");
		if (Meteor.user()){// they are logged in
			return true;
		} else {// user not logged in - do not let them update  (rate) the image. 
			return false;
		}
	}
})

// set up security on ParkingLot1 collection
ParkingLot1.allow({

	update:function(userId, doc){
		console.log("testing security on ParkingLot1 update");
		if (Meteor.user()){// they are logged in
			return true;
		} else {// user not logged in - do not let them update  (rate) the image. 
			return false;
		}
	}
})
Users.allow({

	update:function(userId, doc){
		console.log("testing security on Users update");
		if (Meteor.user()){// they are logged in
			return true;
		} else {// user not logged in - do not let them update  (rate) the image. 
			return false;
		}
	}
})