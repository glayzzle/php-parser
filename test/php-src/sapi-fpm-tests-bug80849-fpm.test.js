// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/bug80849-fpm.phpt
  it("Bug #80849 (HTTP Status header truncation)", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[unconfined]\nlisten = {{ADDR}}\npm = dynamic\npm.max_children = 5\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 3\nEOT;\n$code = <<<EOT\n<?php\nheader('HTTP/1.1 201 ' . str_repeat('A', 1014), true);\nEOT;\n$tester = new FPM\\Tester($cfg, $code);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester\n    ->request()\n    ->expectHeader('Status', '201 ' . str_repeat('A', 1011));\n$tester->terminate();\n$tester->close();\n?>")).toMatchSnapshot();
  });
});
