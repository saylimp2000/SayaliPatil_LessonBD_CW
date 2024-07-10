let express = require("express");
let app = express();

app.get("/name",(req, res) => {
  let myName = (req.query.name).toUpperCase();
res.send(myName)
});

app.get("/fullname", (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;

  let fullName = firstName + " " + lastName
  res.send(fullName);
});

app.get("/date", (req, res) => {
  let month = req.query.month;
  let year = req.query.year;

  let formattedDate = month + ", " + year;
  res.send(formattedDate);
  });

app.get("/greet", (req, res) => {
  let name = req.query.name;
  let greetingMessage = "Namaste, " + name + "!";
  res.send(greetingMessage);
});

app.get("/address", (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let formattedAddress = street + ", " + city + ", " + state;
  res.send(formattedAddress);
});

app.get("/email",(req, res) => {
  let username = req.query.username;
  let domain = req.query.domain;
  let email = username + "@" + domain;
  res.send(email);
});

// BD1.3 — CW
app.get("/check-number", (req, res) => {
  let number = parseFloat(req.query.number);
let result = ""
  if(number >= 0) {
    result = "Positive Number"
  } else {
    result = "Negative Number"
  }
 res.send(result);
});

app.get("/check-even-odd", (req, res) => {
  let number = parseFloat(req.query.number);
  let result = "";
  if(number % 2 === 0){
    result ="Number is even"
  } else {
    result = "Number is odd"
  }
  res.send(result);
});

app.get("checkLogin", (req, res) => {
  let isLoggedIn = req.query.isLoggedIn;

  let result = "";
  if(isLoggedIn === "true"){
    result = "User is logged in"
  } else {
    result = "User is not logged in"
  }
  res.send(result);
});

app.get("/check - discount", (req, res) => {
  let age = parseFloat(req.query.age);
  let result = "";
  if(age >65){
    result = "User is eligible for a discount"
  } else {
    result = "User is not eligible for a discount"
  }
  res.send(result);
});

app.get("/check-number-type", (req, res) => {
  let number = parseFloat(req.query.number);
  let result = "";
  if(number > 0) {
    result = "Number is positive"
  } else if (number < 0) {
    result = "Number is negative"
  } else {
    result = "Number is zero"
  }
  res.send(result);
});


app.get("/check-temperature", (req, res) => {
let temperatue = parseFloat(req.query.temperature);
  let result = "";
  if(temperature < 50){
    result = "Temperature is cold"
  } else if (temperatue <= 25) {
    result = "Temperature is warm"
  } else {
    result = "Temperature is hot"
  }
  res.send(result);
});

app.get("/check-activity-level", (req, res) => {
  let steps = parseFloat(req.query.steps);
  let result = "";
  if(steps < 5000) {
    result = "Activity level is low"
  } else if (steps <=10000) {
    result = "Activity level is moderate"
  } else {
    result = "Activity level is high"
  }
  res.send(result);
});

app.get("check-engagement", (req, res) => {
  let likes = parseInt(req.query.likes);
  let result;
  if(likes < 100){
    result = "Engagement level is low";
  } else if(likes<=500){
    result = "Engagement level is moderate";
  } else{
    result = "Engagement level is high";
  }
  res.send(result);
});

//BD1.4 - functions

function getWelcomeMessage(){
  return "Welcome to our service!"
}
app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage())
})

function getGreetingMessage(username) {
  return "Hello, " + username + "!";
}

app.get("/greet", (req, res) => {
  let username = req.query.username;  res.send(getGreetingMessage(username));
});

function checkPassword(password)
 {  
  if (password.length>15) {
    return "Password is strong"
  } else {
    return "Password is weak"
  }
}

app.get("/check-password", (req, res) => {
  let password = req.query.password;  res.send(checkPassword(password))
});

function calculateSum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

app.get("/sum", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(calculateSum(num1, num2))
});

function checkSubscriptionStatus(username, subscribed) {
  if(subscibed==="true"){
    return username + "is subscribed";
  } else {
    return username + "is not subscribed";
  }
}

app.get("/subscription-status", (req, res) => {
  let username = req.query.username;
  let subscribed = req.query.subscribed;
  res.send(checkSubscriptionStatus(username, subscribed))
});

function calculatedDiscountedPrice(price, discount) {
  let finalprice = price - (price * discount / 100)
  return finalprice.toString(); 
}

app.get("/discounted-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(calculatedDiscountedPrice(price, discount))
});

function getGreeting(age, gender, name){
  return "Hello, " + name + "! You are " + age + " years old and you are a " + gender + ".";
}

app.get("/personalized-greeting", (req, res) => {
  let age= parseFloat(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getGreetingMessage(age, gender, name))
  
});

function calculatedFinalPrice(price, discount, tax) {
  let discountedPrice = price - (price * discount / 100);
  let finalPrice = discountedPrice + (discountedPrice * tax / 100);
  return finalPrice.toString()
}

app.get("/final-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(calculatedFinalPrice(price, discount, tax))
});

function calculateTotalExerciseTime(running, cycling, swimming) {
  return running + cycling + swimming;
}

app.get("/total-exercise-time", (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(calculateTotalExerciseTime(running, cycling, swimming).toString())
});

const PORT = 3000
app.listen(PORT, () => { 
  console.log("Server is running on http://localhost:", PORT)
});