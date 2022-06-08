// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug40794.phpt
  it("Bug #40794 (ReflectionObject::getValues() may crash when used with dynamic properties)", function () {
    expect(parser.parseCode("<?php\n$obj = new stdClass();\n$obj->prop1 = '1';\n$obj->prop2 = '2';\n$obj->prop3 = '3';\n$reflect = new ReflectionObject($obj);\n$array = array();\nforeach($reflect->getProperties() as $prop)\n{\n    $array[$prop->getName()] = $prop->getValue($obj);\n}\nvar_dump($array);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
