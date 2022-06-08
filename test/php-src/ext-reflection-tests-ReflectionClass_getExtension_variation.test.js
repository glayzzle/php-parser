// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getExtension_variation.phpt
  it("ReflectionClass::getExtension() method - variation test for getExtension()", function () {
    expect(parser.parseCode("<?php\n    class myClass\n    {\n        public $varX;\n        public $varY;\n    }\n    $rc=new reflectionClass('myClass');\n    var_dump( $rc->getExtension()) ;\n?>")).toMatchSnapshot();
  });
});
