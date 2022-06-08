// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/date/tests/bug67308.phpt
  it("Bug #67308 (Serialize of DateTime truncates fractions of second)", function () {
    expect(parser.parseCode("<?php\n// Ensure we can still unserialize the old style.\nvar_dump(unserialize('O:8:\"DateTime\":3:{s:4:\"date\";s:19:\"2005-07-14 22:30:41\";s:13:\"timezone_type\";i:3;s:8:\"timezone\";s:13:\"Europe/London\";}'));\n// New style.\nvar_dump(unserialize('O:8:\"DateTime\":3:{s:4:\"date\";s:26:\"2005-07-14 22:30:41.123456\";s:13:\"timezone_type\";i:3;s:8:\"timezone\";s:13:\"Europe/London\";}'));\n?>")).toMatchSnapshot();
  });
});
