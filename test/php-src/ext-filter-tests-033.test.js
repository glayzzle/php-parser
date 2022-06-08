// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/033.phpt
  it("Test all filters returned by filter_list()", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . '/033_run.inc';\n?>")).toMatchSnapshot();
  });
});
