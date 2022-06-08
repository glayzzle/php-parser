// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/socket-invalid-allowed-clients.phpt
  it("FPM: Socket for invalid allowed client only", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[unconfined]\nlisten = {{ADDR}}\nlisten.allowed_clients = xxx\npm = dynamic\npm.max_children = 5\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 3\ncatch_workers_output = yes\nEOT;\n$tester = new FPM\\Tester($cfg);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->checkRequest('127.0.0.1', 'Req: ok', 'Req: error');\n$tester->terminate();\n// this is from child when starting\n$tester->expectLogLine(\"ERROR: Wrong IP address 'xxx' in listen.allowed_clients\");\n$tester->expectLogLine(\"ERROR: There are no allowed addresses\");\n// this is from the request\n$tester->expectLogLine(\"ERROR: Connection disallowed: IP address '127.0.0.1' has been dropped.\");\n$tester->expectLogTerminatingNotices();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
