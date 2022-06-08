// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/main-global-prefix.phpt
  it("FPM: Main invocation with prefix", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{RFILE:LOG:ERR}}\npid = {{RFILE:PID}}\n[unconfined]\nlisten = {{ADDR}}\naccess.log = {{RFILE:LOG:ACC}}\nslowlog = {{RFILE:LOG:SLOW}}\nrequest_slowlog_timeout = 1\nping.path = /ping\nping.response = pong\npm = dynamic\npm.max_children = 5\npm.start_servers = 2\npm.min_spare_servers = 1\npm.max_spare_servers = 3\nEOT;\n$prefix = __DIR__;\n$tester = new FPM\\Tester($cfg);\n$tester->start(['--prefix', $prefix]);\n$tester->expectLogStartNotices();\n$tester->expectFile(FPM\\Tester::FILE_EXT_LOG_ACC, $prefix);\n$tester->expectFile(FPM\\Tester::FILE_EXT_LOG_ERR, $prefix);\n$tester->expectFile(FPM\\Tester::FILE_EXT_LOG_SLOW, $prefix);\n$tester->expectFile(FPM\\Tester::FILE_EXT_PID, $prefix);\n$tester->ping();\n$tester->terminate();\n$tester->expectLogTerminatingNotices();\n$tester->close();\n$tester->expectNoFile(FPM\\Tester::FILE_EXT_PID, $prefix);\n?>\nDone")).toMatchSnapshot();
  });
});
