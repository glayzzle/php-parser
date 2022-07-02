// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/language011.phpt
  it("Aliasing on conflicting method should not cover up conflict.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait Hello {\n   public function sayHello() {\n     echo 'Hello';\n   }\n}\ntrait World {\n   public function sayHello() {\n     echo ' World!';\n   }\n}\nclass MyClass {\n   use Hello, World { World::sayHello as sayWorld; }\n}\n$o = new MyClass();\n$o->sayHello();\n$o->sayWorld();\n?>")).toMatchSnapshot();
  });
});
