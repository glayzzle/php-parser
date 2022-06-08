// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionObject_isInstantiable_basic.phpt
  it("ReflectionObject::IsInstantiable() - basic function test", function () {
    expect(parser.parseCode("<?php\nclass C {\n}\ninterface iface {\n    function f1();\n}\nclass ifaceImpl implements iface {\n    function f1() {}\n}\nabstract class abstractClass {\n    function f1() {}\n    abstract function f2();\n}\nclass D extends abstractClass {\n    function f2() {}\n}\n$classes = array(\"C\", \"ifaceImpl\", \"D\");\nforeach($classes  as $class ) {\n    $ro = new ReflectionObject(new $class);\n    echo \"Is $class instantiable?  \";\n    var_dump($ro->IsInstantiable());\n}\n?>")).toMatchSnapshot();
  });
});
