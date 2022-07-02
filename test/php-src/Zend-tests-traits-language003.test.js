// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/language003.phpt
  it("Use instead to solve a conflict.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait Hello {\n   public function saySomething() {\n     echo 'Hello';\n   }\n}\ntrait World {\n   public function saySomething() {\n     echo 'World';\n   }\n}\nclass MyHelloWorld {\n   use Hello, World {\n     Hello::saySomething insteadof World;\n   }\n}\n$o = new MyHelloWorld();\n$o->saySomething();\n?>")).toMatchSnapshot();
  });
});
