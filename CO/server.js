var express = require('express'),
    api = express();

var bodyParser = require('body-parser');

var sensex = {
  "Uttar Pradesh" : {
    "Type" : "State",
    "Population" : 199,
    "Percentage" : 16.5,
    "Sex Ratio" : 930
  },
  "Mharashtra" : {
    "Type" : "State",
    "Population" : 112,
    "Percentage" : 9.28,
    "Sex Ratio" : 929
  },
  "Bihar" : {
    "Type" : "State",
    "Population" : 104,
    "Percentage" : 8.6,
    "Sex Ratio" : 918
  },
  "West Bengal" : {
    "Type" : "State",
    "Population" : 91,
    "Percentage" : 7.54,
    "Sex Ratio" : 950
  },
  "Andhra Pradesh" : {
    "Type" : "State",
    "Population" : 84,
    "Percentage" : 6.99,
    "Sex Ratio" : 993
  },
  "Madhya Pradesh" : {
    "Type" : "State",
    "Population" : 72,
    "Percentage" : 6.00,
    "Sex Ratio" : 931
  },
  "Tamil Nadu" : {
    "Type" : "State",
    "Population" : 72,
    "Percentage" : 5.96,
    "Sex Ratio" : 996
  },
  "Rajasthan" : {
    "Type" : "State",
    "Population" : 68,
    "Percentage" : 5.66,
    "Sex Ratio" : 928
  },
  "Karnataka" : {
    "Type" : "State",
    "Population" : 61,
    "Percentage" : 5.05,
    "Sex Ratio" : 973
  },
  "Gujrat" : {
    "Type" : "State",
    "Population" : 60,
    "Percentage" : 4.99,
    "Sex Ratio" : 919
  }
};

var operations = {
  Sum : {
      description : 'Adds two numbers',
      input : '<div class="row"><div class="form-group">' +
          '<label for="a">a</label><input id="a" ng-model="a" class="form-control">' +
          '<div><div class="form-group"><label for="b">b</label>' +
          '<input id="b" ng-model="b" class="form-control"><div><div>',

      behaviour : 'var parse = this.parseInt;' +
          'var a = parse(params.a,10);' +
          'var b = parse(params.b,10);' +
          'callback.call(context, a + b);',
      output : '<div class="row" ng-show="resultDone">' +
          '' +
          '<h3>Result is {{result.value}}</h3></div>'
  }
};

//Express 4
api.use(express.static(__dirname, '/'));

var router = express.Router();
api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

api.get('/api/users', function(req, res) {
  res.json(operations);
  //res.json(500, { error: 'An error has occurred!' });
});

api.get('/api/operations/:name', function(req, res) {
    var operName = req.params.name;
    res.json(operations[operName]);
});

api.get('/api/operations', function(req, res) {
    res.json(operations);
    //res.json(500, { error: 'An error has occurred!' });
});

api.get('/api/states',function(req,res){
  var queryString = req.query.search;
  if(!queryString){
    queryString = '';
  }else{
    queryString = queryString.toUpperCase();
  }

  var states = [];
  for(var state in sensex){
    var sateTemp = state.toUpperCase();
    if(sateTemp.indexOf(queryString) !== -1){
      states.push(state);
    }
  }
  res.json(states);

});




api.post('/api/operations/:name', function(req, res){
    var name = req.params.name;
    if(!operations[name]){
        operations[name] = {};
    }
    var val = operations[name];
    val.behaviour = req.body.behaviour || val.behaviour;
    val.output = req.body.output || val.output;
    val.input = req.body.input || val.input;
    val.description = req.body.description || val.description;

    return res.json(val);

});


api.post('/api/operations', function(req, res){
    var newOperData = {};
    newOperData.input = req.body.input;
    newOperData.output = req.body.output;
    newOperData.behaviour = req.body.behaviour;
    newOperData.description = req.body.description;
    operations[req.body.name] = newOperData;
    res.json(newOperData);

});

api.delete('/api/operations/:name', function(req, res) {
    var name = req.params.name;
    var data = { status: true };
    delete operations[name];
    res.json(data);
});

api.get('/api/stateStats/:state', function(req, res) {
    var state = req.params.state;
    var data = sensex[state];
    if(data){
        data.name = state;
    }
    res.json(data);
});

api.all('/*', function(req, res) {
    res.sendfile('index.html');
});



api.listen(5000);

console.log('Express listening on port 5000');