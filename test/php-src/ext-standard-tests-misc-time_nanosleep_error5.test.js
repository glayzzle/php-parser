// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/misc/time_nanosleep_error5.phpt
  it("time_nanosleep — Delay for a number of seconds and nanoseconds", function () {
    expect(parser.parseCode("<?php\ntime_nanosleep(0, 1000000000);\n?>")).toMatchSnapshot();
  });
});
