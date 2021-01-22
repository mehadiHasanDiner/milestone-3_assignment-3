// https://github.com/mehadiHasanDiner/milestone-3_assignment-3

// kilometerToMeter
function kilometerToMeter(kilometer) {
    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(parseFloat('5km'));
console.log(result);


// budgetCalculator
function budgetCalculator(wathch, mobile, laptop) {
    var watchCount = wathch * 6;
    var mobileCount = mobile * 3;
    var laptopCount = laptop * 2;
    var totalPrice = watchCount + mobileCount + laptopCount;
    return totalPrice;
}
var result = budgetCalculator(50, 100, 500);
console.log(result);



// hotelCost
function hotelCost(days){
    var ratePerDay=0;
    if (days<=10){
        ratePerDay = 100;
        firstCondition = ratePerDay*days;
        return firstCondition;
    } else if (days<=20){
        ratePerDay = 80;
        secondCondition = (ratePerDay*days);
        return secondCondition;
    }  else {
        ratePerDay = 50;
        thirdCondition = (ratePerDay*days);
        return thirdCondition;

    }

}
var discount = hotelCost(Math.round(13));
console.log(discount);



//megaFriend
function megaFriend(friends) {
    var longName = friends[0].length;
    var foundName = friends[0];
for (var i = 0; i < friends.length; i++) {
    var currentNumber = friends[i].length;
    if (currentNumber > longName) {
        foundName = friends[i]
        longName = currentNumber;
    }
    }
return foundName;
}

var friends = ['Kamal', 'Jamal', 'Moninul', 'Jahanulhaq', 'Mehadi Hasan', 'Amarat Hosssain'];
var result = megaFriend(friends);
console.log(result);