// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/bug77934-reload-process-control.phpt
  it("FPM: bug77934 - php-fpm kill -USR2 not working", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\npid = {{FILE:PID}}\nprocess_control_timeout=20\n[unconfined]\nlisten = {{ADDR}}\nping.path = /ping\nping.response = pong\npm = dynamic\npm.max_children = 5\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 1\nEOT;\n$tester = new FPM\\Tester($cfg);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->ping('{{ADDR}}');\n$tester->signal('USR2');\n$tester->expectLogNotice('Reloading in progress ...');\n$tester->expectLogNotice('reloading: .*');\n$tester->expectLogNotice('using inherited socket fd=\\d+, \"127.0.0.1:\\d+\"');\n$tester->expectLogStartNotices();\n$tester->ping('{{ADDR}}');\n$tester->terminate();\n$tester->expectLogTerminatingNotices();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
