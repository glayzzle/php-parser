// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_default_timezone_get-4.phpt
  it("date_default_timezone_get() function [4]", function () {
    expect(parser.parseCode("<?php\n    echo date_default_timezone_get(), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
