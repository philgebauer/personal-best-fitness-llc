(function() {

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
    this.monday.$save();
    this.tuesday.$save();
    this.wednesday.$save();
    this.thursday.$save();
    this.friday.$save();
    this.saturday.$save();
    this.sunday.$save()

  };

    });


}());
