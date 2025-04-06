// JS for home page
function openFunction(){
  document.getElementById("menu").style.width="300px";
  document.getElementById("mainbox").style.marginLeft="300px"
}

function closeFunction(){
  document.getElementById("menu").style.width="0px";
  document.getElementById("mainbox").style.marginLeft="0px"
}
// end of JS for homepage
// JS for about page

// end of JS for about page

// JS for Workspace
// Start of Cash Flow JS
var cashBtn = $('.cash-button')
var container = $('.cash-container')
var cashflow = 0;
var incomeTotal = 0;
var outcomeTotal = 0;

cashBtn.on("click", cashCalc);

function cashCalc() {
  var cashInput = $('.cash-input').val()
  var flowtype = document.getElementById('flowtype');
  if (flowtype.value === "income") {
    cashflow += parseInt(cashInput);
    incomeTotal += parseInt(cashInput);
  } else {
    cashflow -= parseInt(cashInput);
    outcomeTotal += parseInt(cashInput);
  }

  container.html(`
    <div class="balance-div">
      <p class="current-balance"> Current Balance: $${cashflow}</p>
    </div>
    <div class="flow-div">
      <p class="flowtype-total">Income Total:<br> $${incomeTotal} </p>
    <div class="flow-div">
      <p class="flowtype-total">Outcome Total:<br> $${outcomeTotal} </p>
    </div>
  `)
    event.preventDefault()
}

// End of Cash Flow JS

// Start of Financial Goals JS

    var goalsBtn = $('.goals-button');
    var goalsContainer = $('.goals-container');
    var iterationCount = 0;

goalsBtn.on("click", goalsList);

    function goalsList() {

        var goals = $('.goals-input').val();

        console.log(goals);
      
      iterationCount += 1;
      var goalCount = iterationCount.toString();
  
        goalsContainer.append(`
        
          <p class="goal-param"> ${goalCount}. ${goals} </p>
        
        `)

          event.preventDefault()

    }
// End of Workspace JS