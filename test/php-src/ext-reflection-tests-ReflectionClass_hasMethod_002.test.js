// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_hasMethod_002.phpt
  it("ReflectionClass::hasMethod() - error cases", function () {
    expect(parser.parseCode("<?php\nclass C {\n    function f() {}\n}\n$rc = new ReflectionClass(\"C\");\necho \"Check invalid params:\\n\";\nvar_dump($rc->hasMethod(1));\nvar_dump($rc->hasMethod(1.5));\nvar_dump($rc->hasMethod(true));\n?>")).toMatchSnapshot();
  });
});
