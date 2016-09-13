//Addition
$('.plus').click(function () {
    var sum = $("#nOne").val();
    var demo1 = parseInt(sum);
    var sum1 = $("#nTwo").val();
    var demo2 = parseInt(sum1);
    $('.result').html(demo1 + demo2);
    if (isNaN(sum)) {
        $('.result').text("Please Insert a Number");
    }
});
//Subtraction
$('.minus').click(function () {
    var sum = $("#nOne").val();
    var demo1 = parseInt(sum);
    var sum1 = $("#nTwo").val();
    var demo2 = parseInt(sum1);
    $('.result').html(demo1 - demo2);
    if (isNaN(sum)) {
        $('.result').text("Please Insert a Number");
    }
});
//Multiplication
$('.by').click(function () {
    var sum = $("#nOne").val();
    var demo1 = parseInt(sum);
    var sum1 = $("#nTwo").val();
    var demo2 = parseInt(sum1);
    $('.result').html(demo1 * demo2);
    if (isNaN(sum)) {
        $('.result').text("Please Insert a Number");
    }
});
//Division
$('.divid').click(function () {
    var sum = $("#nOne").val();
    var demo1 = parseInt(sum);
    var sum1 = $("#nTwo").val();
    var demo2 = parseInt(sum1);
    var total = demo1 / demo2;
    var n = total.toFixed(2);
    $('.result').html(n);
    if (isNaN(sum)) {
        $('.result').text("Please Insert a Number");
    }
});