// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionObject_isUserDefined_basic.phpt
  it("ReflectionObject::isUserDefined() - basic function test", function () {
    expect(parser.parseCode("<?php\nclass C {\n}\n$r1 = new ReflectionObject(new stdClass);\n$r2 = new ReflectionObject(new ReflectionClass('C'));\n$r3 = new ReflectionObject(new ReflectionProperty('Exception', 'message'));\n$r4 = new ReflectionObject(new Exception);\n$r5 = new ReflectionObject(new C);\nvar_dump($r1->isUserDefined(), $r2->isUserDefined(), $r3->isUserDefined(),\n         $r4->isUserDefined(), $r5->isUserDefined());\n?>")).toMatchSnapshot();
  });
});
