var items = [];

$.getJSON("data.json", function (data) {

    for (var x = 0; x < data.array.length; x++) {
        $.each(data.array[x], function (key, val) {
            items.push(val);
        });
    }
});
