// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/date_default_timezone_get-2.phpt
  it("date_default_timezone_get() function [2]", function () {
    expect(parser.parseCode("<?php\n    putenv('TZ=');\n    echo date_default_timezone_get(), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
