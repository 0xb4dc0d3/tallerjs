//Created by B4DC0D3

function doCalc(){
  var number1 = $("#number1").val();
  var number2 = $("#number2").val();


  if (number1 == "" || number2 == "") {
    $("#result").text("Error check your input");
  } else {
    if ($("#add").is(':checked')) {
      op = (parseInt(number1) + parseInt(number2)).toString();
      $("#result").text(op);

    } else if ($("#rest").is(':checked')) {
      op = (parseInt(number1) - parseInt(number2)).toString();
      $("#result").text(op);

    } else if ($("#prod").is(':checked')) {
      op = (parseInt(number1) * parseInt(number2)).toString();
      $("#result").text(op);

    } else if ($("#quot").is(':checked')) {
      op = (parseInt(number1) / parseInt(number2)).toString();
      $("#result").text(op);
    }
  }
}

var btn = "#btn";
for (var i = 0; i < 10; i++) {
     $(btn+i).click(function() {
          var number = $(this).attr('value');
          var r = $("#input").val();

          if (r.length <= 15) {
            $("#input").val(r + number);          }
      });
}

$("#btndel").click(function(){
    var input = $("#input").val();
    var shortnedInput = input.substr(0, (input.length - 1));
    $("#input").val(shortnedInput);
});
