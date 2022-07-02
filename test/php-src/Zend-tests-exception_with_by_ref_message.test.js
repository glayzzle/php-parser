// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_with_by_ref_message.phpt
  it("Exception with by-ref message", function () {
    expect(parser.parseCode("<?php\nclass MyException extends Exception\n{\n    public function __construct(&$msg) {\n        $this->message =& $msg;\n    }\n}\n$msg = 'Message';\nthrow new MyException($msg);\n?>")).toMatchSnapshot();
  });
});
