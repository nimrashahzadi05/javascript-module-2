/*
The following code contains syntax errors - try and fix them!

Once you fix them, run this file, it should output the correct values!
*/

let person = {
    name: "Alice",
    age: 25,
    currentAddress: "Glasgow",
    changeAddress: function(newAddress) {
        currentAddress = newAddress;
    },
    celebrateBirthday: function() {
        that.age = that.age + 1;
    }
};
console.log(person.currentAddress)
console.log(person.age)