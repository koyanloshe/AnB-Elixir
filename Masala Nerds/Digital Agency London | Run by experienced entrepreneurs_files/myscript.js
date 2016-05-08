// JavaScript Document

$(document).ready( function() {
    $("#total").val("£39/Hour");
    $("#amount").val("Do you like chicken soup?");
    $("#amountb").val("Who are you?");
    $("#amountc").val("If you were an animal, you would be?");
    $("#amountd").val("In my free time, I usually");
	$("#amounte").val("Your project/ idea/ brand");

    $( function() {
        var p = {

            1: "Level 1",
            2: "Level 2",
            3: "level 3",
            4: "Level 4",
            5: "Level 5",
        };
        var t = {

            1: "5",
            2: "10",
            3: "10",
            4: "600",
            5: "1000",
        
        }
        var b = {

            1: "Level 1",
            2: "Level 2",
            3: "level 3",
            4: "Level 4",
            5: "Level 5",

        };
        var d = {

            1: "5",
            2: "5",
            3: "5",
            4: "5",
            5: "500",
        }

        var a = {

            1: "Level 1",
            2: "Level 2",
            3: "level 3",
            4: "Level 4",
            5: "Level 5",

        };
        var c = {

            1: "5",
            2: "10",
            3: "15",
            4: "25",
            5: "400",
        }

        var x = {

            1: "Level 1",
            2: "Level 2",
            3: "level 3",
            4: "Level 4",
            5: "Level 5",
        };
        var y = {

            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
        }

        var z = {

            1: "Level 1",
            2: "Level 2",
            3: "level 3",
            4: "Level 4",
            5: "Level 5",
        };
		
        var v = {

            1: "5",
            2: "6",
            3: "7",
            4: "8",
            5: "1000",
        }
		
        var r = {

            1: "Level 1",
            2: "Level 2",
            3: "level 3",
            4: "Level 4",
            5: "Level 5",
        };
		
        var s = {

            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
        }

        $("#slider").slider({

            value: "3",
            min: 1,
            max: 5,
            step: 1,
            slide: function(event, ui) {

                $("#price").val(t[ui.value]);
                $("#amount").val(p[ui.value]);
                var aaa = $("#price").val();
                var bbb = $("#priceb").val();
                var ccc = $("#pricec").val();
                var ddd = $("#priced").val();
                var eee = $("#pricee").val();
                var fff = $("#pricef").val();
				
				var abc = (+aaa + +bbb + +ccc + +ddd + +eee);
                $("#total").val('£' + abc + '/Hour');
            }
        });

        $("#sliderb").slider({
            value: "2",
            min: 1,
            max: 5,
            step: 1,
            slide: function(event, ui) {
                $("#priceb").val(d[ui.value]);
                $("#amountb").val(b[ui.value]);
                var aaa = $("#price").val();
                var bbb = $("#priceb").val();
                var ccc = $("#pricec").val();
                var ddd = $("#priced").val();
                var eee = $("#pricee").val();
                var fff = $("#pricef").val();
				
				var abc = (+aaa + +bbb + +ccc + +ddd + +eee);
                $("#total").val('£' + abc + '/Hour');
            }
        });
        $("#sliderc").slider({
            value: "3",
            min: 1,
            max: 5,
            step: 1,
            slide: function(event, ui) {
                $("#pricec").val(c[ui.value]);
                $("#amountc").val(a[ui.value]);
                var aaa = $("#price").val();
                var bbb = $("#priceb").val();
                var ccc = $("#pricec").val();
                var ddd = $("#priced").val();
                var eee = $("#pricee").val();
                var fff = $("#pricef").val();
                
				var abc = (+aaa + +bbb + +ccc + +ddd + +eee);
                $("#total").val('£' + abc + '/Hour');
            }
        });
        $("#sliderd").slider({
            value: "2",
            min: 1,
            max: 5,
            step: 1,
            slide: function(event, ui) {
                $("#priced").val(y[ui.value]);
                $("#amountd").val(x[ui.value]);
                var aaa = $("#price").val();
                var bbb = $("#priceb").val();
                var ccc = $("#pricec").val();
                var ddd = $("#priced").val();
                var eee = $("#pricee").val();
                var fff = $("#pricef").val();
				
				var abc = (+aaa + +bbb + +ccc + +ddd + +eee);
                $("#total").val('£' + abc + '/Hour');
            }
        });
        $("#slidere").slider({
            value: "3",
            min: 1,
            max: 5,
            step: 1,
            slide: function(event, ui) {
                $("#pricee").val(v[ui.value]);
                $("#amounte").val(z[ui.value]);
                var aaa = $("#price").val();
                var bbb = $("#priceb").val();
                var ccc = $("#pricec").val();
                var ddd = $("#priced").val();
                var eee = $("#pricee").val();
                var fff = $("#pricef").val();
				
				var abc = (+aaa + +bbb + +ccc + +ddd + +eee);
                $("#total").val('£' + abc + '/Hour');
            }
        });
        $("#sliderf").slider({
            value: "2",
            min: 1,
            max: 5,
            step: 1,
            slide: function(event, ui) {
                $("#pricef").val(s[ui.value]);
                $("#amountf").val(r[ui.value]);
                var aaa = $("#price").val();
                var bbb = $("#priceb").val();
                var ccc = $("#pricec").val();
                var ddd = $("#priced").val();
                var eee = $("#pricee").val();
                var fff = $("#pricef").val();
				
				var abc = (+aaa + +bbb + +ccc + +ddd + +eee);
                $("#total").val('£' + abc + '/Hour');
            }
        });
        $("#price").val('$' + $("#slider").slider("value"));
        $("#priceb").val('$' + $("#slider").slider("value"));
        $("#pricec").val('$' + $("#slider").slider("value"));
        $("#priced").val('$' + $("#slider").slider("value"));
        $("#pricee").val('$' + $("#slider").slider("value"));
        $("#pricef").val('$' + $("#slider").slider("value"));

        $("#price").val("10");
        $("#priceb").val("5");
        $("#pricec").val("15");
        $("#priced").val("2");
        $("#pricee").val("7");
        $("#pricef").val("20");

    }
    );

});

