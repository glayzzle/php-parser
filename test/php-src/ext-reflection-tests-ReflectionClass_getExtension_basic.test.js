// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getExtension_basic.phpt
  it("ReflectionClass::getExtension() method - basic test for getExtension() method", function () {
    expect(parser.parseCode("<?php\n    $rc=new reflectionClass('domDocument');\n    var_dump($rc->getExtension()) ;\n?>")).toMatchSnapshot();
  });
});
