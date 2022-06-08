// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/misc/time_nanosleep_error3.phpt
  it("time_nanosleep — Delay for a number of seconds and nanoseconds", function () {
    expect(parser.parseCode("<?php\ntime_nanosleep(-2, 1000);\n?>")).toMatchSnapshot();
  });
});
