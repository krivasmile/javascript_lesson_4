'use strict'

//functional style
function Robot() {
    this.work = function() {
        console.log('I`m Robot. I`m working!');
    }
}

function CoffeeRobot() {
    Robot.call(this);
    this.work = function() {
        console.log('I`m CoffeeRobot. I make coffee!');
    }
}

function RobotDancer() {
    Robot.call(this);
    this.work = function() {
        console.log('I`m RobotDancer. I`m just dancing!');
    }
}

function RobotCooker() {
    Robot.call(this);
    this.work = function() {
        console.log('I`m RobotCooker. I`m just cooking!');
    }
}

let robot = new Robot();
let coffeeRobot = new CoffeeRobot();
let robotDancer = new RobotDancer();
let robotCooker = new RobotCooker();

robot.work();
coffeeRobot.work();
robotDancer.work();
robotCooker.work();

console.log("---------------Array loop ---------------");

let array = [robot, coffeeRobot, robotDancer, robotCooker];

for (let i = 0; i < array.length; i++){
    array[i].work();
}

