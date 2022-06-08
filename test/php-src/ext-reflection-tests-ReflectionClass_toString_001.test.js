// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_toString_001.phpt
  it("ReflectionClass::__toString()", function () {
    expect(parser.parseCode("<?php\n$rc = new ReflectionClass(\"ReflectionClass\");\necho $rc;\n?>")).toMatchSnapshot();
  });
});
