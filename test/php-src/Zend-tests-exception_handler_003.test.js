// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/exception_handler_003.phpt
  it("exception handler tests - 3", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function foo () {\n        set_exception_handler(array($this, \"bar\"));\n    }\n    function bar($e) {\n        var_dump(get_class($e).\" thrown!\");\n    }\n}\n$a = new test;\n$a->foo();\nthrow new Exception();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
