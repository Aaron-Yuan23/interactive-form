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

/*-------------form validation messages---------------*/

//--------------name validation messages--------------//

//error message of name feld being empty
const $nameMsg = $("<div id='nameMsg1'><p>Please enter your name in the name field</p></div>");
$nameMsg.css("color", "red");
$nameMsg.children().css("font-size","15px");

//error message of characters that are not allowed
const $nameError = $("<div id='nameMsg2'><p>Please enter your name without special characters or consecutive spaces</p></div>");
$nameError.css("color", "red");
$nameError.children().css("font-size","15px");

//name field does not allow special characters and mutiple spaces
let noSpecialChar = /^([a-zA-Z]+\s)*[a-zA-Z]+$/;


//------------email validation message----------------//
let validEmail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

//error message of email field being empty
const $emailMsg = $("<div id='emailMsg1'><p>Please enter an email address in the email field</p></div>");
$emailMsg.css("color", "red");
$emailMsg.children().css("font-size","15px");

//error message of email address that are not valid
const $emailError = $("<div id='emailMsg2'><p>Please enter a valid email address</p></div>");
$emailError.css("color", "red");
$emailError.children().css("font-size","15px");

//error message of at least one of the checkboxes needed to be selected
const $checkboxMsg = $("<div id='checkboxMsg'><p>Please select at least one activity you wish to participate in</p></div>");
$checkboxMsg.css("color", "red");
$checkboxMsg.children().css("font-size","15px");

//------------select payment method validation message-------------//
//error messages of not selecting payment method//
const $paymentMsg = $("<div id='paymentMsg'><p>Please select how you would like to pay</p></div>");
$paymentMsg.css("color", "red");
$paymentMsg.children().css("font-size","15px");

//-------------credit card number validation messages-------------//
const $cardNum = $("<div id='cardNum'><p>Please enter your credit card number</p></div>");
$cardNum.css("color", "red");
$cardNum.children().css("font-size","15px");

const $cardError = $("<div id='cardError'><p>Please enter a credit card number between 13 and 16 digits</p></div>");
$cardError.css("color", "red");
$cardError.children().css("font-size","15px");

//only numbers are allowed for credit card input
const validCc = /^[0-9]*$/;

const $validCreditNum = $("<div id='ccNumError'><p>Please enter numbers only</p></div>");
$validCreditNum.css("color", "red");
$validCreditNum.children().css("font-size","15px");

//-------------zip code validation messages----------------//
const $zipMsg = $("<div id='zipMsg'><p>Please enter your zip code</p></div>");
$zipMsg.css("color", "red");
$zipMsg.children().css("font-size","15px");

const $zipError = $("<div id='zipError'><p>Please enter a 5 digit code</p></div>");
$zipError.css("color", "red");
$zipError.children().css("font-size","15px");

//only numbers and characters are allowed for credit card input
const validZip = /^[a-zA-Z0-9]+$/;

const $validZip = $("<div id='validZipError'><p>Please enter numbers and letters only</p></div>");
$validZip.css("color", "red");
$validZip.children().css("font-size","15px");

//----------------cvv validation messages------------------//
const $cvvMsg = $("<div id='cvvMsg'><p>Please enter your cvv number</p></div>");
$cvvMsg.css("color", "red");
$cvvMsg.children().css("font-size","15px");

const $cvvError = $("<div id='cvvError'><p>Please enter a 3 digit number</p></div>");
$cvvError.css("color", "red");
$cvvError.children().css("font-size","15px");

const validCvv = /^[0-9]*$/;

const $validCvv = $("<div id='validCvvError'><p>Please enter numbers only</p></div>");
$validCvv.css("color", "red");
$validCvv.children().css("font-size","15px");

/*-------------form validation-----------*/

//------- name validation-------------//
const validateName= (e)=>{

  let name = $("#name").val();


  if(name==""){
    e.preventDefault();
    $("#nameMsg2").remove();
    $("#name").css("border", "2px solid red");
    $("#name").before($nameMsg);
  }
  else{
    $("#nameMsg1").remove();
    $("#nameMsg2").remove();
    $("#name").css("border", "2px solid rgb(111, 157, 220)");
  }
  if(name !="" && !noSpecialChar.test($("#name").val())){
    e.preventDefault();
    $("#nameMsg1").remove();
    $("#name").css("border", "2px solid red");
    $("#name").before($nameError);
  }
};

//----------email validation-------------//
const validateEmail = (e)=>{
  let mail = $("#mail").val();
  if(mail ==""){
    e.preventDefault();
    $("#emailMsg2").remove();
    $("#mail").css("border", "2px solid red");
    $("#mail").before($emailMsg);
  }
  else{
    $("#emailMsg1").remove();
    $("#emailMsg2").remove();
    $("#mail").css("border", "2px solid rgb(111, 157, 220)");
  }
  if(mail !="" && !validEmail.test($("#mail").val())){
    e.preventDefault();
    $("#emailMsg1").remove();
    $("#mail").css("border", "2px solid red");
    $("#mail").before($emailError);
  }
};

//-----------checkbox validation--------------//
const validateCheckbox = (e) =>{
  if($(".activities input[type='checkbox']:checked").length ===0){
    e.preventDefault();
    $(".activities legend").after($checkboxMsg);
  }
  else{
    $("#checkboxMsg").remove();
  }
};

//-----------payment selector validation-----------//
const validatePaymentSelector = (e) =>{
  if($("#payment option:selected").val()==="select method"){
    e.preventDefault();
    $("#payment").before($paymentMsg);
  }
  else{
    $("#paymentMsg").remove();
  }
};

//----------------credit card number validation------------------//
const validateCreditCard =(e)=>{
  if($("#payment option:selected").val()==="credit card"){
    if($("#cc-num").val() ===""){
      e.preventDefault();
      $("#cardError").remove();
      $("#ccNumError").remove();
      $("#cc-num").css("border", "2px solid red");
      $("#cc-num").after($cardNum);
    }
    else if(!validCc.test($("#cc-num").val())){
      e.preventDefault();
      $("#cardNum").remove();
      $("#cardError").remove();
      $("#cc-num").css("border", "2px solid red");
      $("#cc-num").after($validCreditNum);
    }
    else if($("#cc-num").val().length>16 ||$("#cc-num").val().length < 13){
      e.preventDefault();
      $("#cardNum").remove();
      $("#ccNumError").remove();
      $("#cc-num").css("border", "2px solid red");
      $("#cc-num").after($cardError);
    }
    else{
      $("#cardNum").remove();
      $("#cardError").remove();
      $("#ccNumError").remove();
      $("#cc-num").css("border", "2px solid rgb(111, 157, 220)");
    }
  }
};

//------------------zip code validation---------------------//
const validateZipCode =(e)=>{
  if($("#payment option:selected").val()==="credit card"){
    if($("#zip").val()===""){
      e.preventDefault();
      $("#zipError").remove();
      $("#validZipError").remove();
      $("#zip").css("border", "2px solid red");
      $("#zip").after($zipMsg);
    }
    else if(!validZip.test($("#zip").val())){
      e.preventDefault();
      $("#zipMsg").remove();
      $("#zipError").remove();
      $("#zip").css("border", "2px solid red");
      $("#zip").after($validZip);
    }
    else if($("#zip").val().length !=5){
      e.preventDefault();
      $("#zipMsg").remove();
      $("#validZipError").remove();
      $("#zip").css("border", "2px solid red");
      $("#zip").after($zipError);
    }
    else{
      $("#zipMsg").remove();
      $("#zipError").remove();
      $("#validZipError").remove();
      $("#zip").css("border", "2px solid rgb(111, 157, 220)");
    }
  }
};

//-----------------cvv number validation--------------------//
const validateCvv =(e)=>{
  if($("#payment option:selected").val()==="credit card"){
    if($("#cvv").val()===""){
      e.preventDefault();
      $("#cvvError").remove();
      $("#validCvvError").remove();
      $("#cvv").css("border", "2px solid red");
      $("#cvv").after($cvvMsg);
    }
    else if(!validCvv.test($("#cvv").val())){
      e.preventDefault();
      $("#cvvMsg").remove();
      $("#cvvError").remove();
      $("#cvv").css("border", "2px solid red");
      $("#cvv").after($validCvv);
    }
    else if($("#cvv").val().length !=3){
      e.preventDefault();
      $("#cvvMsg").remove();
      $("#validCvvError").remove();
      $("#cvv").css("border", "2px solid red");
      $("#cvv").after($cvvError);
    }
    else{
      $("#cvvMsg").remove();
      $("#cvvError").remove();
      $("#validCvvError").remove();
      $("#cvv").css("border", "2px solid rgb(111, 157, 220)");
    }
  }
};

$(document).ready(()=>{
  $("#submit").on("click", (e)=>{
   validateName(e);
   validateEmail(e);
   validateCheckbox(e);
   validatePaymentSelector(e);
   validateCreditCard(e);
   validateZipCode(e);
   validateCvv(e);
 });
});