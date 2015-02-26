
var express = require('express');
var path = require('path');
var morgan = require('morgan');

var app = express();


var clients= [
    {
        firstName: "Jordi",
        lastName: "Baylina",
        telfs: [
            {
                type: "Home",
                number: "111111111"
            },
            {
                type: "Office",
                number: "22222222"
            }
        ],
        suns: 0,
        tall: 1.81,
        birth: "1973-04-03T00:00:00.000Z"
    },
    {
        firstName: "Joan",
        lastName: "Bacardit",
        telfs: [
            {
                type: "Home",
                number: "44444444"
            },
            {
                type: "Office",
                number: "555555555"
            }
        ],
        suns: 4,
        tall: 1.80,
        birth: "1948-03-24T00:00:00.000Z"
    }
];

app.use(morgan("dev"));
app.get('/api/clients', function(req, res) {
    res.json(clients);
});

app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(3000, function() {

    console.log("El servidor web ja esta escoltant");
});
