// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/language010.phpt
  it("Aliasing leading to conflict should result in error message", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait Hello {\n   public function hello() {\n     echo 'Hello';\n   }\n}\ntrait World {\n   public function world() {\n     echo ' World!';\n   }\n}\nclass MyClass {\n   use Hello, World { hello as world; }\n}\n$o = new MyClass();\n$o->hello();\n$o->world();\n?>")).toMatchSnapshot();
  });
});
