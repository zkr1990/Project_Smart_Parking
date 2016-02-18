// these are the methods modifying database
Meteor.methods({
	park3:function(lotid){
		
		//console.log("inside method, lotid = "+lotid);
		var lot = ParkingLot3.findOne({_id:lotid});
		
		lot.cur_user = this.userId;
		lot.img_src = "invalid.png";
		ParkingLot3.update({_id:lotid}, lot);
		//console.log("modify this lot successfully");
		
		//console.log("inside method, right now user = "+this.userId);
		var puser;
		puser = Users.findOne({user_id:this.userId});
		if (!puser){// no editing users have been stored yet
		  puser = {
			user_id:this.userId,
			parkingLot:lotid, 
			carLevel:3,
			carLocation:lot.num,
			parked:1,
		  };
		} else {
			puser.parkingLot = lotid;
			puser.carLevel = 3;
			puser.carLocation = lot.num;
			puser.parked = 1;
		}
		// upsert- insert or update if filter matches
		Users.upsert({_id:puser._id}, puser);
		//console.log("upsert Users successfully!!!");
	},
	park2:function(lotid){
		
		//console.log("inside method, lotid = "+lotid);
		var lot = ParkingLot2.findOne({_id:lotid});
		
		lot.cur_user = this.userId;
		lot.img_src = "invalid.png";
		ParkingLot2.update({_id:lotid}, lot);
		//console.log("modify this lot successfully");
		
		//console.log("inside method, right now user = "+this.userId);
		var puser;
		puser = Users.findOne({user_id:this.userId});
		if (!puser){// no editing users have been stored yet
		  puser = {
			user_id:this.userId,
			parkingLot:lotid, 
			carLevel:2,
			carLocation:lot.num,
			parked:1,
		  };
		} else {
			puser.parkingLot = lotid;
			puser.carLevel = 2;
			puser.carLocation = lot.num;
			puser.parked = 1;
		}
		// upsert- insert or update if filter matches
		Users.upsert({_id:puser._id}, puser);
		//console.log("upsert Users successfully!!!");
	},
	park1:function(lotid){
		
		//console.log("inside method, lotid = "+lotid);
		var lot = ParkingLot1.findOne({_id:lotid});
		
		lot.cur_user = this.userId;
		lot.img_src = "invalid.png";
		ParkingLot1.update({_id:lotid}, lot);
		//console.log("modify this lot successfully");
		
		//console.log("inside method, right now user = "+this.userId);
		var puser;
		puser = Users.findOne({user_id:this.userId});
		if (!puser){// no editing users have been stored yet
		  puser = {
			user_id:this.userId,
			parkingLot:lotid, 
			carLevel:1,
			carLocation:lot.num,
			parked:1,
		  };
		} else {
			puser.parkingLot = lotid;
			puser.carLevel = 1;
			puser.carLocation = lot.num;
			puser.parked = 1;
		}
		// upsert- insert or update if filter matches
		Users.upsert({_id:puser._id}, puser);
		//console.log("upsert Users successfully!!!");
	},
	
	parkout:function(){
		//change the parking lot database
		if(ParkingLot3.findOne({cur_user:this.userId}) != null) {
			var lot = ParkingLot3.findOne({cur_user:this.userId});
			
			lot.cur_user = undefined;
			lot.img_src = "valid.png";
			ParkingLot3.update({cur_user:this.userId}, lot);
		} else if(ParkingLot2.findOne({cur_user:this.userId}) != null) {
			var lot = ParkingLot2.findOne({cur_user:this.userId});
			
			lot.cur_user = undefined;
			lot.img_src = "valid.png";
			ParkingLot2.update({cur_user:this.userId}, lot);
		} else if(ParkingLot1.findOne({cur_user:this.userId}) != null) {
			var lot = ParkingLot1.findOne({cur_user:this.userId});
			
			lot.cur_user = undefined;
			lot.img_src = "valid.png";
			ParkingLot1.update({cur_user:this.userId}, lot);
		}
		
		
		//now change the Users database
		var puser;
		puser = Users.findOne({user_id:this.userId});
		puser.parkingLot = undefined;
		puser.carLevel = undefined;
		puser.carLocation = undefined;
		puser.parked = 0;

		// upsert- insert or update if filter matches
		Users.update({_id:puser._id}, puser);
		//console.log("upsert Users successfully!!!");
	}
})