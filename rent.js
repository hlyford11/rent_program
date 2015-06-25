$( document ).ready(function() {

  var thisMonth = "";
  $('#rent-button').click(function() {
    thisMonth = $("#the-month").val();    
  });

// send rent charges to roommates on the 23rd`

  // SHARED DATA  
  var accessToken = "qJ2V8CtJLu5UL4DbfbrFaWW4pFmgN9Pc";
  var audienceType = "private";

  var roomatesData = [
    {
      "name":"Brittany",  
      "access_token": accessToken,
      "phone":"4085960517",
      "note":"Troll please pay your rent (and internet) amount of " + "$1054" + " for " + thisMonth + ". Did you know I used an API to do this? (smug emojji)",
      "amount":0.01, // -1040.00,
      "audience": audienceType
    },
    {
      "name":"Brittany2",  
      "access_token": accessToken,
      "phone":"4085960517",
      "note":"Troll please pay your rent (and internet) amount of " + "$1054" + " for " + thisMonth + ". Did you know I used an API to do this? (smug emojji)",
      "amount":-0.01, // -1040.00,
      "audience": audienceType
    }
    /*
    {
      "name":"Brittany",  
      "access_token": accessToken,
      "phone":"4085960517",
      "note":"Troll please pay your rent (and internet) amount of " + "$1054" + " for " + thisMonth + ". Did you know I used an API to do this? (smug emojji)",
      "amount":-1054.00, // -1040.00,
      "audience": audienceType
    },
    { 
      "name": "Claire",   
    	"access_token": accessToken,
     	"phone":"8052799089",
     	"note":"Claire please pay your rent (and internet) amount of " + "$1094" + " for " + thisMonth + ".",
     	"amount":-1094.00,  //-1080.00,
     	"audience": audienceType
    },
    {
      "name": "Cody",
      "access_token": accessToken,
      "phone":"9145060053",
      "note":"Cody please pay your rent (and internet) amount of " + "$924" + " for " + thisMonth,
      "amount":-924.00, //-910.00,
      "audience": audienceType
    },
    {
      "name": "Chrysan",
      "access_token": accessToken,
      "email":"chrysan.j.tung@gmail.com",
      "note":"Chrysan please pay your rent (and internet) amount of " + "$1199" + " for " + thisMonth,
      "amount":-1199.00,
      "audience": audienceType
    }
    */
  ]

  var workedForPerson = function(name) {
    console.log(name + " has been charged rent.")
  }
  var didNotWorkForPerson = function(name) {
    var result = name + " was not charged. Error occurred.";
    $('#results').append("<li>" + result + "</li>");
  }

  $('#rent-button').click(function(){    
    console.log(thisMonth);    
    // UNCOMMENT NEXT LINE ONLY WHEN READY TO CHARGE RENT
    chargeEveryone();   
  });

  var chargeEveryone = function() {
    console.log('testing');
   
  for (i = 0; i < roomatesData.length; i++) {
    $.ajax({
      type: "POST",
      url : 'https://api.venmo.com/v1/payments 11111',
      dataType : "json",
      data: i,
      success : workedForPerson(roomatesData[i].name),
      failure: didNotWorkForPerson(roomatesData[i].name)
    })             
  }
}
});
