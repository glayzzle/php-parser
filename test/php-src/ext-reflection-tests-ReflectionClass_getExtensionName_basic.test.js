// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getExtensionName_basic.phpt
  it("ReflectionClass::getExtensionName() method - basic test for getExtensionName() method", function () {
    expect(parser.parseCode("<?php\n    $rc=new reflectionClass('domDocument');\n    var_dump( $rc->getExtensionName()) ;\n?>")).toMatchSnapshot();
  });
});
