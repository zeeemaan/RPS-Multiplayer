var weather;

var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var units = '&units=imperial';
var apiKey = '&appid=daab60fac03700b51f256bbde6449103';

var input;

function setup()  {
    createCanvas(400, 200);

    var button  = select('#submit');
    button.mousePressed(weatherAsk);

    function weatherAsk() {
    var url = api + input.value() + units + apiKey;
    loadJSON(url, gotData);
    }
}

function gotData(data) {
    //print in data
    weather = data;
}


function draw()  {
    background(0);
    if (weather) {
        var temp = weather.main.temp;
        var humidity = weather.main.humidity;
        ellipse(100, 100, temp, temp);
        ellipse(300, 100, humidity, humidity);
    }
}