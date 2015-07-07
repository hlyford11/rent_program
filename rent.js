var thisMonth = "";

$( document ).ready(function() {
  $("#rent-button-submit").hide();
  $('#rent-button-month').click(function() {
    thisMonth = $("#the-month").val();  
    $("#rent-button-submit").show(300);
  });
});

// send rent charges to roommates on the 23rd`

  // SHARED DATA  
  
  var workedForPerson = function(data) {
    var resultWorked = name + " has been charged rent for " + thisMonth + ".";
    $('#results').append("<li class='list-group-item list-group-item-success'>" + resultWorked + "</li>");
    console.log(data);
  }
  /*
  var didNotWorkForPerson = function(name) {
    var result = name + " was not charged. Error occurred.";
    $('#results').append("<li>" + result + "</li>");
  }
  */

  $('#rent-button-submit').click(function(){        
    // UNCOMMENT NEXT LINE ONLY WHEN READY TO CHARGE RENT
    chargeEveryone();   
    //chargeEveryone().done(workedForPerson);
  });

  var chargeEveryone = function() {     
    var theResponse;  
    for (i = 0; i < roommatesData.length; i++) {
      roommatesData[i].apiData.note = "I am testing my app for hack reactor interview does this show the month? " + thisMonth;             
    }

    for (i = 0; i < roommatesData.length; i++) {      
      return $.ajax({
        type: "POST",
        url: 'https://api.venmo.com/v1/payments',
        dataType: "json",
        data: roommatesData[i].apiData,
        contentType: "application/x-www-form-urlencoded",  
        success: workedForPerson,      
        // success: workedForPerson(roommatesData[i].name),
        // success: workedForPerson
        crossDomain: true
        // failure: didNotWorkForPerson(roommatesData[i].name)
      })      
    }   
  }

