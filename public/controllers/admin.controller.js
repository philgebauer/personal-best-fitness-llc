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

app.controller('AdminController', function($firebaseObject){
        const rootRef = firebase.database().ref().child('angular');
        const ref = rootRef.child('object');
        this.object = $firebaseObject(ref);
    });
