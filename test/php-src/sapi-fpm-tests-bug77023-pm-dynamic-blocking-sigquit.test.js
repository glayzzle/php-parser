// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/bug77023-pm-dynamic-blocking-sigquit.phpt
  it("FPM: Blocked SIGQUIT prevents idle process to be killed", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\npid = {{FILE:PID}}\n[unconfined]\nlisten = {{ADDR}}\npm.status_path = /status\npm = dynamic\npm.max_children = 2\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 1\nEOT;\n$code = <<<EOT\n<?php\npcntl_sigprocmask(SIG_BLOCK, [SIGQUIT, SIGTERM]);\nusleep(300000);\nEOT;\n$tester = new FPM\\Tester($cfg, $code);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->multiRequest(2);\n$tester->status([\n    'total processes' => 2,\n]);\n// wait for process to be killed\nsleep(7);\n$tester->expectLogWarning('child \\\\d+ exited on signal 9 \\\\(SIGKILL\\\\) after \\\\d+.\\\\d+ seconds from start', 'unconfined');\n$tester->expectLogNotice('child \\\\d+ started', 'unconfined');\n$tester->expectLogWarning('child \\\\d+ exited on signal 9 \\\\(SIGKILL\\\\) after \\\\d+.\\\\d+ seconds from start', 'unconfined');\n$tester->expectLogNotice('child \\\\d+ started', 'unconfined');\n$tester->status([\n    'total processes' => 1,\n]);\n$tester->terminate();\n$tester->expectLogTerminatingNotices();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
