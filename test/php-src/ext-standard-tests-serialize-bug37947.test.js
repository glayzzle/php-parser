// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug37947.phpt
  it("Bug #37947 (zend_ptr_stack reallocation problem)", function () {
    expect(parser.parseCode("<?php\nclass test {\n        function extend_zend_ptr_stack($count,$a,$b,$c,$d,$e) {\n                if ($count>0) $this->extend_zend_ptr_stack($count -\n1,$a,$b,$c,$d,$e);\n        }\n        function __wakeup() {\n                $this->extend_zend_ptr_stack(10,'a','b','c','d','e');\n        }\n}\n$str='a:2:{i:0;O:4:\"test\":0:{}junk';\nvar_dump(unserialize($str));\n?>")).toMatchSnapshot();
  });
});
