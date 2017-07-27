app.controller('BootcampController', function($firebaseObject) {
  const self = this;
  console.log("Bootcamp Controller Running");

  let rootRef = firebase.database().ref().child('angular');

  let one = rootRef.child('one');
  this.one = $firebaseObject(one);
  console.log('one ',  this.one);

  let two = rootRef.child('two');
  this.two = $firebaseObject(two);

  let three = rootRef.child('three');
  this.three = $firebaseObject(three);

  let four = rootRef.child('four');
  this.four = $firebaseObject(four);

  let five = rootRef.child('five');
  this.five = $firebaseObject(five);

  let six = rootRef.child('six');
  this.six = $firebaseObject(six);

  let seven = rootRef.child('seven');
  this.seven = $firebaseObject(seven);

  let GirlStrongOne = rootRef.child('GirlStrongOne');
  this.GirlStrongOne  = $firebaseObject(GirlStrongOne );

  let GirlStrongTwo  = rootRef.child('GirlStrongTwo');
  this.GirlStrongTwo  = $firebaseObject(GirlStrongTwo);





});
