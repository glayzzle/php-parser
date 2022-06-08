// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/bug68421-ipv6-access-log.phpt
  it("FPM: bug68421 - IPv6 all addresses and access_log", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG:ERR}}\n[unconfined]\nlisten = {{ADDR:IPv6:ANY}}\naccess.log = {{FILE:LOG:ACC}}\nping.path = /ping\nping.response = pong\npm = dynamic\npm.max_children = 5\npm.start_servers = 2\npm.min_spare_servers = 1\npm.max_spare_servers = 3\nEOT;\n$tester = new FPM\\Tester($cfg);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->ping('127.0.0.1');\n$tester->ping('[::1]');\n$tester->terminate();\n$tester->expectLogTerminatingNotices();\n$tester->close();\n$tester->printAccessLog();\n?>\nDone")).toMatchSnapshot();
  });
});
