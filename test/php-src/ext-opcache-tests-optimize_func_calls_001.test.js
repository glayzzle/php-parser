// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/optimize_func_calls_001.phpt
  it("Don't create FETCH_DIM_R with UNUSED op2", function () {
    expect(parser.parseCode("<?php\n// Order matters\ntest($arr[]);\nfunction test($arg) {}\n?>")).toMatchSnapshot();
  });
});
