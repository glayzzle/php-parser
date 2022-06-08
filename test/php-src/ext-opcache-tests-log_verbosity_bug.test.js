// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/log_verbosity_bug.phpt
  it("Test ACCEL_LOG_FATAL will cause the process to die even if not logged", function () {
    expect(parser.parseCode("<?php\nvar_dump(\"Script should fail\");\n?>")).toMatchSnapshot();
  });
});
