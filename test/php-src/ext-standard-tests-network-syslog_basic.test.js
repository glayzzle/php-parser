// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/syslog_basic.phpt
  it("Test syslog() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing syslog() : basic functionality ***\\n\";\n// Initialise all required variables\n$priority = LOG_WARNING;\n$message = 'A test syslog call invocation';\n// Calling syslog() with all possible arguments\nvar_dump( syslog($priority, $message) );\n?>")).toMatchSnapshot();
  });
});
