// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isInstantiable_basic.phpt
  it("ReflectionClass::IsInstantiable()", function () {
    expect(parser.parseCode("<?php\nclass C {\n}\ninterface iface {\n    function f1();\n}\nclass ifaceImpl implements iface {\n    function f1() {}\n}\nabstract class abstractClass {\n    function f1() {}\n    abstract function f2();\n}\nclass D extends abstractClass {\n    function f2() {}\n}\n$classes = array(\"C\", \"iface\", \"ifaceImpl\", \"abstractClass\", \"D\");\nforeach($classes  as $class ) {\n    $reflectionClass = new ReflectionClass($class);\n    echo \"Is $class instantiable?  \";\n    var_dump($reflectionClass->IsInstantiable());\n}\n?>")).toMatchSnapshot();
  });
});
