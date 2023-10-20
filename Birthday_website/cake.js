$(document).ready(function () {
    $(".candles").click(function () {

        $(".flame").animate({ "opacity": 0 }, "fast");
        $(".flame2").animate({ "opacity": 0 }, "fast");
        $(".flame3").animate({ "opacity": 0 }, "fast");
        $(".text").animate({ "top": -20, "opacity": 1 }, "fast");
    });
});