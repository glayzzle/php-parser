// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/misc/syslog_basic.phpt
  it("Basic syslog test", function () {
    expect(parser.parseCode("<?php\nopenlog('phpt', LOG_NDELAY | LOG_PID, LOG_USER);\nsyslog(LOG_WARNING, 'Basic syslog test');\ncloselog();\n?>\n===DONE===")).toMatchSnapshot();
  });
});
