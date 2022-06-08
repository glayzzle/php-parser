// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/log-bm-limit-1024-msg-80.phpt
  it("FPM: Buffered message output log with limit 1024 and msg 80", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\nlog_limit = 1024\nlog_buffering = yes\n[unconfined]\nlisten = {{ADDR}}\npm = dynamic\npm.max_children = 5\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 3\ncatch_workers_output = yes\nEOT;\n$code = <<<EOT\n<?php\nerror_log(str_repeat('e', 80));\nEOT;\n$tester = new FPM\\Tester($cfg, $code);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->request()->expectEmptyBody();\n$tester->terminate();\n$tester->expectFastCGIErrorMessage('e', 1050, 80);\n$tester->expectLogMessage('NOTICE: PHP message: ' . str_repeat('e', 80), 1050);\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
