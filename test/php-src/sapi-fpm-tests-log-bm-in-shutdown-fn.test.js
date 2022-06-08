// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/log-bm-in-shutdown-fn.phpt
  it("FPM: Log message in shutdown function", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\nlog_limit = 1024\nlog_buffering = yes\n[unconfined]\nlisten = {{ADDR}}\npm = dynamic\npm.max_children = 5\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 3\ncatch_workers_output = yes\nEOT;\n$code = <<<EOT\n<?php\nregister_shutdown_function(function() {\n    error_log(str_repeat('e', 80));\n});\nEOT;\n$tester = new FPM\\Tester($cfg, $code);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->request()->expectEmptyBody();\n$tester->terminate();\n$tester->expectFastCGIErrorMessage('e', 1050, 80);\n$tester->expectLogMessage('NOTICE: PHP message: ' . str_repeat('e', 80), 1050);\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
