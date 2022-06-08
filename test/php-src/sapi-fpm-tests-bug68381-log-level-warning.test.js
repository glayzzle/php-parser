// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/bug68381-log-level-warning.phpt
  it("FPM: bug68381 - Log messages with warning level only", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\nlog_level = warning\n[unconfined]\nlisten = {{ADDR}}\npm = dynamic\npm.max_children = 5\npm.start_servers = 2\npm.min_spare_servers = 1\npm.max_spare_servers = 3\nEOT;\n$tester = new FPM\\Tester($cfg);\n$tester->start();\n$tester->checkConnection();\n$tester->terminate();\n$tester->expectNoLogMessages();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
