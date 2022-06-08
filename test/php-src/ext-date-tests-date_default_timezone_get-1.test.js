// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_default_timezone_get-1.phpt
  it("date_default_timezone_get() function [1]", function () {
    expect(parser.parseCode("<?php\n    putenv('TZ=');\n    echo date_default_timezone_get(), \"\\n\";\n    echo date('e'), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
