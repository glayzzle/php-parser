// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/pool-prefix.phpt
  it("FPM: Pool prefix", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$prefix = __DIR__;\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\npid = {{FILE:PID}}\n[unconfined]\nprefix = $prefix\nlisten = {{ADDR}}\naccess.log = {{RFILE:LOG:ACC}}\nslowlog = {{RFILE:LOG:SLOW}}\nrequest_slowlog_timeout = 1\nping.path = /ping\nping.response = pong\npm = dynamic\npm.max_children = 5\npm.start_servers = 2\npm.min_spare_servers = 1\npm.max_spare_servers = 3\nEOT;\n$tester = new FPM\\Tester($cfg);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->ping();\n$tester->expectFile(FPM\\Tester::FILE_EXT_LOG_ACC, $prefix);\n$tester->expectFile(FPM\\Tester::FILE_EXT_LOG_ERR);\n$tester->expectFile(FPM\\Tester::FILE_EXT_LOG_SLOW, $prefix);\n$tester->expectFile(FPM\\Tester::FILE_EXT_PID);\n$tester->terminate();\n$tester->expectLogTerminatingNotices();\n$tester->close();\n$tester->expectNoFile(FPM\\Tester::FILE_EXT_PID);\n?>\nDone")).toMatchSnapshot();
  });
});
