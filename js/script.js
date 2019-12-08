//focus on the name field by default
$("#name").focus();
//hiding other job field
$("#other-role").hide();
//hiding color field in T-shirt Info section
// display Please select a T-shirt theme
$("#color").hide();
$(document).ready( ()=>{
    $("#colors-js-puns").append("<label id='color-theme'>Please select a T-shirt theme</label>");
});

/*-------- T-shirt Info section --------*/

//display the color sector when the design is selected
$("#design").on("change", ()=>{
    $('#color-theme').remove();
    $("#color").show();
    if($("#design option:selected").val() === "default"){
        $("#color").hide();
        $("#colors-js-puns").append("<label id='color-theme'>Please select a T-shirt theme</label>"); 
    }
});

//display correspoding options when JS Puns is chosen
$("#design").on("change", ()=>{
  if($("#design").val() ==="js puns"){
    $("#color option").remove();
    $('#color').append('<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option><option value="gold">Gold (JS Puns shirt only)</option>');
  }
});

$("#design").on("change", ()=>{
  if($("#design").val() ==="heart js"){
    $("#color option").remove();
    $('#color').append('<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option><option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> ');
  }
});
     

//dynamically changing the visability of other job field
$("#title").on("change", ()=> {
    if($("#title option:selected").val() === "other"){
      $("#other-role").show();
    }
    else{
      $("#other-role").hide(); 
    }
});

/*-----------register for activities----------*/
let total = 0;
const $totalHtml = $("<div class='total'><p></p></div>");
$totalHtml.children().css("color","#28B463");
$totalHtml.children().css("font-weight", "bold");
$totalHtml.children().css("font-size", "20px");
$(".activities").append($totalHtml);

//creating activities
addActivity('all', 200);
addActivity('js-frameworks', 100, 'express');
addActivity('js-libs', 100, 'node');
addActivity('express', 100, 'js-frameworks');
addActivity('node', 100, 'js-libs');
addActivity('build-tools', 100);
addActivity('npm', 100);

function addActivity(activityName, price, conflictName){
  const $activity = $(".activities input[name="+ activityName +"]");

  $activity.on("change", ()=>{
    if($activity.is(":checked")) {
      total += price;
      if(total !== 0){
        $totalHtml.show();
      }
			$('.total p').text('Total: $' + total);
			if(conflictName !== '') {
				toggleCheckbox(conflictName, false);
			}
		}
		else {
      total -= price;
      if(total === 0){
        $totalHtml.hide();
      }
			$('.total p').text('Total: $' + total);
			if(conflictName !== '') {
				toggleCheckbox(conflictName, true);
			}
		}
  });
}

//disable the checkbox if there is a conflit
function toggleCheckbox(activityName, enable){
  const $activity = $(".activities input[name="+ activityName +"]");
  //when the checkbox is unchecked
  if(enable){
    $activity.prop("disabled", false);
    $activity.parent().removeClass("disabled");
    $activity.parent().css('color', 'black');
  }
  //when the checkbox is checked
  else{
    $activity.prop("disabled", true);
    $activity.parent().addClass("disabled");
    $activity.parent().css('color', '#909497');
  }
}

/*--------------payment Info---------------*/
const $payment = $('#payment');
const $creditCard = $('#credit-card');
const $paypal = $('#paypal');
const $bitcoin = $('#bitcoin');

//setting credit card as default payment method
$payment.prop('selectedIndex', 1);
$paypal.hide();
$bitcoin.hide();

//selecting different payment methods
$payment.on("change", ()=> {
  if($("#payment option:selected").val() === "select method"){
    $creditCard.hide();
    $paypal.hide();
    $bitcoin.hide();
  }
  if($("#payment option:selected").val() === "credit card"){
    $creditCard.show();
    $paypal.hide();
    $bitcoin.hide();
  }
  if($("#payment option:selected").val() === "paypal"){
    $creditCard.hide();
    $paypal.show();
    $bitcoin.hide();
  }
  if($("#payment option:selected").val() === "bitcoin"){
    $creditCard.hide();
    $paypal.hide();
    $bitcoin.show();
  }
});

/*-------------form validation---------------*/
//error message of a non-empty name feld
const $nameMsg = $("<div id='nameMsg'><p>Please enter your name</p></div>");
$nameMsg.css("color", "red");
$nameMsg.children().css("font-size","15px");
//error message of characters that are not allowed
const $nameError = $("<div id='nameMsg'><p>Please enter again without special characters and consecutive spaces</p></div>");
$nameError.css("color", "red");
$nameError.children().css("font-size","15px");

//name field does not allow special characters and mutpe spaces
let specialChar = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;
let validEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;


$(document).ready(()=>{
  $("#submit").on("click", (e)=>{
    //vadaton for name field
    let name = $("#name").val();
  if(name==""){
    e.preventDefault();
    $("#name").css("border", "2px solid red");
    $("#name").before($nameMsg);
  }
  else{
    $("#name").css("border", "2px solid rgb(111, 157, 220)");
  }
  if(name !="" && !specialChar.test($("#name").val())){
    e.preventDefault();
    $("#name").css("border", "2px solid red");
    $("#name").before($nameError);
  }
      //validation for email input

      
  });
});

