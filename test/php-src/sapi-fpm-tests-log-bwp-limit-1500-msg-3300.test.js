// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/log-bwp-limit-1500-msg-3300.phpt
  it("FPM: Buffered worker output plain log with limit 1500 and msg 3300", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\nlog_limit = 1500\nlog_buffering = yes\n[unconfined]\nlisten = {{ADDR}}\npm = dynamic\npm.max_children = 5\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 3\ncatch_workers_output = yes\ndecorate_workers_output = no\nEOT;\n$code = <<<EOT\n<?php\nfile_put_contents('php://stderr', str_repeat('a', 3300) . \"\\n\");\nEOT;\n$tester = new FPM\\Tester($cfg, $code);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->request()->expectEmptyBody();\n$tester->terminate();\n$tester->expectLogMessage('a', 1500, 3300, false);\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
