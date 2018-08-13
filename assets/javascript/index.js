



$(document).ready(function() 
{

 var config = {
    apiKey: "AIzaSyC60Si67Ng4Vpyw56AAvi3htje7MrHn7IA",
    authDomain: "carla-2a850.firebaseapp.com",
    databaseURL: "https://carla-2a850.firebaseio.com",
    projectId: "carla-2a850",
    storageBucket: "carla-2a850.appspot.com",
    messagingSenderId: "42080963998"
  };
  firebase.initializeApp(config);

  $("#submit").click(function(event)
  {
      event.preventDefault();

      var trainName;			// Name of the train
      var destination;	// Place the train is traveling to
      var firstTrainTime;	// Time the train arrives at the station
      var frequency;		// Frequency of the trains departures

var trains = [];

$(document).ready(function(){
      $('#submit').click(function(){
         var trainName = $('#trainName').val();

         var trainObj = {

            name : trainName,
            time: trainTime,
            destination: destination,
            firstraintime: firstTrainTime,
            frequency: frequency,
        }

        trains.push(trainObj);
        alert(trainName);
    });
});

// the following calculations are from the train-example in-class exercise, Im not sure how to connect this//

// Assumptions
var tFrequency = 3;

// Time is 3:30 AM
var firstTime = "03:30";

// First Time (pushed back 1 year to make sure it comes before current time)
var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

// Current Time
var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

// Difference between the times
var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

// Time apart (remainder)
var tRemainder = diffTime % tFrequency;
console.log(tRemainder);

// Minute Until Train
var tMinutesTillTrain = tFrequency - tRemainder;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

// Next Train
var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));





			





