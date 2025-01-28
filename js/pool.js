import {Answer} from "./Answer.js";
import {Card} from "./Card.js";

const answer1 = new Answer(1, 'shape1.x == shape2.y', false, 1);
const answer2 = new Answer(2, '(shape1.x == shape2.x) && (shape1.y == shape2.y)', true, 1);
const answer3 = new Answer(3, 'shape1 == shape2', false, 1);
const answer4 = new Answer(4, 'Object.keys(shape1) === Object.keys(shape2)', false, 1);

const answer5 = new Answer(5, 'False', true, 2);
const answer6 = new Answer(6, 'True', false, 2);
const answer7 = new Answer(7, '5', false, 2);
const answer8 = new Answer(8, '"5"', false, 2);

const answer9 = new Answer(9, '0bject.keys(point)', true, 3);
const answer10 = new Answer(10, 'point.listKeys()', false, 3);
const answer11 = new Answer(11, 'point.list()', false, 3);
const answer12 = new Answer(12, 'Not possible', false, 3);

const answer13 = new Answer(13, '{a: 1, b: 2, c: 3}', false, 4);
const answer14 = new Answer(14, '{c: 3}', false, 4);
const answer15 = new Answer(15, '{c:3, a: 1, b: 2}', true, 4);
const answer16 = new Answer(16, '{a: 1}', false, 4);

const answer17 = new Answer(17, 'To Kill a Mockingbird by Harper Lee, 324 pages', true, 5);
const answer18 = new Answer(18, 'undefined by John Doe, 324 pages', false, 5);
const answer19 = new Answer(19, '100 100 undefined', false, 5);
const answer20 = new Answer(20, 'To Kill a Mockingbird by John Doe, 324 pages', false, 5);

const answer21 = new Answer(21, 'shape.show = function() { console.log(`${this.x} ${this.y}`); };', true, 6);
const answer22 = new Answer(22, 'point.show = () => console.log(${shape.x} ${shape.y});', false, 6);
const answer23 = new Answer(23, 'shape.show = () => console.log(${this.x} ${this.y});', false, 6);
const answer24 = new Answer(24, 'point.show = function(){console.log(${this.x} ${this.y})};', false, 6);

const answer25 = new Answer(25, 'building("height")', false, 7);
const answer26 = new Answer(26, 'building.height', true, 7);
const answer27 = new Answer(27, 'building["height"]', false, 7);
const answer28 = new Answer(28, 'building.height();', false, 7);

const answer29 = new Answer(29, 'Number.isNaN(number)', false, 8);
const answer30 = new Answer(30, 'number.isInteger()', false, 8);
const answer31 = new Answer(31, 'Math.ceil(number) === number', false, 8);
const answer32 = new Answer(32, 'number % 1 === 0', true, 8);

const answer33 = new Answer(33, '200 100', false, 9);
const answer34 = new Answer(34, '0 100', false, 9);
const answer35 = new Answer(35, '100 200', false, 9);
const answer36 = new Answer(36, '0 200', true, 9);

const answer37 = new Answer(37, '{a: 1}', false, 10);
const answer38 = new Answer(38, 'undefined', false, 10);
const answer39 = new Answer(39, 'null', false, 10);
const answer40 = new Answer(40, '{a: 2}', true, 10);

const answer41 = new Answer(41, "const person = {firstName: 'Jane', lastName: 'Doe', age: 30};", true, 11);
const answer42 = new Answer(42, "const person = new Object('firstName' = 'Jane', 'lastName' = 'Doe', 'age' = 30);", false, 11);
const answer43 = new Answer(43, "const person = {'firstName': 'Jane', 'lastName': 'Doe', 'age': 30};", false, 11);
const answer44 = new Answer(44, "const person('firstName' = 'Jane', 'lastName' = 'Doe', 'age' = 30);", false, 11);

const answer45 = new Answer(45, 'Tesla 2021 red', false, 12);
const answer46 = new Answer(46, 'Tesla 2022 red', true, 12);
const answer47 = new Answer(47, 'Tesla 2021 blue', false, 12);
const answer48 = new Answer(48, 'Tesla 2022 black', false, 12);

const answer49 = new Answer(49, '0', true, 13);
const answer50 = new Answer(50, '100', false, 13);
const answer51 = new Answer(51, 'undefined', false, 13);
const answer52 = new Answer(52, '200', false, 13);

const answer53 = new Answer(53, 'Object.values(person)', true, 14);
const answer54 = new Answer(54, 'person.entries()', false, 14);
const answer55 = new Answer(55, 'person.values()', false, 14);
const answer56 = new Answer(56, 'person.keys()', false, 14);

const answer57 = new Answer(57, 'person["name"]', true, 15);
const answer58 = new Answer(58, 'person->name', false, 15);
const answer59 = new Answer(59, 'name', false, 15);
const answer60 = new Answer(60, 'person[name]', false, 15);

const answer61 = new Answer(61, 'undefined 100', true, 16);
const answer62 = new Answer(62, 'null 100', false, 16);
const answer63 = new Answer(63, 'undefined undefined', false, 16);
const answer64 = new Answer(64, '100 undefined', false, 16);

const answer65 = new Answer(65, 'car.color = "red"', true, 17);
const answer66 = new Answer(66, 'car["color"]["red"]', false, 17);
const answer67 = new Answer(67, 'car.property = "color", "red"', false, 17);
const answer68 = new Answer(68, 'car.new("color", "red")', false, 17);

const answer69 = new Answer(69, '[0, 2, 4, 6]', false, 18);
const answer70 = new Answer(70, '[1, 4, 9, 16]', false, 18);
const answer71 = new Answer(71, '[1, 2, 3, 4]', false, 18);
const answer72 = new Answer(72, '[2, 4, 6, 8]', true, 18);

const answer73 = new Answer(73, 'dog Labrador undefined', false, 19);
const answer74 = new Answer(74, 'cat Labrador undefined', false, 19);
const answer75 = new Answer(75, 'cat Labrador Buddy', false, 19);
const answer76 = new Answer(76, 'dog Labrador Buddy', true, 19);

const answer77 = new Answer(77, 'phone->"brand";', false, 20);
const answer78 = new Answer(78, 'phone.getBrand();', false, 20);
const answer79 = new Answer(79, 'phone[brand];', false, 20);
const answer80 = new Answer(80, 'phone.brand;', true, 20);

const answer81 = new Answer(81, 'x in point', false, 21);
const answer82 = new Answer(82, '"x" in point', true, 21);
const answer83 = new Answer(83, 'point.contains(x)', false, 21);
const answer84 = new Answer(84, 'point.exists(x)', false, 21);

const answer85 = new Answer(85, 'None of the Above', false, 22);
const answer86 = new Answer(86, '10', false, 22);
const answer87 = new Answer(87, '15', true, 22);
const answer88 = new Answer(88, '5', false, 22);

const answer89 = new Answer(89, 'ReferenceError: prop1 is not defined', false, 23);
const answer90 = new Answer(90, 'undefined', false, 23);
const answer91 = new Answer(91, 'null', false, 23);
const answer92 = new Answer(92, '"value1"', true, 23);

const answer93 = new Answer(93, 'undefined undefined 30', false, 24);
const answer94 = new Answer(94, '10 20 undefined', false, 24);
const answer95 = new Answer(95, '10 20 30', true, 24);
const answer96 = new Answer(96, 'undefined 20 30', false, 24);

const answer97 = new Answer(97, '["x", "y", "z"]', true, 25);
const answer98 = new Answer(98, '["10", "20", "30"]', false, 25);
const answer99 = new Answer(99, '[x, y, z]', false, 25);
const answer100 = new Answer(100, '[10, 20, 30]', false, 25);

const answer101 = new Answer(101, '[1, 2, 3, 4, 5, 5]', false, 26);
const answer102 = new Answer(102, '[5, 1, 2, 3, 4]', false, 26);
const answer103 = new Answer(103, '[1, 2, 3, 4]', false, 26);
const answer104 = new Answer(104, '[1, 2, 3, 4, 5]', true, 26);

const answer105 = new Answer(105, '100', false, 27);
const answer106 = new Answer(106, '200', false, 27);
const answer107 = new Answer(107, 'undefined', false, 27);
const answer108 = new Answer(108, '300', true, 27);

const answer109 = new Answer(109, '15', true, 28);
const answer110 = new Answer(110, 'None of the above', false, 28);
const answer111 = new Answer(111, '5', false, 28);
const answer112 = new Answer(112, '10', false, 28);

const answer113 = new Answer(113, '13', true, 29);
const answer114 = new Answer(114, '31', false, 29);
const answer115 = new Answer(115, '11', false, 29);
const answer116 = new Answer(116, '33', false, 29);

const answer117 = new Answer(117, 'age in person', false, 30);
const answer118 = new Answer(118, 'person.contains(age)', false, 30);
const answer119 = new Answer(119, 'age.in(person)', false, 30);
const answer120 = new Answer(120, '"age" in person', true, 30);

const answer121 = new Answer(121, '300', true, 31);
const answer122 = new Answer(122, '100', false, 31);
const answer123 = new Answer(123, 'null', false, 31);
const answer124 = new Answer(124, 'undefined', false, 31);

const answer125 = new Answer(125, 'point.push({z: 300});', false, 32);
const answer126 = new Answer(126, 'point.z = 300', true, 32);
const answer127 = new Answer(127, 'point += {z: 300};', false, 32);
const answer128 = new Answer(128, '0bject.defineProperties(point, {z: 300});', false, 32);

const answer129 = new Answer(129, 'undefined', false, 33);
const answer130 = new Answer(130, '100', false, 33);
const answer131 = new Answer(131, '300', true, 33);
const answer132 = new Answer(132, '200', false, 33);

const answer133 = new Answer(133, 'let x = 10;', false, 34);
const answer134 = new Answer(134, 'let point.add(x, 10)', false, 34);
const answer135 = new Answer(135, 'let point = (x: 10);', false, 34);
const answer136 = new Answer(136, 'let point = {x: 10};', true, 34);

const answer137 = new Answer(137, 'Apple IPhone', false, 35);
const answer138 = new Answer(138, 'Samsung Samsung', false, 35);
const answer139 = new Answer(139, 'Samsung IPhone', false, 35);
const answer140 = new Answer(140, 'Apple Samsung', true, 35);

const answer141 = new Answer(141, 'Object.freeze(point) === true', false, 36);
const answer142 = new Answer(142, 'point.isFreeze()', false, 36);
const answer143 = new Answer(143, 'point.isFrozen()', false, 36);
const answer144 = new Answer(144, 'Object.isFrozen(point)', true, 36);

const answer145 = new Answer(145, '100 0 300', false, 37);
const answer146 = new Answer(146, '0 100 300', true, 37);
const answer147 = new Answer(147, '100 200 undefined', false, 37);
const answer148 = new Answer(148, '100 200 300', false, 37);

const answer149 = new Answer(149, '0 0',false, 38);
const answer150 = new Answer(150, '0 100', false, 38);
const answer151 = new Answer(151, '100 100', false, 38);
const answer152 = new Answer(152, '100 0', true, 38);

const answer153 = new Answer(153, '100 100 200',false, 39);
const answer154 = new Answer(154, '0 0 200', false, 39);
const answer155 = new Answer(155, '0 100 200', true, 39);
const answer156 = new Answer(156, '100 0 200', false, 39);

const answer157 = new Answer(157, '100 100 300',true, 40);
const answer158 = new Answer(158, '0 100 300', false, 40);
const answer159 = new Answer(159, '200 100 300', false, 40);
const answer160 = new Answer(160, '300 100 300', false, 40);

const answer161 = new Answer(161, 'true true true',true, 41);
const answer162 = new Answer(162, 'false true false', false, 41);
const answer163 = new Answer(163, 'true false false', false, 41);
const answer164 = new Answer(164, 'false false false', false, 41);

const answer165 = new Answer(165, 'Dog',false, 42);
const answer166 = new Answer(166, 'Animal', false, 42);
const answer167 = new Answer(167, 'true', true, 42);
const answer168 = new Answer(168, 'false', false, 42);




const card1 = new Card(1, 'What expression will return if:\n\nlet shape1 = { x:10, y:20 };\nlet shape2 = { x:10, y:20 };\n\nhave the same property values?', 1, [answer1, answer2, answer3, answer4]);

const card2 = new Card(2, 'What is the output of the following JavaScript code?\n\nlet num = 5;\nlet str = "5";\nconsole.log(num === str);\n', 1, [answer5, answer6, answer7, answer8]);

const card3 = new Card(3, 'How can you list all the keys of the object "point"?', 1, [answer9, answer10, answer11, answer12]);

const card4 = new Card(4, 'What will be the result of executing the following code:\n\nlet obj1 = {a: 1};\nlet obj2 = {b: 2};\nlet obj3 = Object.assign({c: 3}, obj1, obj2);\nconsole.log(obj3);', 1, [answer13, answer14, answer15, answer16]);

const card5 = new Card(5, 'What will appear on the console after executing the following code?\n\nlet book = { title: "To Kill a Mockingbird", author: "Harper Lee" };\nlet library = Object.assign({}, book, {pages: 324});\nbook.author = "John Doe";\nconsole.log(`${library.title} by ${library.author}, ${library.pages} pages`);', 1, [answer17, answer18, answer19, answer20]);

const card6 = new Card(6, 'Given the following code:\n\nlet shape = {x: 100, y: 100};\n//insert line here\nshape.show();\n\nWhat is the correct missing line in order for the console to show the following after running the whole code: 100 100,', 1, [answer21, answer22, answer23, answer24]);

const card7 = new Card(7, 'What is the correct way to access the height property in the building object:\n\n{ name: "Empire State Building", height: 443.2 }', 1, [answer25, answer26, answer27, answer28]);

const card8 = new Card(8, 'What is the correct way to check if a number is an integer in JavaScript?', 1, [answer29, answer30, answer31, answer32]);

const card9 = new Card(9, 'What will appear on the console after executing the following code?\n\n let shape1 = {x: 100, y: 200};\n let shape2 = shape1;\n shape2.x = 0;\n console.log(`${shape1.x} ${shape2.y}`);', 1, [answer33, answer34, answer35, answer36]);

const card10 = new Card(10, 'What will be the value of foo after executing the following code:\n\nlet obj = {a: 1};\nlet foo = obj;\nobj.a = 2;', 1, [answer37, answer38, answer39, answer40]);

const card11 = new Card(11, 'What is the correct way to define an object "person" with properties "firstName", "lastName", and "age"?', 1, [answer41, answer42, answer43, answer44]);

const card12 = new Card(12, 'What will appear on the console after executing the following code? let car = { model: "Tesla", year: 2022 }; let vehicle = {...car, color: "red"}; car.year = 2021; console.log(`${vehicle.model} ${vehicle.year} ${vehicle.color}`);', 1, [answer45, answer46, answer47, answer48]);

const card13 = new Card(
    13,
    'What will be the value of "point.x" after executing the following code? let point = {x: 100, y: 200}; let point2 = point; point2.x = 0;',
    1,
    [answer49, answer50, answer51, answer52]
  );
  
  const card14 = new Card(
    14,
    'How can you list the values assigned to all properties of the person object { name: "Emily", age: 25, city: "New York" }?',
    1,
    [answer53, answer54, answer55, answer56]
  );
  
  const card15 = new Card(
    15,
    'What is the correct way to access the name property in the person object { "name": "Jane Doe" }?',
    1,
    [answer57, answer58, answer59, answer60]
  );
  
  const card16 = new Card(
    16,
    'What will appear on the console after executing the following code? let point = {x: 100, y: 200}; let point2 = {...point, z: 300}; delete point.x; console.log(${point.x} ${point2.x});',
    1,
    [answer61, answer62, answer63, answer64]
  );
  
  const card17 = new Card(
    17,
    'What is the expression that will add a new property color with a value of "red" to the car object { model: "Tesla", year: 2022 }?',
    1,
    [answer65, answer66, answer67, answer68]
  );

const card18 = new Card(
    18,
    `What is the output of the following code:
    let numbers = [1, 2, 3, 4];
    let newNumbers = numbers.map(function(number) { return number * 2; }); console.log(newNumbers);`,
    1,
    [answer69, answer70, answer71, answer72]);

const card19 = new Card(
    19,
    `What will appear on the console after executing the following code?
    let animal = { species: "dog", breed: "Labrador" };
    let pet = { ...animal, name: "Buddy" };
    animal.species = "cat";
    console.log("\${pet.species} \${pet.breed} \${pet.name}");`,
    1,
    [answer73, answer74, answer75, answer76]);

const card20 = new Card(
    20,
    'What is the correct way to access the value of property "brand" in object "phone"?',
    1,
    [answer77, answer78, answer79, answer80]);

const card21 = new Card(
    21,
    'Which of the following expressions returns true if the object "point" has a property "x"?',
    1,
    [answer81, answer82, answer83, answer84]);

const card22 = new Card(
    22,
    'What will be the value of x after the following code is executed? let x = 10;\n' +
    'function add5(num) { num += 5;\n' +
    'return num;\n' +
    '}\n' +
    'x = add5(x);\n',
    1,
    [answer85, answer86, answer87, answer88]);

const card23 = new Card(23, 'What is the output of the following code? let object1 = { prop1: "value1" }; let object2 = Object.create(object1); object2.prop2 = "value2"; delete object2.prop1; console.log(object2.prop1);', 1, [answer89, answer90, answer91, answer92]);

const card24 = new Card(24, 'What is the output of the following code? let obj1 = {a: 10, b: 20}; let obj2 = Object.create(obj1); obj2.c = 30; console.log(obj2.a + " " + obj2.b + " " + obj2.c);', 1, [answer93, answer94, answer95, answer96]);

const card25 = new Card(25, 'What will be the output of the following JavaScript code? let x = 10; let y = 20; let z = 30; let obj = {x, y, z}; console.log(Object.keys(obj));', 1, [answer97, answer98, answer99, answer100]);

const card26 = new Card(26, 'What will be the output of the following code? let arr = [1, 2, 3, 4]; let arr2 = arr; arr2.push(5); console.log(arr);', 1, [answer101, answer102, answer103, answer104]);

const card27 = new Card(27, 'What is the value of property "z" after executing the following code? let obj = {x: 100, y: 200}; let obj2 = Object.create(obj); obj2.z = 300;', 1, [answer105, answer106, answer107, answer108]);

const card28 = new Card (28, 'What will be the value of obj.property after the following code ' +
    'is executed? ' +
    'let obj = {property: 10}; ' +
    'function add5(o) { ' +
    'o.property += 5; ' +
    'return o; ' +
    '} ' +
    'obj = add5(obj);', 1, [answer109, answer110, answer111, answer112]);

const card29 = new Card (29, 'What is the output of the following JavaScript code? ' +
    'let obj = {a: 1, b: 2};' +
    'let clone = 0bject.assign({}, obj); clone.a = 3;' +
    'console.log(obj.a, clone.a);', 1, [answer113, answer114, answer115, answer116]);

const card30 = new Card (30, 'What is the expression that will check if the key age is present in the person object ' +
    '{ name: "John Smith", age: 32 };', 1, [answer117, answer118, answer119, answer120]);

const card31 = new Card (31, 'What is the value of "z" after executing the following code? ' +
    'let point = {x: 100, y: 200}; ' +
    'let point2 = 0bject.create(point); ' +
    'point2.z = 300;', 1, [answer121, answer122, answer123, answer124]);

const card32 = new Card (32, 'What is the correct way to add property "z" to object "point" with value 300?', 1, [answer125, answer126, answer127, answer128]);                    

const card33 = new Card(33, 'What is the value of property "y" in object "point2" ' +
    'after the following code is executed? \n let point = {x: 100, y: 200};\n' +
    'let point2 = {...point};\n point2.y = 300;',
    1, [answer129, answer130, answer131, answer132]);

const card34 = new Card(34, 'What should be the declaration of the "point" object ' +
    'so that when you call "console.log(point.x)", the value of x appears in the console?',
    1, [answer133, answer134, answer135, answer136]);

const card35 = new Card(35, 'What will appear on the console after executing the following code? let phone = { brand: "Apple", model: "iPhone" };\n' +
    'let cell = phone; cell.model = "Samsung";\n' +
    'console.log(`${phone.brand} ${phone.model}`);\n',
    1, [answer137, answer138, answer139, answer140]);

const card36 = new Card(36, 'How can you check if the object "point" is frozen?',
    1, [answer141, answer142, answer143, answer144]);

const card37 = new Card(37, 'What will be the output of the following code? let point = {x: 100, y: 100};\n' +
    'let point2 = Object.assign({}, point, {x: 0, z: 300}); console.log(${point2.x} ${point2.y} ${point2.z});\n',
    1, [answer145, answer146, answer147, answer148]);

const card38 = new Card(38, 'What will appear on the console after executing the following code?' +
    'let point = {x: 100, y: 200};' +
    'let point2 = object.assign({}, point);' +
    'point2.x = 0;' +
    'console.log(${point.x} ${point2.x});', 1, [answer149, answer150, answer151, answer152]);

const card39 = new Card(39, 'What will appear on the console after executing the following code?' +
    'let shape = {x: 100, y: 100};' +
    'let shape2 = object.assign({}, shape, {x: 0, z: 200});' +
    'shape.y = 0;' +
    'console.log(`${shape2.x} ${shape2.y} ${shape2.z}`);', 1, [answer153, answer154, answer155, answer156]);

const card40 = new Card(40, 'What will appear on the console after executing the following code?' +
    'let shape = {x: 100, y: 100};' +
    'let shape2 = {...shape, z: 300};' +
    'shape.x = 0;' +
    'console.log(`${shape2.x} ${shape2.y} ${shape2.z}`);', 1, [answer157, answer158, answer159, answer160]);

const card41 = new Card(41, 'What will appear in the console as a result of executing the following code snippet?' +
    'class Person{}' +
    'class Employee extends Person{} class Manager extends Employee{} let manager = new Manager();' +
    'console.log(`${manager instanceof Person} ${manager instanceof Employee} ${manager instanceof Manager}`);',
    1, [answer161, answer162, answer163, answer164]);

const card42 = new Card(42, 'What is the output of the following code snippet?' + 
    'class Animal {};' +
    'class Dog extends Animal {}; let dog = new Dog();' +
    'console.log(dog instanceof Animal);', 1, [answer165, answer166, answer167, answer168]);


export {
  card1, card2, card3, card4, card5, card6, card7, card8, card9, card10,
  card11, card12, card13, card14, card15, card16, card17, card18, card19, card20,
  card21, card22, card23, card24, card25, card26, card27, card28, card29, card30,
  card31, card32, card33, card34, card35, card36, card37, card38, card39, card40,
  card41, card42
};