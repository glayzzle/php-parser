// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/log-bm-limit-2048-msg-4000.phpt
  it("FPM: Buffered message output log with limit 2048 and msg 4000", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\nlog_limit = 2048\nlog_buffering = yes\n[unconfined]\nlisten = {{ADDR}}\npm = dynamic\npm.max_children = 5\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 3\ncatch_workers_output = yes\nEOT;\n$code = <<<EOT\n<?php\nerror_log(str_repeat('t', 4000));\nEOT;\n$tester = new FPM\\Tester($cfg, $code);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->request()->expectEmptyBody();\n$tester->terminate();\n$tester->expectFastCGIErrorMessage('t', 2048, 4000);\n$tester->expectLogMessage('NOTICE: PHP message: ' . str_repeat('t', 2023) . '...', 2048);\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
