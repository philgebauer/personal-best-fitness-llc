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
        const ref = rootRef.child('monday');
        this.monday = $firebaseObject(ref);
        console.log(this.monday);


        this.saveProfile = function() {
          this.monday.$save()
        };
    });


}());
