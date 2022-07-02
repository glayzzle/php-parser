// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/misc/time_sleep_until_error1.phpt
  it("time_sleep_until() function - error test for time_sleep_until()", function () {
    expect(parser.parseCode("<?php\nvar_dump(time_sleep_until(time() -1));\n?>")).toMatchSnapshot();
  });
});
