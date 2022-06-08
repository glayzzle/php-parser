// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/fpm/tests/proc-idle-timeout.phpt
  it("FPM: Process manager config pm.process_idle_timeout", function () {
    expect(parser.parseCode("<?php\nrequire_once \"tester.inc\";\n$cfg = <<<EOT\n[global]\nerror_log = {{FILE:LOG}}\n[unconfined]\nlisten = {{ADDR}}\npm = ondemand\npm.max_children = 3\npm.process_idle_timeout = 1\npm.status_path = /status\nEOT;\n$code = <<<EOT\n<?php\nusleep(300000);\nEOT;\n$tester = new FPM\\Tester($cfg, $code);\n$tester->start();\n$tester->expectLogStartNotices();\n$tester->multiRequest(2, null, null, null, false, 7000);\n$tester->status([\n    'total processes' => 2,\n]);\n// wait for process idle timeout\nsleep(5);\n$tester->status([\n    'total processes' => 1,\n]);\n$tester->terminate();\n$tester->expectLogTerminatingNotices();\n$tester->close();\n?>\nDone")).toMatchSnapshot();
  });
});
