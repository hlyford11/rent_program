var audienceType = "private";
// this is the LIVE roommate data, only use this when you're ready to charge
/*
var roommatesData = [
  {name: "Brittany",
    apiData: {
      access_token: accessToken,
      phone:"4085960517",
      note: "",
      amount:-1054.00,
      audience: audienceType
    }
  },
  {name: "Chrysan",
    apiData: {
      access_token: accessToken,
      email:"chrysan.j.tung@gmail.com",
      note: "",
      amount:-1199.00,
      audience: audienceType
    }
  },
  {name: "Claire",
    apiData: {
      access_token: accessToken,
      phone:"8052799089",
      note: "",
      amount:-1094.00,
      audience: audienceType
    }
  },
  {name: "Cody",
    apiData: {
      access_token: accessToken,
      phone:"9145060053",
      note: "",
      amount:-924.00,
      audience: audienceType
    }
  }
  */
// this is test roommate data, it will send two requests - one paying $0.01 and one request $0.01 - to a very patient Brittany
var roommatesData = [
  {name: "Brittany",
    apiData: {
      access_token: accessToken,
      phone:"4085960517",
      note: "",
      amount:0.01,
      audience: audienceType
    }
  },
  {name: "Brittany2",
    apiData: {
      access_token: accessToken,
      phone:"4085960517",
      note: "",
      amount:-0.01,
      audience: audienceType
    }
  }
