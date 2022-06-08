// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/reload-uses-sigkill-as-last-measure.phpt
  it("If SIGQUIT and SIGTERM during reloading fail, SIGKILL should be sent", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\npid = {{FILE:PID}}\nprocess_control_timeout=1\n[unconfined]\nlisten = {{ADDR}}\nping.path = /ping\nping.response = pong\npm = dynamic\npm.max_children = 5\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 1\nEOT;\n$code = <<<EOT\n<?php\npcntl_sigprocmask(SIG_BLOCK, [SIGQUIT, SIGTERM]);\nEOT;\n$tester = new FPM\\Tester($cfg, $code);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->request()->expectEmptyBody();\n$tester->signal('USR2');\n$tester->expectLogNotice('Reloading in progress ...');\n$tester->expectLogNotice('reloading: .*');\n// The timeout needs to elapse twice until the process will be killed,\n// so we have to wait at least two seconds.\nsleep(2);\n$tester->expectLogNotice('using inherited socket fd=\\d+, \"127.0.0.1:\\d+\"');\n$tester->expectLogStartNotices();\n$tester->ping('{{ADDR}}');\n$tester->terminate();\n$tester->expectLogTerminatingNotices();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
