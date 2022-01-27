function compute()
{
    // This function takes user input and calculates interests
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Check for valid input. Alert user if not valid
    if (principal < 0 || principal == 0) {
        alert("Enter a positive number");

        document.getElementById("principal").focus();
    }
    var interest = principal * years * rate / 100;

    var year = new Date().getFullYear() + parseInt(years) ;

    // returns result with variables highlighted 
    document.getElementById("result").innerHTML = "If you deposit <span class='highlight'>" + principal + "</span> <br />" +
        "at an interest rate of <span class='highlight'>" + rate + "%</span> <br />" +
        "You will recive an amount of <span class='highlight'>" + interest + "</span> <br />in the year <span class='highlight'>" + year + "</span>";
    
}

function updateRate() {
    // This function takes the current value from the slider and displays it as text
    var rateVal = document.getElementById("rate").value + " %";
    document.getElementById("rate_val").innerText = rateVal;
}