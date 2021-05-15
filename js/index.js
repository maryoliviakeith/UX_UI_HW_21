console.log("Your index.js file is loaded correctly!");

$(".madeleine").hover(function () {
    $(".dol").css("opacity", "0.2");
    $(".spark").css("opacity", "0.2");
});
$(".dol").hover(function () {
    $(".madeleine").css("opacity", "0.2");
    $(".spark").css("opacity", "0.2");
});
$(".spark").hover(function () {
    $(".dol").css("opacity", "0.2");
    $(".madeleine").css("opacity", "0.2");
});

$(".madeleine").mouseleave(function () {
    $(".dol").css("opacity", "1");
    $(".spark").css("opacity", "1");
    $(".madeleine").css("opacity", "1");
});
$(".dol").mouseleave(function () {
    $(".dol").css("opacity", "1");
    $(".spark").css("opacity", "1");
    $(".madeleine").css("opacity", "1");
});
$(".spark").mouseleave(function () {
    $(".dol").css("opacity", "1");
    $(".spark").css("opacity", "1");
    $(".madeleine").css("opacity", "1");
});