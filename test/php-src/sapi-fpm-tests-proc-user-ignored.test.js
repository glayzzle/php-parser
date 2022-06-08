// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/proc-user-ignored.phpt
  it("FPM: Process user setting ignored when FPM is not running as root", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[unconfined]\nlisten = {{ADDR}}\nuser = foo\nping.path = /ping\nping.response = pong\npm = dynamic\npm.max_children = 5\npm.start_servers = 2\npm.min_spare_servers = 1\npm.max_spare_servers = 3\nEOT;\n$tester = new FPM\\Tester($cfg);\n$tester->start();\n$tester->expectLogNotice(\n    \"'user' directive is ignored when FPM is not running as root\",\n    'unconfined'\n);\n$tester->expectLogStartNotices();\n$tester->terminate();\n$tester->expectLogTerminatingNotices();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
