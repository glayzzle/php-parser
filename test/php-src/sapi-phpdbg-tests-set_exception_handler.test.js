// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/set_exception_handler.phpt
  it("set_exception_handler() in phpdbg", function () {
    expect(parser.parseCode("<?php\nset_exception_handler(function () { print \"EX\\n\"; });\nthrow new Exception(\"test\");\n")).toMatchSnapshot();
  });
});
