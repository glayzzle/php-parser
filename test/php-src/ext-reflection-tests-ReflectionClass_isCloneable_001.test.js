// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isCloneable_001.phpt
  it("Testing ReflectionClass::isCloneable()", function () {
    expect(parser.parseCode("<?php\nclass foo {\n}\n$foo = new foo;\nprint \"User class\\n\";\n$obj = new ReflectionClass($foo);\nvar_dump($obj->isCloneable());\n$obj = new ReflectionObject($foo);\nvar_dump($obj->isCloneable());\n$h = clone $foo;\nclass bar {\n    private function __clone() {\n    }\n}\n$bar = new bar;\nprint \"User class - private __clone\\n\";\n$obj = new ReflectionClass($bar);\nvar_dump($obj->isCloneable());\n$obj = new ReflectionObject($bar);\nvar_dump($obj->isCloneable());\n$h = clone $foo;\nprint \"Closure\\n\";\n$closure = function () { };\n$obj = new ReflectionClass($closure);\nvar_dump($obj->isCloneable());\n$obj = new ReflectionObject($closure);\nvar_dump($obj->isCloneable());\n$h = clone $closure;\nprint \"Internal class - SimpleXMLElement\\n\";\n$obj = new ReflectionClass('simplexmlelement');\nvar_dump($obj->isCloneable());\n$obj = new ReflectionObject(new simplexmlelement('<test></test>'));\nvar_dump($obj->isCloneable());\n$h = clone new simplexmlelement('<test></test>');\nprint \"Internal class - XMLWriter\\n\";\n$obj = new ReflectionClass('xmlwriter');\nvar_dump($obj->isCloneable());\n$obj = new ReflectionObject(new XMLWriter);\nvar_dump($obj->isCloneable());\n$h = clone new xmlwriter;\n?>")).toMatchSnapshot();
  });
});
