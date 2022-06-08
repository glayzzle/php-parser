// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/sleep_error.phpt
  it("Test sleep() function : error conditions", function () {
    expect(parser.parseCode("<?php\nsleep(-10);\n?>")).toMatchSnapshot();
  });
});
