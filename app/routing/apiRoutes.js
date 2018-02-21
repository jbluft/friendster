
var friends = require("../data/friends");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

app.post('/api/friends', function(req,res){
  //grabs the new friend's scores to compare with friends in friendList array

   var newScores = req.body;
   console.log(req.body);

   var scoresArray = [];
   // find each friends score in the array
   friends.forEach(friendScore => {

    var scoreSum = 0;

    for (var i = 0; i < 10; i++) {
      scoreSum += Math.abs(newScores.scores[i] - friendScore.scores[i]);
       }
       scoresArray.push(scoreSum);
   });

   // find the closest match
   var findMin = Math.min.apply(null, scoresArray);

   for ( var j = 0; j < scoresArray.length; j++){
       if (scoresArray[j] === findMin){
           // matching happens here
           var bestScore = {
               name: friends[j].name,
               photo: friends[j].photo
           };
           // send back to the modal
           res.send(bestScore);
       }
   }

   friends.push(newScores);
   console.log(friends);
});
}