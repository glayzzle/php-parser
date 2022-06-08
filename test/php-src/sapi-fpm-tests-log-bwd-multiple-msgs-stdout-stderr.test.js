// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/log-bwd-multiple-msgs-stdout-stderr.phpt
  it("FPM: Buffered worker output decorated log with multiple continuous messages (stdout/stderr mixed)", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[unconfined]\nlisten = {{ADDR}}\npm = dynamic\npm.max_children = 5\npm.start_servers = 1\npm.min_spare_servers = 1\npm.max_spare_servers = 3\ncatch_workers_output = yes\nEOT;\n$code = <<<EOT\n<?php\nfile_put_contents('php://stdout', \"msg 1 - \");\nusleep(1);\nfile_put_contents('php://stderr', \"msg 2 - \");\nusleep(1);\nfile_put_contents('php://stderr', \"msg 3\");\nEOT;\n$tester = new FPM\\Tester($cfg, $code);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->request()->expectEmptyBody();\n$tester->request()->expectEmptyBody();\n$tester->expectLogLine('msg 1 - ', false);\n$tester->expectLogLine('msg 2 - msg 3', true);\n$tester->terminate();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
