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


$("#design").on("change", ()=>{
    $('#color-theme').remove();
    $("#color").show();
    if($("#design").val() === "default"){
        $("#color").hide();
        $("#colors-js-puns").append("<label id='color-theme'>Please select a T-shirt theme</label>"); 
    }
});




//dynamically changing the visability of other job field
$("#title").on("change", ()=> {
    if($("#title").val() == "other"){
      $("#other-role").show();
    }
    else{
      $("#other-role").hide(); 
    }
});

