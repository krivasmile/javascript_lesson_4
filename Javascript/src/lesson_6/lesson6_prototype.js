'use strict'

//prototype style
function Robot() {

}

Robot.prototype.work = function() {
    console.log('I`m Robot. I’m working');
};

function CoffeeRobot() {

}

CoffeeRobot.prototype = Object.create(Robot.prototype);
CoffeeRobot.prototype.constructor = CoffeeRobot;
CoffeeRobot.prototype.work = function() {
    console.log('I`m CoffeeRobot. I make coffee!');
};

function RobotDancer() {

}

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;
RobotDancer.prototype.work = function() {
    console.log('I`m RobotDancer. I’m dancing!');
}

function RobotCooker() {

}

RobotCooker.prototype = Object.create(Robot.prototype);
RobotCooker.prototype.constructor = RobotCooker;
RobotCooker.prototype.work = function() {
    console.log('I`m RobotCooker. I’m cooking!');
};

var robot = new Robot();
var coffeeRobot = new CoffeeRobot();
var robotDancer = new RobotDancer();
var robotCooker = new RobotCooker();

robot.work();
coffeeRobot.work();
robotDancer.work();
robotCooker.work();

console.log("---------------Array loop ---------------");

var array = [robot, coffeeRobot, robotDancer, robotCooker];

for(var i = 0; i< array.length; i++){
    array[i].work();
}
