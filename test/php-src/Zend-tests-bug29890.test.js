// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug29890.phpt
  it("Bug #29890 (crash if error handler fails)", function () {
    expect(parser.parseCode("<?php\nfunction customErrorHandler($fErrNo,$fErrStr,$fErrFile,$fErrLine) {\necho \"error :\".$fErrStr.\"\\n\";\n}\nset_time_limit(5);\nerror_reporting(E_ALL);\nset_error_handler(\"customErrorHandler\");\ndefine(\"TEST\",2);\n//should return a notice that the constant is already defined\ndefine(\"TEST\",3);\n?>")).toMatchSnapshot();
  });
});
