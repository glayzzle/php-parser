// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/traits/language006.phpt
  it("Express requirements of a trait by abstract methods.", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL);\ntrait Hello {\n   public function sayHelloWorld() {\n     echo 'Hello'.$this->getWorld();\n   }\n   abstract public function getWorld();\n }\nclass MyHelloWorld {\n   private $world;\n   use Hello;\n   public function getWorld() {\n     return $this->world;\n   }\n   public function setWorld($val) {\n     $this->world = $val;\n   }\n}\n$o = new MyHelloWorld();\n$o->setWorld(' World!');\n$o->sayHelloWorld();\n?>")).toMatchSnapshot();
  });
});
