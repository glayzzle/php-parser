// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/flattening003.phpt
  it("Traits are flattened recurivly.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait Hello {\n   public function sayHello() {\n     echo 'Hello ';\n   }\n}\ntrait World {\n   public function sayWorld() {\n     echo 'World!';\n   }\n}\ntrait HelloWorld {\n   use Hello, World;\n}\nclass MyHelloWorld {\n   use HelloWorld;\n}\n$o = new MyHelloWorld();\n$o->sayHello();\n$o->sayWorld();\n?>")).toMatchSnapshot();
  });
});
