// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionParameter_isDefault.phpt
  it("ReflectionParameter::isDefault()", function () {
    expect(parser.parseCode("<?php\nclass A {\npublic $defprop;\n}\n$a = new A;\n$a->myprop = null;\n$ro = new ReflectionObject($a);\n$props = $ro->getProperties();\n$prop1 = $props[0];\nvar_dump($prop1->isDefault());\n$prop2 = $props[1];\nvar_dump($prop2->isDefault());\nvar_dump($ro->getProperty('defprop')->isDefault());\nvar_dump($ro->getProperty('myprop')->isDefault());\n$prop1 = new ReflectionProperty($a, 'defprop');\n$prop2 = new ReflectionProperty($a, 'myprop');\nvar_dump($prop1->isDefault());\nvar_dump($prop2->isDefault());\n?>")).toMatchSnapshot();
  });
});
