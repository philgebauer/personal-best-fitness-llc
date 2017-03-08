(function() {


// app.controller('AdminController', ['$http', '$location', "$firebaseObject",  function($http, $location, $firebaseObject) {
//   const self = this;
//   console.log("Admin Controller Running");
//
//
//   const rootRef = firebase.database().ref().child('rules');
//   const ref = rootRef.child('object');
//   console.log(ref);
//   self.object = $firebaseObject(ref);
//
//
//
// }]);

// app.controller("AdminController", ["$scope", "$firebaseObject",
//   function($scope, $firebaseObject) {
//     var self = this;
//     var ref = firebase.database().ref();
//     // download physicsmarie's profile data into a local object
//     // all server changes are applied in realtime
//     $scope.profile = $firebaseObject(ref.child('profiles').child('physicsmarie'));
//     console.log($scope.profile);
//   }
// ]);



app.controller('AdminController', function($firebaseObject){

  const rootRef = firebase.database().ref().child('angular');

  const monday = rootRef.child('monday');
  this.monday = $firebaseObject(monday);
  console.log('monday ',  this.monday);

  const tuesday = rootRef.child('tuesday');
  this.tuesday = $firebaseObject(tuesday);

  const wednesday = rootRef.child('wednesday');
  this.wednesday = $firebaseObject(wednesday);

  const thursday = rootRef.child('thursday');
  this.thursday = $firebaseObject(thursday);

  const friday = rootRef.child('friday');
  this.friday = $firebaseObject(friday);

  const saturday = rootRef.child('saturday');
  this.saturday = $firebaseObject(saturday);

  const sunday = rootRef.child('sunday');
  this.sunday = $firebaseObject(sunday);


  this.saveProfile = function() {
    this.monday.$save()
  };

  // this.saveProfile = function() {
  //   this.tuesday.$save()
  // };
  //
  // this.saveProfile = function() {
  //   this.wednesday.$save()
  // };
  //
  // this.saveProfile = function() {
  //   this.thursday.$save()
  // };
  //
  // this.saveProfile = function() {
  //   this.friday.$save()
  // };
  //
  // this.saveProfile = function() {
  //   this.saturday.$save()
  // };
  //
  // this.saveProfile = function() {
  //   this.sunday.$save()
  // };

        // const rootRef = firebase.database().ref().child('angular');
        // const monday = rootRef.child('monday');
        // this.monday = $firebaseObject(monday);
        // console.log(this.monday);
        //
        //
        // this.saveProfile = function() {
        //   this.monday.$save()
        // };
    });


}());
