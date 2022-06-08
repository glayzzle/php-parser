// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug70266.phpt
  it("Bug #70266 (DateInterval::__construct.interval_spec is not supposed to be optional)", function () {
    expect(parser.parseCode("<?php\nvar_dump((new ReflectionParameter(['DateInterval', '__construct'], 0))->isOptional());\n?>")).toMatchSnapshot();
  });
});
