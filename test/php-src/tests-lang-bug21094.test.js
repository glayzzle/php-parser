// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/bug21094.phpt
  it("Bug #21094 (set_error_handler not accepting methods)", function () {
    expect(parser.parseCode("<?php\nclass test {\n    function hdlr($errno, $errstr, $errfile, $errline) {\n        printf(\"[%d] errstr: %s, errfile: %s, errline: %d\\n\", $errno, $errstr, $errfile, $errline, $errstr);\n    }\n}\nset_error_handler(array(new test(), \"hdlr\"));\ntrigger_error(\"test\");\n?>")).toMatchSnapshot();
  });
});
