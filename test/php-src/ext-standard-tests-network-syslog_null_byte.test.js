// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/syslog_null_byte.phpt
  it("Test syslog() function : nul byte in message", function () {
    expect(parser.parseCode("<?php\n$priority = LOG_WARNING;\n$message = \"A simple \\0 message\";\nopenlog('PHPT', LOG_PERROR, LOG_USER);\nsyslog($priority, $message);\n?>")).toMatchSnapshot();
  });
});
