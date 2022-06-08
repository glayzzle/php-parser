// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/log-bwp-realloc-buffer.phpt
  it("FPM: bug81513 - Buffered worker output plain log stream reallocation", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[unconfined]\nlisten = {{ADDR}}\npm = dynamic\npm.max_children = 5\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 3\ncatch_workers_output = yes\ndecorate_workers_output = no\nEOT;\n$code = <<<EOT\n<?php\nfile_put_contents('php://stderr', str_repeat('a', 100));\nusleep(20000);\nfile_put_contents('php://stderr', str_repeat('b', 2500) . \"\\n\");\nEOT;\n$tester = new FPM\\Tester($cfg, $code);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->request()->expectEmptyBody();\n$tester->terminate();\nvar_dump($tester->getLastLogLine() === str_repeat('a', 100) . str_repeat('b', 923) . \"\\n\");\nvar_dump($tester->getLastLogLine() === str_repeat('b', 1023) . \"\\n\");\nvar_dump($tester->getLastLogLine() === str_repeat('b', 554) . \"\\n\");\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
