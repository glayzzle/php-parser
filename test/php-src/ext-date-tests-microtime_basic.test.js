// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/microtime_basic.phpt
  it("Test return type and value for expected input microtime()", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/microtime.c\n*/\nvar_dump(microtime());\nvar_dump(microtime(true));\nvar_dump(microtime(false));\n?>")).toMatchSnapshot();
  });
});
