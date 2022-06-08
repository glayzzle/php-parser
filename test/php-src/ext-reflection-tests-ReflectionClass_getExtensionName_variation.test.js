// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getExtensionName_variation.phpt
  it("ReflectionClass::getExtensionName() method - variation test for getExtensionName()", function () {
    expect(parser.parseCode("<?php\n    class myClass\n    {\n        public $varX;\n        public $varY;\n    }\n    $rc=new reflectionClass('myClass');\n    var_dump( $rc->getExtensionName()) ;\n?>")).toMatchSnapshot();
  });
});
