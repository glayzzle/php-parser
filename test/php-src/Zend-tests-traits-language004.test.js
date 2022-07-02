// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/language004.phpt
  it("Use instead to solve a conflict and as to access the method.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait Hello {\n   public function saySomething() {\n     echo 'Hello';\n   }\n}\ntrait World {\n   public function saySomething() {\n     echo ' World';\n   }\n}\nclass MyHelloWorld {\n   use Hello, World {\n     Hello::saySomething insteadof World;\n     World::saySomething as sayWorld;\n   }\n}\n$o = new MyHelloWorld();\n$o->saySomething();\n$o->sayWorld();\n?>")).toMatchSnapshot();
  });
});
