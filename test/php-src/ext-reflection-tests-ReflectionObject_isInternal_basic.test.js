// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionObject_isInternal_basic.phpt
  it("ReflectionObject::isInternal() - basic function test", function () {
    expect(parser.parseCode("<?php\nclass C {\n}\n$r1 = new ReflectionObject(new stdClass);\n$r2 = new ReflectionObject(new ReflectionClass('C'));\n$r3 = new ReflectionObject(new ReflectionProperty('Exception', 'message'));\n$r4 = new ReflectionObject(new Exception);\n$r5 = new ReflectionObject(new C);\nvar_dump($r1->isInternal(), $r2->isInternal(), $r3->isInternal(),\n         $r4->isInternal(), $r5->isInternal());\n?>")).toMatchSnapshot();
  });
});
