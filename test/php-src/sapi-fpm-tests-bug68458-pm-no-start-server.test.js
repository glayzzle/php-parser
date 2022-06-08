// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/bug68458-pm-no-start-server.phpt
  it("FPM: bug68458 - Missing pm.start_servers should emit notice instead of warning", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\nlog_level = warning\n[unconfined]\nlisten = {{ADDR}}\nping.path = /ping\nping.response = pong\npm = dynamic\npm.max_children = 5\n;pm.start_servers = 2\npm.min_spare_servers = 1\npm.max_spare_servers = 3\nEOT;\n$tester = new FPM\\Tester($cfg);\n$tester->start();\n$tester->checkConnection();\n$tester->terminate();\n$tester->expectNoLogMessages();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
