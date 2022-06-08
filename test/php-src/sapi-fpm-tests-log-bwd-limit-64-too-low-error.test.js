// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/log-bwd-limit-64-too-low-error.phpt
  it("FPM: Buffered worker output decorated log with limit 64 fails because it is too low", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\nlog_limit = 64\n[unconfined]\nlisten = {{ADDR}}\npm = dynamic\npm.max_children = 5\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 3\ncatch_workers_output = yes\nEOT;\n$code = <<<EOT\n<?php\nfile_put_contents('php://stderr', str_repeat('a', 2048) . \"\\n\");\nEOT;\n$tester = new FPM\\Tester($cfg, $code);\n$tester->start();\n$tester->expectLogError('log_limit must be greater than 512');\n$tester->close(true);\n?>\nDone")).toMatchSnapshot();
  });
});
