app.controller('BootcampController', function($firebaseObject) {
  const self = this;
  console.log("Bootcamp Controller Running");

  let rootRef = firebase.database().ref().child('angular');

  let monday = rootRef.child('monday');
  this.monday = $firebaseObject(monday);
  console.log('monday ',  this.monday);

  let tuesday = rootRef.child('tuesday');
  this.tuesday = $firebaseObject(tuesday);

  let wednesday = rootRef.child('wednesday');
  this.wednesday = $firebaseObject(wednesday);

  let thursday = rootRef.child('thursday');
  this.thursday = $firebaseObject(thursday);

  let friday = rootRef.child('friday');
  this.friday = $firebaseObject(friday);

  let saturday = rootRef.child('saturday');
  this.saturday = $firebaseObject(saturday);

  let sunday = rootRef.child('sunday');
  this.sunday = $firebaseObject(sunday);



});
