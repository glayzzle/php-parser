// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/language007.phpt
  it("Traits can fulfill the requirements of abstract base classes.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nabstract class Base {\n  abstract function sayWorld();\n}\ntrait Hello {\n   public function sayHello() {\n     echo 'Hello';\n   }\n   public function sayWorld() {\n     echo ' World!';\n   }\n }\nclass MyHelloWorld extends Base {\n    use Hello;\n}\n$o = new MyHelloWorld();\n$o->sayHello();\n$o->sayWorld();\n?>")).toMatchSnapshot();
  });
});
