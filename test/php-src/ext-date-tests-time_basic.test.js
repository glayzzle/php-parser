// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/time_basic.phpt
  it("Test return type and value for expected input time()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/date/php_date.c\n*/\nvar_dump(time());\n?>")).toMatchSnapshot();
  });
});
