// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/language008b.phpt
  it("Visibility can be changed with the as aliasing construct as well.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait HelloWorld {\n   public function sayHello() {\n     echo 'Hello World!';\n   }\n}\nclass MyClass {\n   use HelloWorld { sayHello as private sayHelloWorld; }\n   public function callPrivateAlias() {\n      $this->sayHelloWorld();\n   }\n}\n$o = new MyClass();\n$o->sayHello();\n$o->callPrivateAlias();\n$o->sayHelloWorld();\n?>")).toMatchSnapshot();
  });
});
