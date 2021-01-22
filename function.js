// https://github.com/mhsgarbd/js-assignment

//KILOMETERtoMETER

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}

var first = kilometerToMeter(15);
var second = kilometerToMeter(20);
console.log(first, second);


//BudgetCalculator

function budgetCalculator(watch, phone, laptop){
var priceOfWatch = 50;
var priceOfPhone = 100;
var priceOfLaptop = 500;
var totalPrice = priceOfWatch * watch + priceOfPhone * phone + priceOfLaptop * laptop;
return totalPrice;
}

var budget = budgetCalculator(7, 9, 11)
console.log(budget);


//HotelCost

function hotelCost(StayingdDays){
    var totalHotelCost = 0;
    if(StayingdDays <= 10){
    totalHotelCost = StayingdDays *100;
    }

    else if(StayingdDays <= 20){
        var tenDaysCost = 10 * 100;
        var staying = StayingdDays - 10;
        var twentyDaysCost = staying * (100-20);
        totalHotelCost = tenDaysCost + twentyDaysCost;
    }
    else{
        var tenDaysCost = 10*100;
        var twentyDaysCost = 10 * (100-20);
        var staying = StayingdDays - 20;
        var moreDaysCost = staying * 50;
        totalHotelCost = tenDaysCost + twentyDaysCost + moreDaysCost;
    }
    return totalHotelCost;
}
var costOfStayingHotel =  hotelCost(23);
console.log(costOfStayingHotel);


//Friend's Big Name

var myFriends = ["Mim", "Anny", "Arju", "Riaz", "AliAbdullah", "Shakil", "Ratri"];
  function megaFriend(name){
      var largestName = name[0];
      for(var i = 0; i < name.length; i++){
          if(name[i].length > largestName.length){
              largestName = name[i];
          }
      }
      return largestName;
  }
  console.log(megaFriend(myFriends));