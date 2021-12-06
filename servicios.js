$("#silver").hide();
$("#gold").hide();
$("#black").hide();

$("#tonicoSilver").click(function() {
    $("#silver").slideToggle(1200, function() {
        if ($("#tonicoSilver").html() == "Tónico Silver") {
            $("#tonicoSilver").html("Ocultar");
            $("#tonicoSilver").css('background', 'black');
            $("#tonicoSilver").css('color', 'gold');
        } else {
            $("#tonicoSilver").html("Tónico Silver");
            $("#tonicoSilver").css('background', 'goldenrod');
            $("#tonicoSilver").css('color', 'black');
        }
    });
});

$("#tonicoGold").click(function() {
    $("#gold").slideToggle(1200, function() {
        if ($("#tonicoGold").html() == "Tónico Gold") {
            $("#tonicoGold").html("Ocultar");
            $("#tonicoGold").css('background', 'black');
            $("#tonicoGold").css('color', 'gold');
        } else {
            $("#tonicoGold").html("Tónico Gold");
            $("#tonicoGold").css('background', 'goldenrod');
            $("#tonicoGold").css('color', 'black');
            
        }
    });
});

$("#tonicoBlack").click(function() {
    $("#black").slideToggle(1200, function() {
        if ($("#tonicoBlack").html() == "Tónico Black") {
            $("#tonicoBlack").html("Ocultar");
            $("#tonicoBlack").css('background', 'black');
            $("#tonicoBlack").css('color', 'gold');
        } else {
            $("#tonicoBlack").html("Tónico Black");
            $("#tonicoBlack").css('background', 'goldenrod');
            $("#tonicoBlack").css('color', 'black');
            
        }
    });
});