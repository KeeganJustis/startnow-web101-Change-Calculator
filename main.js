// Write your JavaScript here



function handler1() {
    $('#calculate-change').click(mainfunction);
}

handler1();

function mainfunction() {

    // Gets ollar amount and amount under a dollar
    var cost = $('#amount-due').val()
    var money_received = $('#amount-received').val();
    if (money_received == cost) {
        return;
    }

    var dollars = Math.floor(money_received - cost);
    var cents = Math.round((money_received - cost - dollars) * 100);

    $('#dollars-output').text(dollars);
    //cents = 100 - cents;
    //var cents = underadollar;
    console.log(cents);

    if (cents > 24) {
        var quarters = Math.floor(cents / 25);

        cents = cents % 25;

        $("#quarters-output").text(quarters);
    }
    
    if (cents > 9) {

        var dimes = Math.floor(cents / 10);
        cents=cents% 10;


        $("#dimes-output").text(dimes);
    }
    
    if (cents > 4) {

        var nickels = Math.floor(cents / 5);
        cents=cents% 5;

        $("#nickels-output").text(nickels);
    }



    if (cents > 0)  {

        var pennies = Math.floor(cents);
        $("#pennies-output").text(pennies);
    }

    






}
