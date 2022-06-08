// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getConstant_error.phpt
  it("ReflectionClass::getConstant() - bad params", function () {
    expect(parser.parseCode("<?php\nclass C {\n    const myConst = 1;\n}\n$rc = new ReflectionClass(\"C\");\necho \"Check invalid params:\\n\";\nvar_dump($rc->getConstant(1));\nvar_dump($rc->getConstant(1.5));\nvar_dump($rc->getConstant(true));\n?>")).toMatchSnapshot();
  });
});
