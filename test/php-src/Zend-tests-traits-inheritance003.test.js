// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/inheritance003.phpt
  it("Trait method overrides base class method and satisfies prototype", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\nabstract class Base {\n   public abstract function sayHello(array $a);\n}\nclass SubClass extends Base {\n   public function sayHello(array $a) {\n     echo \"World!\\n\";\n   }\n}\n$s = new SubClass();\n$s->sayHello(array());\ntrait SayWorld {\n   public function sayHello(Base $d) {\n     echo 'World!';\n   }\n}\nclass MyHelloWorld extends Base {\n   use SayWorld;\n}\n$o = new MyHelloWorld();\n$o->sayHello(array());\n?>")).toMatchSnapshot();
  });
});
