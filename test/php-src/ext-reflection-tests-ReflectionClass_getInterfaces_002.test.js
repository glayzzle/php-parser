// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getInterfaces_002.phpt
  it("ReflectionClass::getInterfaces() - interface ordering.", function () {
    expect(parser.parseCode("<?php\ninterface I1 {}\ninterface I2 {}\ninterface I3 {}\ninterface I4 extends I3 {}\ninterface I5 extends I4 {}\ninterface I6 extends I5, I1, I2 {}\ninterface I7 extends I6 {}\n$rc = new ReflectionClass('I7');\n$interfaces = $rc->getInterfaces();\nprint_r($interfaces);\n?>")).toMatchSnapshot();
  });
});
