// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionObject_getName_basic.phpt
  it("ReflectionObject::getName() - basic function test", function () {
    expect(parser.parseCode("<?php\n$r1 = new ReflectionObject(new stdClass);\nvar_dump($r1->getName());\nclass C { }\n$myInstance = new C;\n$r2 = new ReflectionObject($myInstance);\nvar_dump($r2->getName());\n$r3 = new ReflectionObject($r2);\nvar_dump($r3->getName());\n?>")).toMatchSnapshot();
  });
});
