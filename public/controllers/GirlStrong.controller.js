app.controller('GirlStrongController', function($firebaseObject) {
  const self = this;
  console.log("Girl Strong Controller Running");

  let rootRef = firebase.database().ref().child('angular');


  let GirlStrongOne = rootRef.child('GirlStrongOne');
  this.GirlStrongOne = $firebaseObject(GirlStrongOne);
  console.log(this.GirlStrongOne);

  let GirlStrongTwo = rootRef.child('GirlStrongTwo');
  this.GirlStrongTwo  = $firebaseObject(GirlStrongTwo);


});
