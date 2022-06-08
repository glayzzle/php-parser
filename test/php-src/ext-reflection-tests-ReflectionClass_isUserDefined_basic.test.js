// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isUserDefined_basic.phpt
  it("ReflectionClass::isUserDefined()", function () {
    expect(parser.parseCode("<?php\nclass C {\n}\n$r1 = new ReflectionClass(\"stdClass\");\n$r2 = new ReflectionClass(\"ReflectionClass\");\n$r3 = new ReflectionClass(\"ReflectionProperty\");\n$r4 = new ReflectionClass(\"Exception\");\n$r5 = new ReflectionClass(\"C\");\nvar_dump($r1->isUserDefined(), $r2->isUserDefined(), $r3->isUserDefined(),\n         $r4->isUserDefined(), $r5->isUserDefined());\n?>")).toMatchSnapshot();
  });
});
