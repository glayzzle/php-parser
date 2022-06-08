// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/syslog_new_line.phpt
  it("Test syslog() function : new line in message", function () {
    expect(parser.parseCode("<?php\n$priority = LOG_WARNING;\n$message = \"First line\\nSecond line\";\nopenlog('PHPT', LOG_PERROR, LOG_USER);\nsyslog($priority, $message);\n?>")).toMatchSnapshot();
  });
});
