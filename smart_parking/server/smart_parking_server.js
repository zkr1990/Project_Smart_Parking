
Meteor.startup(function () {
    // code to run on server at startup
	Meteor.startup(function(){
		if (ParkingLot3.find().count() == 0){		
			for (var i=0;i<100;i++){
				ParkingLot3.insert(
					{
					num:i,
      				img_src:"valid.png",
      				img_alt:"image number "+i,
					cur_user: undefined
   					}
				);	
			}// end of for insert ParkingLot3
			// count the ParkingLot3!
			console.log("startup.js says: ParkingLot3 has"+ParkingLot3.find().count()+" spaces");
		}// end of if have no ParkingLot3
		
		if (ParkingLot2.find().count() == 0){		
			for (var i=0;i<100;i++){
				ParkingLot2.insert(
					{
					num:i,
      				img_src:"valid.png",
      				img_alt:"image number "+i,
					cur_user: undefined
   					}
				);	
			}// end of for insert ParkingLot2
			// count the ParkingLot2!
			console.log("startup.js says: ParkingLot2 has"+ParkingLot2.find().count()+" spaces");
		}// end of if have no ParkingLot2
		
		if (ParkingLot1.find().count() == 0){		
			for (var i=0;i<100;i++){
				ParkingLot1.insert(
					{
					num:i,
      				img_src:"valid.png",
      				img_alt:"image number "+i,
					cur_user: undefined
   					}
				);	
			}// end of for insert ParkingLot1
			// count the ParkingLot1!
			console.log("startup.js says: ParkingLot1 has"+ParkingLot1.find().count()+" spaces");
		}// end of if have no ParkingLot1
	});
});
