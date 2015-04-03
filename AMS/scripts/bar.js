//Sell
var data1 = [
    [gd(2015, 4, 4), 8], [gd(2015, 4, 5), 25], [gd(2015, 4, 11), 3], [gd(2015, 4, 12), 15],
    [gd(2015, 4, 18), 25], [gd(2015, 4, 19), 2], [gd(2015, 4, 25), 7],
    [gd(2015, 4, 26), 7]
];

//Buy
var data2 = [
    [gd(2015, 4, 4), 8], [gd(2015, 4, 5), 25], [gd(2015, 4, 11), 3], [gd(2015, 4, 12), 15],
    [gd(2015, 4, 18), 25], [gd(2015, 4, 19), 2], [gd(2015, 4, 25), 7],
    [gd(2015, 4, 26), 7]
];


var dataset = [
    {
        label: "AXS Modeling",
        data: data1,
        color: "#FF0000",
        points: { fillColor: "#FF0000", show: true },
        lines: { show: true }
    },
    {
        label: "AXS Dev One",
        data: data2,
        xaxis:2,
        color: "#0062E3",
        points: { fillColor: "#0062E3", show: true },
        lines: { show: true }
    }
];

var dayOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];

var options = {
    series: {
        shadowSize: 5
    },
    xaxes: [{
        mode: "time",                
        tickFormatter: function (val, axis) {
            return dayOfWeek[new Date(val).getDay()];
        },
        color: "black",
        position: "top",
        axisLabel: "Day of week",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 5
    },
    {
        mode: "time",
        timeformat: "%m/%d",
        tickSize: [3, "day"],
        color: "black",        
        axisLabel: "Date",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 10
    }],
    yaxis: {        
        color: "black",
        tickDecimals: 2,
        axisLabel: "Gold Price  in USD/oz",
        axisLabelUseCanvas: true,
        axisLabelFontSizePixels: 12,
        axisLabelFontFamily: 'Verdana, Arial',
        axisLabelPadding: 5
    },
    legend: {
        noColumns: 0,
        labelFormatter: function (label, series) {
            return "<font color=\"white\">" + label + "</font>";
        },
        backgroundColor: "#000",
        backgroundOpacity: 0.9,
        labelBoxBorderColor: "#000000",
        position: "nw"
    },
    grid: {
        hoverable: true,
        borderWidth: 3,
        mouseActiveRadius: 50,
        backgroundColor: { colors: ["#ffffff", "#EDF5FF"] },
        axisMargin: 20
    }
};

$(document).ready(function () {
    $.plot($("#flot-placeholder"), dataset, options);
    $("#flot-placeholder").UseTooltip();
});




function gd(year, month, day) {
    return new Date(year, month - 1, day).getTime();
}

var previousPoint = null, previousLabel = null;
var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

$.fn.UseTooltip = function () {
    $(this).bind("plothover", function (event, pos, item) {
        if (item) {
            if ((previousLabel != item.series.label) || (previousPoint != item.dataIndex)) {
                previousPoint = item.dataIndex;
                previousLabel = item.series.label;
                $("#tooltip").remove();
                
                var x = item.datapoint[0];
                var y = item.datapoint[1];
                var date = new Date(x);
                var color = item.series.color;

                showTooltip(item.pageX, item.pageY, color,
                            "<strong>" + item.series.label + "</strong><br>"  +
                            (date.getMonth() + 1) + "/" + date.getDate() +
                            " : <strong>" + y + "</strong> (USD/oz)");
            }
        } else {
            $("#tooltip").remove();
            previousPoint = null;
        }
    });
};

function showTooltip(x, y, color, contents) {
    $('<div id="tooltip">' + contents + '</div>').css({
        position: 'absolute',
        display: 'none',
        top: y - 40,
        left: x - 120,
        border: '2px solid ' + color,
        padding: '3px',
        'font-size': '9px',
        'border-radius': '5px',
        'background-color': '#fff',
        'font-family': 'Verdana, Arial, Helvetica, Tahoma, sans-serif',
        opacity: 0.9
    }).appendTo("body").fadeIn(200);
}
