// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/usleep_error.phpt
  it("Test usleep() function : error conditions", function () {
    expect(parser.parseCode("<?php\nusleep(-10);\n?>")).toMatchSnapshot();
  });
});
