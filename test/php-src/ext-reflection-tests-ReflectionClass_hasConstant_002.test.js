// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_hasConstant_002.phpt
  it("ReflectionClass::hasConstant() - error cases", function () {
    expect(parser.parseCode("<?php\nclass C {\n    const myConst = 1;\n}\n$rc = new ReflectionClass(\"C\");\necho \"Check invalid params:\\n\";\nvar_dump($rc->hasConstant(1));\nvar_dump($rc->hasConstant(1.5));\nvar_dump($rc->hasConstant(true));\n?>")).toMatchSnapshot();
  });
});
