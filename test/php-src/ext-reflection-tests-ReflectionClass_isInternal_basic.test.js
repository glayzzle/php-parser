// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isInternal_basic.phpt
  it("ReflectionClass::isInternal()", function () {
    expect(parser.parseCode("<?php\nclass C {\n}\n$r1 = new ReflectionClass(\"stdClass\");\n$r2 = new ReflectionClass(\"ReflectionClass\");\n$r3 = new ReflectionClass(\"ReflectionProperty\");\n$r4 = new ReflectionClass(\"Exception\");\n$r5 = new ReflectionClass(\"C\");\nvar_dump($r1->isInternal(), $r2->isInternal(), $r3->isInternal(),\n         $r4->isInternal(), $r5->isInternal());\n?>")).toMatchSnapshot();
  });
});
