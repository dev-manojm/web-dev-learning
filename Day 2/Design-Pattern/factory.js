/* n this JavaScript example the Factory object creates four different types of employees. Each employee type has a different hourly rate. The createEmployee method is the actual Factory Method. The client instructs the factory what type of employee to create by passing a type argument into the Factory Method.

The AbstractProduct in the diagram is not implemented because Javascript does not support abstract classes or interfaces. However, we still need to ensure that all employee types have the same interface (properties and methods).

Four different employee types are created; all are stored in the same array. Each employee is asked to say what they are and their hourly rate.

The log function is a helper which collects and displays results. */

function Factory() {
  this.createEmployee = function (type) {
    var employee;

    if (type === "fulltime") {
      employee = new FullTime();
    } else if (type === "parttime") {
      employee = new PartTime();
    } else if (type === "temporary") {
      employee = new Temporary();
    } else if (type === "contractor") {
      employee = new Contractor();
    } else if (type === "vendor") {
        employee = new Vendor();
      }

    employee.type = type;

    employee.say = function () {
      log.add(this.type + ": rate " + this.hourly + "/hour");
    };

    return employee;
  };
}

var FullTime = function () {
  this.hourly = "$12";
};

var PartTime = function () {
  this.hourly = "$11";
};

var Temporary = function () {
  this.hourly = "$10";
};

var Contractor = function () {
  this.hourly = "$15";
};

var Vendor = function () {
    this.hourly = "$17";
  };
// log helper
var log = (function () {
  var log = "";

  return {
    add: function (msg) {
      log += msg + "\n";
    },
    show: function () {
      alert(log);
      log = "";
    },
  };
})();

function run() {
  var employees = [];
  var factory = new Factory();

  employees.push(factory.createEmployee("fulltime"));
  employees.push(factory.createEmployee("parttime"));
  employees.push(factory.createEmployee("temporary"));
  employees.push(factory.createEmployee("contractor"));
  employees.push(factory.createEmployee("vendor"));

  for (var i = 0, len = employees.length; i < len; i++) {
    employees[i].say();
  }

  log.show();
}
run();
