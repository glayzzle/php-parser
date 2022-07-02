// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug78868.phpt
  it("Bug #78868: Calling __autoload() with incorrect EG(fake_scope) value", function () {
    expect(parser.parseCode("<?php\nclass C {\n    private $private = 1;\n    function foo() {\n        $this->private++; //fails with EG(fake_scope) != NULL && EG(fake_scope) != \"C\"\n    }\n}\nclass A {\n    static $foo = B::foo; //not resolved on include()\n}\nfunction main_autoload($class_name) {\n    $c = new C;\n    $c->foo();\n    //doesn't affect the error\n    eval(\"class B {const foo = 1;}\");\n}\nspl_autoload_register('main_autoload');\n$classA = new ReflectionClass(\"A\");\n$props = $classA->getProperties();\n$props[0]->setValue(2); //causes constant resolving, which runs autoload, all with EG(fake_scope) == \"A\"\necho \"OK\\n\";\n?>")).toMatchSnapshot();
  });
});
