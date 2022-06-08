// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/language002.phpt
  it("Use multiple traits.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait Hello {\n   public function sayHello() {\n     echo 'Hello ';\n   }\n}\ntrait World {\n   public function sayWorld() {\n     echo 'World';\n   }\n}\nclass MyHelloWorld {\n   use Hello, World;\n   public function sayExclamationMark() {\n     echo '!';\n   }\n}\n$o = new MyHelloWorld();\n$o->sayHello();\n$o->sayWorld();\n$o->sayExclamationMark();\n?>")).toMatchSnapshot();
  });
});
