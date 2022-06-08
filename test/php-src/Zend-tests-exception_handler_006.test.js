// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_handler_006.phpt
  it("exception handler tests - 6", function () {
    expect(parser.parseCode("<?php\nset_exception_handler(\"foo\");\nset_exception_handler(\"foo1\");\nrestore_exception_handler();\nfunction foo($e) {\n    var_dump(__FUNCTION__.\"(): \".get_class($e).\" thrown!\");\n}\nfunction foo1($e) {\n    var_dump(__FUNCTION__.\"(): \".get_class($e).\" thrown!\");\n}\nthrow new excEption();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
