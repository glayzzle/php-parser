// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/inheritance002.phpt
  it("Trait method overriddes base class method", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nclass Base {\n   public function sayHello() {\n     echo 'Hello ';\n   }\n}\ntrait SayWorld {\n   public function sayHello() {\n     echo 'World!';\n   }\n}\nclass MyHelloWorld extends Base {\n   use SayWorld;\n}\n$o = new MyHelloWorld();\n$o->sayHello();\n?>")).toMatchSnapshot();
  });
});
