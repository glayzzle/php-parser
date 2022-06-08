// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/builtin_in_write_context_error1.phpt
  it("Cannot use built-in functions in write context (assignment)", function () {
    expect(parser.parseCode("<?php\nstrlen(\"foo\")[0] = 1;\n?>")).toMatchSnapshot();
  });
});
