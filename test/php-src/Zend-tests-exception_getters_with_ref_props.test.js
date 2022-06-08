// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_getters_with_ref_props.phpt
  it("Calling exception getters when properties hold references", function () {
    expect(parser.parseCode("<?php\nclass MyException extends Exception {\n    public function __construct(&$refMsg, &$refCode, &$refFile, &$refLine) {\n        $this->message =& $refMsg;\n        $this->code =& $refCode;\n        $this->file =& $refFile;\n        $this->line =& $refLine;\n    }\n}\n$refMsg = \"foo\";\n$refCode = 0;\n$refFile = \"foobar\";\n$refLine = 42;\n$ex = new MyException($refMsg, $refCode, $refFile, $refLine);\nvar_dump($ex->getMessage());\nvar_dump($ex->getCode());\nvar_dump($ex->getFile());\nvar_dump($ex->getLine());\n?>")).toMatchSnapshot();
  });
});
