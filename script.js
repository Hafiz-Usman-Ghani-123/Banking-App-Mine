// JS for Login  box 
var main_body = document.getElementById("main");
main_body.style.display = 'none';

function loginBtn() {
    var loginBox = document.getElementById("login-box");
    var username = document.getElementById("User-in").value;
    var password = document.getElementById("Pass-in").value;
    // username print in dashboard
    document.getElementById("u_name").innerHTML = username;

    if (password == "" && username == "") {
        alert("Please enter the username & password")
    } else if (username == "") {
        alert("Please enter the username")
    } else if (password == "") {
        alert("Please enter the password")
    } else {
        loginBox.style.display = "none";
        main_body.style.display = 'block';
    }
}

// JS for Amount deposit 

function amountDeposit() {
    var deposit_input = document.getElementById("deposit-amount").value;

    if ([undefined, null, "", 0].includes(deposit_input)) {

        alert("Please Enter The Amount")
    } else {
        var deposit_amount = parseFloat(deposit_input)

        var initially_deposited = document.getElementById("Deposited").innerHTML = deposit_amount;

        var privious_dep = parseFloat(document.getElementById("deposit_box").innerHTML);

        var total_deposits = privious_dep + initially_deposited;

        var print_in_dep = document.getElementById("deposit_box").innerHTML = total_deposits;

        var print_in_balance = document.getElementById("balance").innerHTML = print_in_dep;
    }
}

// Withdraw box....
function amountWithdraw() {
    var Withdraw_input = document.getElementById("withdraw-input").value;

    if ([undefined, null, "", 0].includes(Withdraw_input)) {
        alert("Please Enter The Amount")
    } else {
        var Withdraw_amount = parseFloat(Withdraw_input);

        var initially_withdrawl = document.getElementById("withdrawl-amount").innerHTML = Withdraw_amount;

        var privious_wid = parseFloat(document.getElementById("withdrawl-total").innerHTML);

        var total_withdraw = privious_wid + initially_withdrawl;

        var print_in_wid = document.getElementById("withdrawl-total").innerHTML = total_withdraw;

        var balance = parseFloat(document.getElementById("balance").innerHTML);

        var print_total_balances = document.getElementById("balance").innerHTML = balance - Withdraw_amount;
    }
}



