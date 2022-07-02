// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/conflict002.phpt
  it("Overwritten methods do not cause a conflict.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait HelloWorld {\n   public function sayHello() {\n     echo 'Hello World!';\n   }\n}\ntrait HelloWorld2 {\n   public function sayHello() {\n     echo 'Hello World2!';\n   }\n}\nclass TheWorldIsNotEnough {\n   use HelloWorld;\n   use HelloWorld2;\n   public function sayHello() {\n     echo 'Hello Universe!';\n   }\n}\n$o = new TheWorldIsNotEnough();\n$o->sayHello(); // echos Hello Universe!\n?>")).toMatchSnapshot();
  });
});
