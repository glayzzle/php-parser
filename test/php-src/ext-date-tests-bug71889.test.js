// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug71889.phpt
  it("Bug #71889 (DateInterval::format segfault on '%' input)", function () {
    expect(parser.parseCode("<?php\n$di = new DateInterval('P1D');\nvar_dump($di->format(\"%\"));\n?>")).toMatchSnapshot();
  });
});
