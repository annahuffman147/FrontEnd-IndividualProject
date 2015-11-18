var tornado = {
  codeValue: "0",
  description: "tornado",
  imagePath: ["black", "yellow"]
}

function Conditions (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.getfirstName = function(){
    return this.firstName;
  }
  this.getlastName = function(){
    return this.lastName;
  }
  this.setfirstName = function (firstName){
    if(this.firstName.length < 49) {
      console.log(this.firstName);
    }
    else {
      console.log('Invalid name')
    }
  }
  this.setlastName = function (lastName){
    if(lastName.length < 10) {
      console.log(lastName)
    }
    else {
      console.log('Invalid name')
    }
  }
}

var Person1 = new Person('Anna', 'Huffman')
console.log(Person1.getlastName())
Person1.setlastName("Bobby")
Person1.setlastName("Bobbyjhghuigiugigui")
