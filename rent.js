// send rent charges to roommates on the 23rd

var thisMonth = "";

$( document ).ready(function() {
  $("#rent-button-submit").hide();
  $('#rent-button-month').click(function() {
    thisMonth = $("#the-month").val();  
    $("#rent-button-submit").show(300);
  });
  $('#rent-button-submit').click(function(){        
    // UNCOMMENT NEXT LINE ONLY WHEN READY TO CHARGE RENT
    chargeEveryone();   
    });

});

  
  var workedForPerson = function(data) {        
    var profPicUrl = data.data.payment["target"].user.profile_picture_url;
    var resultWorked = data.data.payment["target"].user.first_name + " has been charged " + data.data.payment.amount + " rent for " + thisMonth + ".";
    $('#results').append("<li class='list-group-item list-group-item-success'>" + resultWorked + "<img id='prof-image'  src='" + profPicUrl + "'>" + "</li>");    
  }
  
  var didNotWorkForPerson = function(name) {
    var result = name + " was not charged. Error occurred.";
    $('#results').append("<li>" + result + "</li>");
  }  

  var returnBalance = function(user, apiKey) {
    
    $.get( "https://api.venmo.com/v1/" + user, { access_token: apiKey} )
      .done(function(data) {
        $('#results-balance').append("<li class='list-group-item list-group-item-info'>Your Venmo balance is : $" + data.data.balance + "</li>");
      });

  }

  var chargeEveryone = function() {     
      
    for (i = 0; i < roommatesData.length; i++) {
      roommatesData[i].apiData.note = "Testing Venmo API to take rent (ignore this) " + thisMonth;             
    }

    for (i = 0; i < roommatesData.length; i++) {      
      $.ajax({
        type: "POST",
        url: 'https://api.venmo.com/v1/payments',
        dataType: "json",
        data: roommatesData[i].apiData,
        contentType: "application/x-www-form-urlencoded",  
        success: workedForPerson,
        failure: didNotWorkForPerson,                  
        crossDomain: true        
      })
    }
    returnBalance("me", accessToken);             
  }

