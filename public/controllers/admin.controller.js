(function() {

app.controller('AdminController', function($firebaseObject){

  const rootRef = firebase.database().ref().child('angular');

  const one = rootRef.child('one');
  this.one = $firebaseObject(one);

  const two = rootRef.child('two');
  this.two = $firebaseObject(two);

  const three = rootRef.child('three');
  this.three = $firebaseObject(three);

  const four = rootRef.child('four');
  this.four = $firebaseObject(four);

  const five = rootRef.child('five');
  this.five = $firebaseObject(five);

  const six = rootRef.child('six');
  this.six = $firebaseObject(six);

  const seven = rootRef.child('seven');
  this.seven = $firebaseObject(seven);

  const GirlStrongOne = rootRef.child('GirlStrongOne');
  this.GirlStrongOne = $firebaseObject(GirlStrongOne);

  const GirlStrongTwo = rootRef.child('GirlStrongTwo');
  this.GirlStrongTwo = $firebaseObject(GirlStrongTwo);

  this.saveProfile = function() {
    this.one.$save();
    this.two.$save();
    this.three.$save();
    this.four.$save();
    this.five.$save();
    this.six.$save();
    this.seven.$save();
    this.GirlStrongOne.$save();
    this.GirlStrongTwo.$save();

  };

    });


}());
