// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_default_timezone_get-3.phpt
  it("date_default_timezone_get() function [3]", function () {
    expect(parser.parseCode("<?php\n    echo date_default_timezone_get(), \"\\n\";\n    date_default_timezone_set(\"America/Chicago\");\n    echo date_default_timezone_get(), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
