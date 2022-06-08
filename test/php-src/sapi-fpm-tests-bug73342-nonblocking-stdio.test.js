// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/bug73342-nonblocking-stdio.phpt
  it("FPM: bug73342 - Non-blocking stdin", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[unconfined]\nlisten = {{ADDR}}\npm = dynamic\npm.max_children = 5\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 3\nEOT;\n$code = <<<EOT\n<?php\necho \"Before\\n\";\nstream_set_blocking(fopen('php://stdin', 'r'), false);\necho \"After\\n\";\nEOT;\n$tester = new FPM\\Tester($cfg, $code);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->request()->expectBody(\"Before\\nAfter\");\n$tester->request()->expectBody(\"Before\\nAfter\");\n$tester->terminate();\n$tester->expectLogTerminatingNotices();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
