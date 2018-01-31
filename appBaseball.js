var app = angular.module('myApp', []);

  app.controller('myCtrl', function($scope, $http) {

  var year = "2014"
  var month = "03"
  var day = "06"
  var myDate = ""

  $scope.search = function () {

    var datePicker = document.getElementById("date").value;
    console.log("mydate:",datePicker)
    document.getElementById("dateSelected").innerHTML = "Date of games: " + datePicker;

    myDate = datePicker
    year = myDate.substring(0, 4)
    month = myDate.substring(5, 7)
    day = myDate.substring(8, 10)
    console.log("DATE",year,month,day)

    $http.get(`https://gd2.mlb.com/components/game/mlb/year_${year}/month_${month}/day_${day}/master_scoreboard.json`)
      .then(function(response) {

          $scope.dataScoreGame = response.data.data.games.game
          console.log("DATA JSON", $scope.dataScoreGame)

          if($scope.dataScoreGame === undefined){
            alert("No games today! Data not found, please search again")
          }
    })
    .catch(function(error){
      console.log("No HAY JSON",error)
      alert("Please select other date!")
    })
  }
});



