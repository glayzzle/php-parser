// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_handler_002.phpt
  it("exception handler tests - 2", function () {
    expect(parser.parseCode("<?php\nset_exception_handler(\"foo\");\nfunction foo($e) {\n    var_dump(get_class($e).\" thrown!\");\n    throw new Exception();\n}\nclass test extends Exception {\n}\nthrow new test();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
