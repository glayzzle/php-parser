// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/inheritance001.phpt
  it("Trait method overwritten by a method defined in the class.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait HelloWorld {\n   public function sayHello() {\n     echo 'Hello World!';\n   }\n}\nclass TheWorldIsNotEnough {\n   use HelloWorld;\n   public function sayHello() {\n     echo 'Hello Universe!';\n   }\n}\n$o = new TheWorldIsNotEnough();\n$o->sayHello(); // echos Hello Universe!\n?>")).toMatchSnapshot();
  });
});
